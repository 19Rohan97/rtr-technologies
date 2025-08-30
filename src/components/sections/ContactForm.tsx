"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const submitData = { ...data, recaptchaToken } as Record<string, any>;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
      recaptchaRef.current?.reset();
    } else {
      setStatus("error");
      recaptchaRef.current?.reset();
    }
  }

  return (
    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} />

        <Button variant="primary" size="lg" disabled={status === "sending"} withRipple className="w-full">
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {status === "sent" && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <p className="text-green-700 dark:text-green-300 text-center">Thanks! We&apos;ll get back to you soon.</p>
          </div>
        )}
        {status === "error" && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <p className="text-red-700 dark:text-red-300 text-center">Something went wrong. Please try again.</p>
          </div>
        )}
      </form>
    </div>
  );
}

