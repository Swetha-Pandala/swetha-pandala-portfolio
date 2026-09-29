# Fix pass: real head/eye tracking, Experience nav + progress line, résumé download

## 1. Character: real directional tracking (no whole-image tilt)
- Remove the current whole-image rotateX/rotateY/translate on mouse move. The body stays put. Only a gentle idle breathing float and the scroll fade stay.
- Make 9 direction frames from Anime.png with image editing: centre, up, down, left, right, up-left, up-right, down-left, down-right. Keep the same canvas size, pose, body, outfit, colours and framing. Only the head angle (a few degrees) and the eye direction change.
- Cut each frame out the same way as the current picture.
- **Checkpoint: you review all 9 frames before they go live.** If any face drifts from hers, I redo it or drop it. If the faces can't match reliably, I tell you and ask you for the frames instead. Here is exactly what you would need to supply: 9 transparent PNGs, 1000x1000, same character and pose, one per direction above, with only the head and eyes changing (or a 2 to 3 second head-turn video from the same pose).
- How it runs: all frames load ahead of time and sit stacked on top of each other, with only one visible at a time, so there is no blending and no double face. An animation loop measures the cursor's angle and distance from her face and smooths it quickly (low lag). It shows the matching direction, and switches back to the centre frame (eye contact) when the cursor is near her face. No per-mousemove React state.
- On tablets the tracking is lighter. On phones and with reduced motion, only the centre frame shows.
- Keep the current size and position; adjust them against the reference hero if needed.
- When you upload the SL Tech Journal tutorial, I will line the details up with it. Until then I follow the method described in your brief.

## 2. Experience in navigation
- Navbar becomes ABOUT · EXPERIENCE · WORK · CONTACT. Resources stays in the page flow, just before Contact, so the bar isn't crowded. EXPERIENCE scrolls smoothly to the Career section.

## 3. Career vertical progress line (restored from the original)
- The original's progress line was deleted by mistake along with the old 3D-model code. I'm restoring its scroll-linked timeline exactly: the line grows from 0 to 100% height as you scroll (starts at top 50%, ends at bottom 30%, scrub 1.5), the entries fade in one after another, the glowing dot's pulse settles, and on desktop the section shifts down 20%. It runs after loading and refreshes on resize.

## 4. Résumé download
- In the Lovable preview frame, downloads can be blocked, which looks like "nothing happens". The link stays a real direct PDF download. I'll add a same-tab fallback: if the browser ignores the download, it opens the PDF so it's never a dead click. I'll test the published-style build in Chromium (the file saves as Swetha_Pandala_Resume.pdf and is a valid PDF with her content), plus a mobile viewport.

## 5. Re-audit and verification
- Side-by-side check against the original source for spacing, the cursor on the new nav item and the frames, Lenis and ScrollTrigger refresh, and console warnings (the leftover "GSAP target not found" warnings get fixed).
- Screenshots at 1920, 1440, 1024, 768 and 390 wide, then a production build.

## Technical notes
- New `CharacterTracker` replaces the mouse logic in Character2D. Frames are stored in the asset CDN (WebP), shown with an `opacity` swap, driven by `requestAnimationFrame` and `atan2` angle with lerp, with a dead zone around 12% of the viewport around the face.
- `setAllTimeline()` goes back into `src/components/utils/` and is called from `initialFX`.
