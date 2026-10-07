import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin.from("contact_messages").insert(data).select("id").single();
    if (error) throw new Error("Could not send message");
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("hire-me-notification", "swethapandala799@gmail.com", {
        templateData: data,
        replyTo: data.email,
        idempotencyKey: `hire-me-${row.id}`,
      });
    } catch (e) {
      console.error("Hire Me email failed (message saved):", e);
    }
    return { ok: true };
  });
