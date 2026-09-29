import type { MouseEvent } from "react";

// Direct <a download> works on the live site. Embedded previews (iframes) often
// block downloads silently, so there we open the PDF in a new tab instead.
export function handleResumeClick(e: MouseEvent<HTMLAnchorElement>) {
  let embedded = false;
  try {
    embedded = window.self !== window.top;
  } catch {
    embedded = true;
  }
  if (embedded) {
    e.preventDefault();
    window.open(e.currentTarget.href, "_blank", "noopener,noreferrer");
  }
}
