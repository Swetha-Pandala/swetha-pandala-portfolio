import type { MouseEvent } from "react";

const DOWNLOAD_URL = "/api/public/resume";

// Opens a download endpoint that forces "save as file". Inside embedded
// previews (iframes block downloads) it opens in a new top-level tab, which
// immediately saves the file; on the live site it downloads in place.
export function handleResumeClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  let embedded = false;
  try {
    embedded = window.self !== window.top;
  } catch {
    embedded = true;
  }
  if (embedded) {
    const w = window.open(DOWNLOAD_URL, "_blank");
    if (!w) window.location.href = DOWNLOAD_URL;
    return;
  }
  window.location.href = DOWNLOAD_URL;
}
