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
      { title: "Swetha Pandala | Generative AI & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Generative AI and Full-Stack Engineer specializing in agentic AI, RAG, LLM applications, Python, FastAPI, Java, Spring Boot and AWS.",
      },
      { property: "og:title", content: "Swetha Pandala | Generative AI & Full-Stack Engineer" },
      {
        property: "og:description",
        content:
          "Generative AI and Full-Stack Engineer specializing in agentic AI, RAG, LLM applications, Python, FastAPI, Java, Spring Boot and AWS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
