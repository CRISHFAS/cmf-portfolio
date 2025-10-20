import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
  Briefcase,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/cristian-martin-farias",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/CRISHFAS",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-gray-300",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Acerca de", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: "cristian.farias.martin@gmail.com",
      href: "mailto:cristian.farias.martin@gmail.com",
      label: "Email",
    },
    {
      icon: <Phone size={18} />,
      text: "+54 376 4167736",
      href: "tel:+543764167736",
      label: "Teléfono",
    },
    {
      icon: <MapPin size={18} />,
      text: "Misiones, Argentina",
      href: null,
      label: "Ubicación",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative px-4 sm:px-6 py-16 mt-20 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-900/50 dark:to-gray-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 rounded-2xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/30 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Cristian Farías
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Desarrollador Full Stack especializado en backend. Transformo ideas complejas en soluciones digitales escalables e impactantes.
              </p>

              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color}`}
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      boxShadow:
                        "0 10px 20px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-gray-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 mr-2 transition-colors" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Contacto
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                      {info.icon}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm break-all"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {info.text}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col justify-between">
              <div>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                  Disponibilidad
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Disponible para proyectos
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Abierto a nuevas oportunidades en desarrollo de Software  Full Stack y arquitectura de sistemas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center sm:text-left">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                © {currentYear}{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Cristian Farías Martin
                </span>
                . Todos los Derechos Reservados.
              </p>
            </div>

            <motion.a
              href="#hero"
              aria-label="Volver al inicio"
              className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};