import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-gema-consultores.webp";

const WHATSAPP_URL = "https://wa.me/573158888012?text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20mi%20organizaci%C3%B3n.";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Experiencia", href: "#experiencia" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <nav className="container flex items-center justify-between h-16 md:h-[72px]">
        <a href="#inicio" className="flex items-center">
          <img src={logoWhite} alt="logo-gema-consultores" className="h-14 md:h-16 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="relative text-primary-foreground/70 hover:text-primary-foreground text-sm font-body font-medium transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-gema-orange after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-whatsapp-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:brightness-110 transition"
            >
              Contáctanos
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <ul className="container py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-primary-foreground/70 hover:text-primary-foreground hover:pl-2 font-body text-sm transition-all duration-200 border-l-2 border-transparent hover:border-gema-orange pl-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-whatsapp text-whatsapp-foreground px-5 py-3 rounded-lg text-sm font-medium"
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
