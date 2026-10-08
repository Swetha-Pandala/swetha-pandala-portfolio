# Swetha Pandala — Developer Portfolio

**Generative AI | Agentic AI | RAG | Python | Full-Stack Engineering**

> "Where software engineering meets intelligent systems."

[![Live Site](https://img.shields.io/badge/Live-swethapandala.com-c2a4ff?style=flat-square)](https://swethapandala.com)
[![GitHub](https://img.shields.io/badge/GitHub-Swetha--Pandala-181717?style=flat-square&logo=github)](https://github.com/Swetha-Pandala)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-swetha--pandala-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/swetha-pandala/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)](./LICENSE)

The personal portfolio of Swetha Pandala: an interactive, animated site that shows her work as an AI engineer and full-stack developer.

**Live:** https://swethapandala.com

---

## Professional overview

Full-stack software engineer and Generative AI developer with about 7 years of experience building enterprise applications in financial services and healthcare. Her focus areas:

- Generative AI and LLM applications
- Agentic AI and multi-agent orchestration (LangGraph, LangChain, AWS Bedrock)
- Retrieval-Augmented Generation and vector search
- Python and FastAPI
- Machine learning and deep learning
- Java and Spring Boot
- Cloud-native development on AWS
- Full-stack engineering with React and TypeScript

---

## Features

- **Interactive hero.** The character's head follows the cursor using direction frames drawn on a canvas, so her body stays still.
- **Custom cursor**, hover effects, and smooth scrolling with Lenis.
- **GSAP and ScrollTrigger animations**, including a scroll-linked experience timeline.
- **Expandable skill panels** for AI Engineer and Full-Stack work.
- **Project showcase** that scrolls sideways, with GitHub and live-demo links where they exist.
- **Hire Me contact form.** It checks your input on the server and saves each message. It is set up to send email notifications.
- **Résumé download** (`Swetha_Pandala_Resume.pdf`).
- **Useful Resources** section with links to curated learning, industry, and research resources.
- **Responsive layouts** for desktop, tablet, and mobile, plus support for reduced motion.

---

## Technology stack

| Category | Technologies |
|---|---|
| Frontend | React 19, TanStack Start / TanStack Router, TypeScript, Vite |
| Styling | Plain CSS modules per component, Tailwind CSS v4 (base) |
| Animations | GSAP + ScrollTrigger, Lenis smooth scroll, Canvas `requestAnimationFrame` |
| Backend | Lovable Cloud (Postgres database), TanStack server functions, Zod validation |
| Email | Lovable Emails (React Email templates) |
| Hosting | Lovable (edge runtime), custom domain via Namecheap |
| Version control | Git and GitHub |

---

## Project structure

```text
.
├── public/                 # favicon, robots.txt, sitemap.xml, résumé PDF
├── src/
│   ├── assets/             # project visuals, character frame pointers
│   ├── components/         # Landing, About, WhatIDo, Career, Work, TechStack,
│   │   │                   # Credentials, Resources, Contact, HireMeModal, Cursor...
│   │   ├── styles/         # per-component CSS
│   │   └── utils/          # careerTimeline, initialFX, resumeDownload
│   ├── context/            # LoadingProvider
│   ├── integrations/       # backend client (generated)
│   ├── lib/                # server functions, email templates
│   ├── pages/              # MyWorks page
│   ├── routes/             # file-based routes (/, /myworks, /api/public/resume)
│   ├── utils/              # TextSplitter
│   └── config.ts           # all personal content in one place
├── supabase/               # backend migrations/config
├── LICENSE
└── package.json
```

All personal content lives in `src/config.ts`. That includes the profile, experience, projects, skills, education, certifications, and resources.

---

## Local development

```bash
git clone https://github.com/Swetha-Pandala/swetha-pandala-portfolio.git
cd swetha-pandala-portfolio
npm install            # or: bun install
cp .env.example .env   # fill in your own backend values
npm run dev            # http://localhost:8080
npm run build          # production build
```

When you run the site locally, the contact form and email need your own backend credentials. Never commit real keys.

---

## Deployment

The site is built and hosted on **Lovable**. Click **Publish** to deploy front-end changes. Backend changes go live automatically. The custom domain `swethapandala.com` (and `www`) is registered at Namecheap and connected through Lovable's domain settings. Transactional email is sent from `notify.swethapandala.com`.

---

## Contact

- Website: https://swethapandala.com
- GitHub: https://github.com/Swetha-Pandala
- LinkedIn: https://www.linkedin.com/in/swetha-pandala/
- Email: swethapandala799@gmail.com

---

## License

MIT. See [LICENSE](./LICENSE). The original upstream copyright notice is kept, as the license requires.
