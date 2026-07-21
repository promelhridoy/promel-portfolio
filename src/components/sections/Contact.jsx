"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { contactFormSchema } from "@/lib/validations";
import { slideInLeft, slideInRight } from "@/lib/motion";
import { siteConfig } from "@/lib/metadata";

export function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-container py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great together"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5"
        >
          {[
            { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
            { icon: MapPin, label: "Location", value: siteConfig.location },
          ].map(({ icon: Icon, label, value, href }) => (
            <Card key={label}>
              <CardContent className="flex items-center gap-4">
                <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                  <Icon className="h-4.5 w-4.5 text-accent" />
                </span>
                <div>
                  <p className="text-xs text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-accent">{value}</a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="relative overflow-hidden">
            <CardContent>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                    role="status"
                  >
                    <CheckCircle2 className="h-14 w-14 text-emerald-400" />
                    <div>
                      <h3 className="font-display text-xl font-semibold">Message sent!</h3>
                      <p className="mt-1 text-sm text-muted">
                        Thanks for reaching out — I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Jane Doe" error={errors.name} {...register("name")} />
                        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="jane@company.com" error={errors.email} {...register("email")} />
                        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Project inquiry" error={errors.subject} {...register("subject")} />
                      {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" rows={5} placeholder="Tell me about your project..." error={errors.message} {...register("message")} />
                      {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>

                    {status === "error" && (
                      <p className="text-center text-sm text-red-400" role="alert">
                        Something went wrong. Please try again or email me directly.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
