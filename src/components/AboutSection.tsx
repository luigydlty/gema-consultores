import teamImg from "@/assets/team.jpg";
import WaveSeparator from "./WaveSeparator";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="quienes-somos" className="relative bg-background py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
              Consultores en comunicación estratégica en Barranquilla
            </h2>
            <div className="space-y-4 text-foreground-secondary font-body leading-relaxed">
              <p>
                En Gema Consultores SAS somos una firma especializada en comunicación estratégica, marketing digital y posicionamiento de marca en Barranquilla.
              </p>
              <p>
                Acompañamos a organizaciones del sector público y privado en el diseño e implementación de estrategias que fortalecen su reputación, mejoran su relacionamiento y aumentan su visibilidad.
              </p>
              <p>
                Nuestro enfoque integra estrategia, ejecución y medición, asegurando que cada acción de comunicación tenga impacto real en los resultados del negocio.
              </p>
            </div>
          </div>
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <img
              src={teamImg}
              alt="Equipo de Gema Consultores"
              className="rounded-xl shadow-lg w-full object-cover aspect-[3/2]"
              loading="lazy"
              width={1280}
              height={854}
            />
          </div>
        </div>
      </div>
      <WaveSeparator fillColor="hsl(210, 20%, 97%)" variant="minimal" />
    </section>
  );
};

export default AboutSection;
