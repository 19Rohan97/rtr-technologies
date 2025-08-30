import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/ui/page-banner";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import { breadcrumbsSchema } from "@/seo/breadcrumbs";
import { contactPageSchema } from "@/seo/contact";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/content/site";

export const revalidate = 60;

export default function ContactPage() {
  const email = SITE.email;
  const phone: string | undefined = undefined;

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
        description="Ready to start your project? Tell us a bit about it. We&apos;re here to help you transform your digital presence and achieve your business goals."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Contact Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let&apos;s Start a Conversation</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  We&apos;re here to help you transform your digital presence and achieve your business goals. Whether you need a
                  new website, SEO optimization, or ongoing support, we&apos;d love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                {email && (
                  <div className="flex items-start gap-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Send us an email and we&apos;ll get back to you within 24 hours.</p>
                      <a
                        href={`mailto:${email}`}
                        className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Phone */}
                {phone && (
                  <div className="flex items-start gap-4 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Prefer to talk? Give us a call during business hours.</p>
                      <a
                        href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                        className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button asChild variant="ghost" size="icon" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800">
                      <a href="#" aria-label="LinkedIn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.85-1.56 3.04 0 3.6 2.0 3.6 4.6v5.59z" />
                        </svg>
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800">
                      <a href="#" aria-label="Twitter">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.385 4.482 13.957 13.957 0 01-10.141-5.144 4.822 4.822 0 00-.665 2.475 4.92 4.92 0 002.188 4.1 4.903 4.903 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-1.293.172 4.6 4.6 0 01-.927-.088 4.935 4.935 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.17-.067a13.945 13.945 0 007.548 2.212c9.051 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.014-.636A10.01 10.01 0 0024 4.557z" />
                        </svg>
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:border-yellow-200 dark:hover:border-yellow-800">
                      <a href="#" aria-label="Instagram">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.85 14.81 3.85 12.455 5.126 11.18c1.275-1.275 3.63-1.275 4.905 0s1.275 3.63 0 4.905c-.875.807-2.026 1.297-3.323 1.297z" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

