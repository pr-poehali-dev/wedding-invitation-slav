interface SlavicOrnamentProps {
  position: "top" | "bottom";
  className?: string;
}

const SlavicOrnament = ({ position, className = "" }: SlavicOrnamentProps) => {
  return (
    <div className={`flex justify-center overflow-hidden ${className}`}>
      <div className="text-slavic-accent text-3xl md:text-4xl px-4 flex items-center">
        {position === "top" ? (
          <>
            <span>❧</span>
            <span className="mx-3 text-slavic">✧</span>
            <span>❧</span>
            <span className="mx-3 text-slavic">✧</span>
            <span>❧</span>
          </>
        ) : (
          <>
            <span>❧</span>
            <span className="mx-3 text-slavic">✧</span>
            <span>❧</span>
            <span className="mx-3 text-slavic">✧</span>
            <span>❧</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SlavicOrnament;