import { createFileRoute } from "@tanstack/react-router";

// Serves the résumé with an "attachment" header so every browser saves it
// as a file instead of only previewing it.
export const Route = createFileRoute("/api/public/resume")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const res = await fetch(new URL("/Swetha_Pandala_Resume.pdf", request.url));
        if (!res.ok) return new Response("Not found", { status: 404 });
        return new Response(res.body, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="Swetha_Pandala_Resume.pdf"',
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
