import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import frames from "../assets/character-frames.json";
import "./styles/Character2D.css";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = frames.ring.length; // 64 frames, index 0 = looking up, clockwise
const TAU = Math.PI * 2;
const LERP = 0.18; // smooth, symmetric response
const DEADZONE = 0.12; // share of the viewport around the face that means "eye contact"
const FACE_Y = 0.3; // face centre as a share of the frame height

const lerpAngle = (a: number, b: number, t: number) => {
  let d = ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI;
  return a + d * t;
};

const Character2D = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const staticOnly = reduceMotion || isCoarse;

    // Preload: centre first, then the ring (skipped when static).
    const center = new Image();
    center.decoding = "async";
    center.src = frames.center;
    const ring: HTMLImageElement[] = staticOnly
      ? []
      : frames.ring.map((src) => {
          const img = new Image();
          img.decoding = "async";
          img.src = src;
          return img;
        });

    let drawn: HTMLImageElement | null = null;
    const draw = (img: HTMLImageElement) => {
      if (img === drawn || !img.complete || !img.naturalWidth) return;
      if (canvas.width !== img.naturalWidth) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0); // exactly one frame, full opacity, no blending
      drawn = img;
    };

    center.onload = () => {
      draw(center);
      gsap.to(stage, { opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.4 });
    };

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    scrollTl.to(stage, { opacity: 0, ease: "none" });

    if (staticOnly) {
      return () => {
        scrollTl.scrollTrigger?.kill();
        scrollTl.kill();
      };
    }

    let pointerX = -1;
    let pointerY = -1;
    let angle = 0;
    let hasAngle = false;
    let currentIdx = -1;
    let rafId = 0;

    const onMove = (e: PointerEvent) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
    };
    const onLeave = () => {
      pointerX = -1;
    };

    const render = () => {
      rafId = requestAnimationFrame(render);
      if (pointerX < 0) {
        draw(center);
        hasAngle = false;
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const fx = rect.left + rect.width / 2;
      const fy = rect.top + rect.height * FACE_Y;
      const dx = pointerX - fx;
      const dy = pointerY - fy;
      const radius = Math.max(window.innerWidth, window.innerHeight) * DEADZONE;

      if (Math.hypot(dx, dy) < radius) {
        draw(center);
        hasAngle = false;
        return;
      }
      // 0 = straight up, clockwise on screen
      const target = Math.atan2(dx, -dy);
      angle = hasAngle ? lerpAngle(angle, target, LERP) : target;
      hasAngle = true;
      // hysteresis: only switch frame once the angle clearly passes the boundary
      const pos = (((angle / TAU) * FRAME_COUNT) % FRAME_COUNT + FRAME_COUNT) % FRAME_COUNT;
      let diff = pos - currentIdx;
      if (diff > FRAME_COUNT / 2) diff -= FRAME_COUNT;
      if (diff < -FRAME_COUNT / 2) diff += FRAME_COUNT;
      if (currentIdx < 0 || Math.abs(diff) > 0.6) {
        currentIdx = ((Math.round(pos) % FRAME_COUNT) + FRAME_COUNT) % FRAME_COUNT;
      }
      const img = ring[currentIdx];
      if (img && img.complete) draw(img);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(rafId);
      scrollTl.scrollTrigger?.kill();
      scrollTl.kill();
    };
  }, []);

  return (
    <div className="character-stage" ref={stageRef} aria-hidden="true">
      <div className="character-glow"></div>
      <div className="character-layer">
        <canvas ref={canvasRef} className="character-image" />
      </div>
    </div>
  );
};

export default Character2D;
