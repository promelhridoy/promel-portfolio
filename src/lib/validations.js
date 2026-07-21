import { z } from "zod";

/** Shared schema for the contact form — used on both client and server. */
export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject is too short").max(120),
  message: z.string().min(10, "Message should be at least 10 characters").max(2000),
});
