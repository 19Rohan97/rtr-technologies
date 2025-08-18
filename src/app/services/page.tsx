import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold">Services</h1>
          <p className="mt-2 text-gray-600">
            Smart solutions designed to help your business thrive online.
          </p>
          <ul className="mt-6 space-y-3 list-disc pl-6">
            <li>Custom WordPress Development</li>
            <li>SEO-Driven Web Design</li>
            <li>Google Analytics Setup & Tracking (GA4)</li>
            <li>Ongoing Support & Growth Plans</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
