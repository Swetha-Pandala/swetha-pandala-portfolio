## Footer text update

Only the text in the footer's closing block changes. Layout, animation, typography and spacing stay exactly as they are.

**Quote** (replaces "Let's build intelligent systems with Swetha Pandala"):

"Where software engineering meets intelligent systems."

The words "intelligent systems" get the same purple accent that the name has now, and the line breaks follow the current three-line rhythm:
Where software engineering / meets / intelligent systems.

**Copyright line** (replaces "© 2026"):

© 2026 Swetha Pandala. All rights reserved.

### Technical details
- `src/components/Contact.tsx`: edit the `<h2>` and `<h5>` in `.contact-box` only. The year stays `new Date().getFullYear()` (currently 2026), and the name comes from `config.developer.fullName`.
- No CSS changes. Check at 1440 and 390 px that nothing overlaps.
