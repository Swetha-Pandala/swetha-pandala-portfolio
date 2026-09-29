## Targeted refinements (no redesign)

Only the items below change. The character, colors, animations, project, experience and resource content, résumé download, cursor and scrolling all stay as they are.

### 1. Name on one line
The hero will show "SWETHA PANDALA" on a single line on desktop and laptop screens. The font stays bold and the same style. The size is only trimmed slightly where needed so the name fits beside the character at 1920, 1600, 1440, 1366, 1280 and 1024 px. On phones the name can wrap only if it truly doesn't fit.

### 2. Top-right navigation
ABOUT, EXPERIENCE, WORK, RESOURCES and CONTACT are already in this order and already use the smooth scroll. Each one will be checked to confirm it lands on the right section: About, Career, Work, Resources and Contact. Spacing will be tightened slightly if any size looks crowded.

### 3. What I Do panels
The existing Redoyanul click/hover expand behavior is kept exactly as it is. Only the skill tags inside each panel are replaced with your full lists:
- AI ENGINEER (7 main skills): Generative AI, Agentic AI, RAG, LangChain, LangGraph, AWS Bedrock, LLM Evaluation.
- FULL-STACK (7 main skills): Java, Spring Boot, Python, FastAPI, React, AWS, Kubernetes.

They show as the same small tag chips used now, not as a paragraph. If the longer lists make the opened panel overflow, the tag spacing will be tightened so the panel doesn't jump.

### 4. Hire Me
It already opens https://www.linkedin.com/in/swetha-pandala/. It will be confirmed to open in a new tab with safe link settings. Its look doesn't change.

### 5. Footer
No change. The footer stays as it is now: "Where software engineering meets intelligent systems." and "© 2026 Swetha Pandala. All rights reserved."

### Testing
Everything on your checklist will be checked in a browser at 1920, 1600, 1440, 1366, 1280, 1024, 768, 430 and 390 px:
- the name on one line
- every navigation link
- both panels opening, including on phones
- the Hire Me link
- the footer text

### Technical details
- `Landing.css`: `.landing-intro h1` gets `white-space: nowrap` from 769px up, the `<br />` is hidden there, and desktop font sizes use `clamp()`. `.landing-intro` gets a `max-width` so the name doesn't run into the character.
- `config.ts`: replace `skills.develop.tools` and `skills.design.tools` only.
- `WhatIDo.css`: slightly smaller tag gap/padding only if the longer lists overflow.
- `CallToAction.tsx`: confirm `target="_blank" rel="noopener noreferrer"`.
- Navigation and footer: check only; edit nothing unless a test fails.
