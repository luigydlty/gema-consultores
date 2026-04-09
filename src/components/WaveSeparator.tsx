interface WaveSeparatorProps {
  fillColor: string;
  className?: string;
  variant?: "soft" | "minimal";
}

const WaveSeparator = ({ fillColor, className = "", variant = "soft" }: WaveSeparatorProps) => (
  <div className={`absolute bottom-0 left-0 right-0 leading-[0] translate-y-[1px] ${className}`}>
    <svg
      viewBox="0 0 1440 64"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-10 md:h-16"
      preserveAspectRatio="none"
    >
      {variant === "soft" ? (
        <>
          <path
            d="M0,48 C180,28 360,56 540,40 C720,24 900,52 1080,36 C1200,28 1320,44 1440,40 L1440,64 L0,64 Z"
            fill={fillColor}
            opacity="0.4"
          />
          <path
            d="M0,52 C240,36 480,60 720,44 C960,28 1200,52 1440,44 L1440,64 L0,64 Z"
            fill={fillColor}
          />
        </>
      ) : (
        <>
          <path
            d="M0,56 C360,42 720,58 1080,48 C1260,43 1380,52 1440,54 L1440,64 L0,64 Z"
            fill={fillColor}
            opacity="0.5"
          />
          <path
            d="M0,58 C360,48 720,60 1080,52 C1260,48 1380,56 1440,56 L1440,64 L0,64 Z"
            fill={fillColor}
          />
        </>
      )}
    </svg>
  </div>
);

export default WaveSeparator;
