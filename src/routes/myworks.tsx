import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import MyWorks from "../pages/MyWorks";
import Cursor from "../components/Cursor";
import "../portfolio.css";
import "../app-layout.css";

export const Route = createFileRoute("/myworks")({
  head: () => ({
    meta: [
      { title: "All Works | Swetha Pandala" },
      {
        name: "description",
        content:
          "Every project by Swetha Pandala — multi-agent AI assistants, document intelligence platforms and applied NLP systems.",
      },
      { property: "og:title", content: "All Works | Swetha Pandala" },
      {
        property: "og:description",
        content:
          "Every project by Swetha Pandala — multi-agent AI assistants, document intelligence platforms and applied NLP systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyWorksPage,
  ssr: false,
});

function MyWorksPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="main-body main-active">
      <Cursor />
      <MyWorks />
    </main>
  );
}
