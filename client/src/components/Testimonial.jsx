"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      id: 1,
      name: "Ale Medina",
      role: "Director de producto en TechCorp",
      content: `Trabajar con Cris fue una experiencia fluida desde el primer día. No solo entregó una solución integral antes de lo previsto, sino que su comunicación y atención en cada paso lo hizo aún más profesional Es raro encontrar un desarrollador que comprenda tan bien tanto la tecnología como el negocio.`,
      rating: 5,
      image: "/testimonials/alex-johnson.png"
    },
    {
      id: 2,
      name: "Maria Chen",
      role: "Diseñador senior de experiencia de usuario en DesignHub",
      content: `He revisado cientos de portafolios y su trabajo es realmente excepcional. La forma en que las animaciones captan la atención sin perder el rendimiento es magistral. Los elementos degradados aportan profundidad sin resultar abrumadores.`,
      rating: 5,
      image: "/testimonials/maria-chen.png"
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Director de tecnología en Startup Ventures",
      content: `Desde los wireframes hasta la implementación, Cris dominó todo el proceso con confianza y creatividad. El producto final es rápido, confiable y luce increíble. No dudaría en volver a trabajar con él.`,
      rating: 5,
      image: "/testimonials/David Wilson.png"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  while (visibleTestimonials.length < itemsPerPage) {
    visibleTestimonials.push(testimonials[visibleTestimonials.length]);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 10 + 2 + 'px',
              height: Math.random() * 10 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-20"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="space-y-12 sm:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="text-sm sm:text-lg font-mono text-primary mb-3 sm:mb-4 inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
              Client Feedback
              <Star className="h-3 w-3 sm:h-4 sm:w-4" />
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              variants={itemVariants}
            >
              Lo que dice la gente sobre trabajar conmigo.
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col h-full">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/30 mb-3 sm:mb-4 group-hover:text-primary/50 transition-colors" />

                    <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 flex-1">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="mt-auto">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 sm:h-5 sm:w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
                          />
                        ))}
                      </div>

                      <div className="flex flex-col items-center text-center gap-1">
                        <p className="font-medium text-sm sm:text-base">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 p-2 sm:p-3 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all shadow-lg z-10 hidden sm:flex items-center justify-center hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 p-2 sm:p-3 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all shadow-lg z-10 hidden sm:flex items-center justify-center hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-3 sm:gap-4 sm:hidden">
              <button
                onClick={prevTestimonial}
                className="p-1 sm:p-2 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary' : 'bg-muted-foreground/20'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-1 sm:p-2 rounded-full border border-muted-foreground/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4 sm:h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-[80px] sm:blur-[100px] opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-blue-500 to-primary blur-[80px] sm:blur-[100px] opacity-30"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 5
          }}
        />
      </motion.div>
    </section>
  );
};