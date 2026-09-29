import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import characterAsset from "../assets/swetha-character.png.asset.json";
import "./styles/Character2D.css";

gsap.registerPlugin(ScrollTrigger);

const Character2D = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const layer = layerRef.current;
    const image = imageRef.current;
    const glow = glowRef.current;
    if (!stage || !layer || !image || !glow) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    gsap.to(stage, { opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.4 });

    if (reduceMotion) return;

    // Gentle idle float
    const float = gsap.to(layer, {
      y: "+=14",
      duration: 3.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Scroll-driven depth: character eases back and fades as the hero leaves
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    scrollTl.to(stage, { scale: 0.82, yPercent: 10, opacity: 0, ease: "none" });

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      gsap.set(layer, {
        rotateY: currentX * 11,
        rotateX: -currentY * 8,
        x: currentX * 34,
        transformPerspective: 1100,
        transformOrigin: "50% 60%",
      });
      gsap.set(image, {
        x: currentX * 16,
        y: currentY * 10,
        scale: 1 + Math.abs(currentX) * 0.012,
      });
      gsap.set(glow, {
        x: -currentX * 90,
        y: -currentY * 60,
        opacity: 0.55 + currentX * 0.12,
      });

      rafId = requestAnimationFrame(render);
    };

    if (!isCoarse) {
      window.addEventListener("mousemove", onMove, { passive: true });
      rafId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      float.kill();
      scrollTl.scrollTrigger?.kill();
      scrollTl.kill();
    };
  }, []);

  return (
    <div className="character-stage" ref={stageRef} aria-hidden="true">
      <div className="character-glow" ref={glowRef}></div>
      <div className="character-layer" ref={layerRef}>
        <img
          ref={imageRef}
          className="character-image"
          src={characterAsset.url}
          alt=""
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </div>
  );
};

export default Character2D;
