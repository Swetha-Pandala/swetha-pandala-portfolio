import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "../lib/contact.functions";
import { lenis } from "./Navbar";
import "./styles/HireMeModal.css";

type Props = { open: boolean; onClose: () => void };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const HireMeModal = ({ open, onClose }: Props) => {
  const send = useServerFn(sendContactMessage);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    setTimeout(() => dialogRef.current?.querySelector<HTMLElement>("input")?.focus(), 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const els = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>("button, input, textarea, a[href]")
      ).filter((el) => !el.hasAttribute("disabled"));
      if (!els.length) return;
      const first = els[0]!, last = els[els.length - 1]!;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      prevFocus?.focus();
    };
  }, [open, onClose]);

  useEffect(() => { if (!open) { setStatus("idle"); setErrors({}); } }, [open]);

  if (!open) return null;

  const validate = () => {
    const e: Partial<Record<"name" | "email" | "message", string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(form.email.trim())) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "sending" || !validate()) return;
    setStatus("sending");
    try {
      await send({ data: { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() } });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field = (k: keyof typeof form) => ({
    id: `hire-${k}`,
    value: form[k],
    "aria-invalid": Boolean(errors[k]),
    "aria-describedby": errors[k] ? `hire-${k}-err` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value })),
  });

  return (
    <div className="hire-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={dialogRef} className="hire-dialog" role="dialog" aria-modal="true" aria-labelledby="hire-title" data-lenis-prevent>
        <button type="button" className="hire-close" aria-label="Close" onClick={onClose} data-cursor="disable">×</button>
        <h3 id="hire-title">Let's <span>work together</span></h3>
        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="hire-name">Your Name</label>
          <input type="text" placeholder="e.g. Jane Doe" required autoComplete="name" {...field("name")} />
          {errors.name && <p className="hire-err" id="hire-name-err" role="alert">{errors.name}</p>}

          <label htmlFor="hire-email">Your Email Address</label>
          <input type="email" placeholder="e.g. jane@example.com" required autoComplete="email" {...field("email")} />
          {errors.email && <p className="hire-err" id="hire-email-err" role="alert">{errors.email}</p>}

          <label htmlFor="hire-message">Message</label>
          <textarea rows={5} placeholder="Share details about your project, opportunity, role, or inquiry..." required {...field("message")} />
          {errors.message && <p className="hire-err" id="hire-message-err" role="alert">{errors.message}</p>}

          <button type="submit" className="hire-submit" disabled={status === "sending"} aria-busy={status === "sending"} data-cursor="disable">
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          <div aria-live="polite">
            {status === "success" && <p className="hire-ok">Thank you! Your message has been sent successfully. I’ll get back to you soon.</p>}
            {status === "error" && <p className="hire-err" role="alert">Sorry, your message couldn't be sent. Please try again.</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
