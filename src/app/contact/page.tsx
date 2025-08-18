"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Get reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add reCAPTCHA token to the data
    const submitData = {
      ...data,
      recaptchaToken,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    });

    if (res.ok) {
      setStatus("sent");
      if (form) {
        form.reset();
      }
      // Reset reCAPTCHA
      recaptchaRef.current?.reset();
    } else {
      setStatus("error");
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
    }
  }

  return (
    <>
      <Header />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            Ready to start your project? Tell us a bit about it.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <input
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-md border px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-md border px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="w-full rounded-md border px-4 py-2"
            />

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            />

            <button
              className="rounded-md bg-black px-5 py-2 text-white disabled:opacity-60"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-green-600">
                Thanks! We’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="mt-8 text-sm text-gray-600">
            <p>
              Email: <b>connect@rtr-technologies.com</b>
            </p>
            <p>Social: LinkedIn · Instagram · Behance · Dribbble</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
