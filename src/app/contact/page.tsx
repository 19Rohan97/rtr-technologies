"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { contactPageSchema } from "@/seo/contact";

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
      <JsonLd id="ld-contact" data={contactPageSchema()} />
      <JsonLd
        id="ld-breadcrumbs"
        data={breadcrumbsSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <Header />
      <PageBanner
        title="Contact Us"
        description="Ready to start your project? Tell us a bit about it. We're here to help you transform your digital presence and achieve your business goals."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Contact Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  We&apos;re here to help you transform your digital presence
                  and achieve your business goals. Whether you need a new
                  website, SEO optimization, or ongoing support, we&apos;d love
                  to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Send us an email and we&apos;ll get back to you within 24
                      hours.
                    </p>
                    <a
                      href="mailto:connect@rtr-technologies.com"
                      className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors"
                    >
                      connect@rtr-technologies.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Call Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Prefer to talk? Give us a call during business hours.
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800"
                  >
                    <a href="#" aria-label="LinkedIn">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800"
                  >
                    <a href="#" aria-label="Instagram">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.85 14.81 3.85 12.455 5.126 11.18c1.275-1.275 3.63-1.275 4.905 0s1.275 3.63 0 4.905c-.875.807-2.026 1.297-3.323 1.297zm7.138 0c-1.297 0-2.448-.49-3.323-1.297-1.276-1.275-1.276-3.63 0-4.905s3.63-1.275 4.905 0 1.275 3.63 0 4.905c-.875.807-2.026 1.297-3.323 1.297z" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800"
                  >
                    <a href="#" aria-label="Behance">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 2-5.101 2-3.074 0-5.564-1.584-5.564-5.33 0-3.330 2.014-5.67 5.564-5.67 3.63 0 5.177 2.143 5.177 5.67 0 .448-.045.896-.045 1.343h-8.91c.179 2.143 1.297 2.849 3.1 2.849 1.297 0 2.27-.322 2.848-1.384h2.931zm-8.688-4.048h5.908c-.179-1.942-1.297-2.848-2.848-2.848-1.297 0-2.27.905-3.06 2.848z" />
                      </svg>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800"
                  >
                    <a href="#" aria-label="Dribbble">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.375c.77 1.423 1.216 3.06 1.216 4.625 0 .414-.025.823-.074 1.227-.49-.094-5.421-.934-10.148.146-.065-.15-.13-.3-.2-.456-.239-.42-.5-.84-.78-1.25 5.106-2.082 7.65-5.015 7.986-5.292zM12 2.147c2.763 0 5.285 1.12 7.103 2.93-.29.315-2.644 2.963-7.298 4.702C10.245 6.498 8.63 3.678 8.63 3.678c1.098-.558 2.34-.878 3.37-.878zm-3.839 1.26s1.614 2.82 3.174 6.101c-4.001 1.065-7.527 1.05-7.527 1.05-.5-2.28.2-4.37 1.353-6.151zM2.147 12.005c0-.115.003-.23.01-.345 0 0 3.755.02 8.035-1.115.27.526.525 1.058.76 1.59-.096.027-.192.055-.29.085-4.075 1.32-6.23 4.895-6.23 4.895s-.285-2.81-.285-5.11zm1.26 3.839s1.614-2.82 5.174-4.101c.8 2.073 1.129 3.808 1.129 3.808-1.98 1.365-4.303 2.293-6.303.293zm8.839 1.26c-.115-.69-.345-1.725-.69-2.73 4.24-1.365 5.155-3.808 5.155-3.808.69 1.98.293 4.303-1.707 6.303-.8-.8-1.758-1.365-2.758-.765z" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h3>

              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
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

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                />

                <Button
                  variant="primary"
                  size="lg"
                  disabled={status === "sending"}
                  withRipple
                  className="w-full"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {status === "sent" && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <p className="text-green-700 dark:text-green-300 text-center">
                      Thanks! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-700 dark:text-red-300 text-center">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
