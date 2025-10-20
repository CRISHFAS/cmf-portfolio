import { Briefcase, Code, Download } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6 relative bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 transition-all duration-300 hover:scale-105 hover:bg-primary/20">
            Acerca de mi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-500 hover:text-primary/80">
            Experiencia en <span className="text-primary hover:text-primary/70 transition-colors duration-300">Construcción Digital</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
          <div className="lg:w-1/2 group">
            <div className="h-full bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110 mx-auto sm:mx-0">
                  <img
                    src="/profile-logo.png"
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-primary">Perfil Personal</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">Desarrollador de Software</p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                  Desarrollo aplicaciones web modernas que destacan por su rapidez, accesibilidad y usabilidad. Me gusta unir la técnica con la creatividad para construir experiencias digitales que no solo funcionan, sino que también generan impacto.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-background p-3 sm:p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
                    <h4 className="text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:text-primary/80">Frontend</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">React, Next.js, Tailwind</p>
                  </div>
                  <div className="bg-background p-3 sm:p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
                    <h4 className="text-sm sm:text-base font-semibold text-primary transition-colors duration-300 hover:text-primary/80">Backend</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Node.js, Express, Java</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <a
                    href="#contact"
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-center hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
                  >
                    ¡Conectemos!
                  </a>

                  <a
                    href="/cristian farias cv.pdf"
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-muted hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md hover:scale-[1.02] active:scale-95 text-sm sm:text-base"
                    download
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 hover:translate-y-0.5" />
                    Descargar CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-4 md:space-y-6">
            <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Code className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">Mi enfoque de desarrollo</h3>
                  <p className="text-sm md:text-base text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                    Escribir código limpio, mantenible y bien documentado. Mi proceso y enfoque se apoya en pruebas constantes, optimización de rendimiento y una mejora progresiva que garantiza la evolución continua del producto.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">Enfoque profesional</h3>
                  <p className="text-sm md:text-base text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                    Adapto mi flujo de trabajo a las necesidades de cada proyecto. Priorizo la comunicación clara, el uso de metodologías ágiles y el aprendizaje continuo como pilares para alcanzar resultados sólidos y sostenibles.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2 transition-all duration-300 hover:scale-110">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Proyectos Terminados</div>
              </div>
              <div className="bg-muted/20 border border-muted rounded-xl md:rounded-2xl p-4 md:p-6 text-center transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2 transition-all duration-300 hover:scale-110">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};