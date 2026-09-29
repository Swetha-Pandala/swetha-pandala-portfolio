# Hero fix pass: consistent expression, fuller character, clean text

Only the hero changes. Other sections, the theme, the cursor and the section order stay as they are.

## 1. Same smile in every direction
- Audit all 64 direction pictures and the centre one side by side. Score each one on smile, eyes and face shape against the centre picture.
- Fix the weak ones, which are mostly on the left side. For each left-side direction, take its matching right-side picture, which looks good. Mirror only the face and head, then blend it back onto her real body, hair parting and outfit. Her body is never flipped.
- Any picture that still drifts gets remade from the centre picture with a "same smile, same expression" instruction, or dropped. Neighbouring pictures then cover that direction.
- **Checkpoint:** I show you a contact sheet (left / right / up / down / diagonals / centre) before anything goes live.

## 2. Smoother, symmetrical tracking
- Use the same dead zone and speed on both sides, with a small amount of hysteresis so the picture doesn't flicker at the boundary between two directions.
- Base the motion on distance, so small cursor moves give small head turns. A slightly softer ease removes jumpy switching.
- The centre picture (eye contact) shows when the cursor is near her face or leaves the window.

## 3. Fuller-body presentation
- Anime.png only shows her down to the chest. First I try extending the picture downward (torso, arms, and the outfit continuing in the same colours and red tones) and show it to you.
- If you approve, all direction pictures are rebuilt on the taller canvas. Only the head area changes between them, so the body stays perfectly still.
- She becomes larger and anchored at the bottom of the screen, like the reference. There is a soft fade at the bottom, and the glow is kept.
- If the extension doesn't look like her, I keep the current framing but rebalance the size and position. In that case, a full-body version would need a full-body drawing from you in the same style.

## 4. Right-side text overlap
- The two role lines currently swap in the same spot. Their fade layer can show both at once and collide with the character. I'll:
  - give the right block a fixed max-width, place it on a layer above the character, and set clear line spacing
  - make sure only one line in each swap pair is visible at a time
  - scale the font size with the screen width so "FULL-STACK DEVELOPER" never runs into her or off screen
- Line up the left intro (name) and the right block at the same height, with equal gaps on each side of the character.

## 5. Testing
- Hover left, right, up, down, all four diagonals and the centre, with a screenshot of each for comparison.
- Screenshots of the whole hero at 1440, 1280, 1024, 768 and 430 wide, checking for no overlap.
- Check the console is clean, then run the production build.

## Technical notes
- Head-only mirroring is done by compositing with a feathered mask over the face area. Frames stay as WebP on the asset CDN, and `character-frames.json` is updated.
- Character2D: per-side symmetric thresholds, index hysteresis (±0.6 frame), and lerp tuned to about 0.18.
- Landing.css: `.landing-info` gets max-width, z-index above `.character-stage`, and clamp() fonts. The loop-text pairs get proper opacity handoff.
