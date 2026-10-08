import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";
import { LoadingProvider } from "../context/LoadingProvider";
import "../portfolio.css";
import "../app-layout.css";

const Character2D = lazy(() => import("../components/Character2D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swetha Pandala | AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Generative AI and Full-Stack Engineer specializing in agentic AI, RAG, LLM applications, Python, FastAPI, Java, Spring Boot and AWS.",
      },
      { property: "og:title", content: "Swetha Pandala | AI Engineer & Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Generative AI and Full-Stack Engineer specializing in agentic AI, RAG, LLM applications, Python, FastAPI, Java, Spring Boot and AWS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://swethapandala.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Swetha Pandala",
          url: "https://swethapandala.com",
          jobTitle: "AI Engineer & Full-Stack Developer",
          email: "mailto:swethapandala799@gmail.com",
          sameAs: ["https://github.com/Swetha-Pandala", "https://www.linkedin.com/in/swetha-pandala/"],
        }),
      },
    ],
  }),
  component: Home,
  ssr: false,
});

function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <LoadingProvider>
      <MainContainer>
        <Suspense fallback={null}>
          <Character2D />
        </Suspense>
      </MainContainer>
    </LoadingProvider>
  );
}
