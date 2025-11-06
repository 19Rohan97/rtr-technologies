"use client";

import { motion } from "framer-motion";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials as fallbackTestimonials } from "@/content/testimonials";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

type TestimonialItem = { _id?: string; quote: string; author: string };

export default function Testimonials({ testimonials }: { testimonials?: TestimonialItem[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calculate total slides (2 testimonials per slide)
  const data = (testimonials?.length ? testimonials : (fallbackTestimonials as TestimonialItem[])) as TestimonialItem[];
  const testimonialsPerSlide = 2;
  const totalSlides = Math.ceil(data.length / testimonialsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false); // Stop autoplay when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false); // Stop autoplay when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop autoplay when user interacts
  };

  if (!data.length) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-6"
          >
            <MessageSquare className="w-4 h-4" />
            What Clients Say
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Client Success
            </span>
            <br />
            Stories That Inspire
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience working with RTR Technologies and
            the results we&apos;ve delivered for their businesses.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid md:grid-cols-2 gap-6 px-2"
                >
                  {data
                    .slice(
                      slideIndex * testimonialsPerSlide,
                      (slideIndex + 1) * testimonialsPerSlide
                    )
                    .map((t, i) => (
                      <motion.figure
                        key={`${slideIndex}-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-left"
                      >
                        <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-4">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
                          — {t.author}
                        </figcaption>
                      </motion.figure>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700"
                aria-label="Show previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-yellow-500 w-6"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700"
                aria-label="Show next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Autoplay Indicator */}
          {isAutoPlaying && totalSlides > 1 && (
            <div className="text-center mt-4">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Auto-playing • Click arrows to control manually
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
