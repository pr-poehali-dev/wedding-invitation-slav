import { Calendar } from "lucide-react";

const DateSection = () => {
  return (
    <section className="my-12 text-center">
      <div className="bg-slavic/10 backdrop-blur-sm border border-slavic/30 rounded-lg p-6 max-w-md mx-auto">
        <div className="flex justify-center mb-4">
          <Calendar className="h-10 w-10 text-slavic" />
        </div>
        <h2 className="text-3xl mb-4 text-slavic-secondary">Когда</h2>
        <p className="text-2xl font-medium text-slavic-dark mb-2">26 июля 2025 года</p>
        <p className="text-xl text-slavic-dark">в 12:00</p>
        
        <div className="flex items-center justify-center my-6">
          <div className="h-[1px] bg-slavic/30 flex-grow"></div>
          <span className="mx-4 text-slavic-secondary">✻</span>
          <div className="h-[1px] bg-slavic/30 flex-grow"></div>
        </div>
        
        <h2 className="text-3xl mb-4 text-slavic-secondary">Где</h2>
        <p className="text-xl text-slavic-dark">На берегу реки, в уютных палатках</p>
        <p className="text-lg text-slavic-dark mt-2 italic">(подробная схема проезда будет отправлена позже)</p>
      </div>
    </section>
  );
};

export default DateSection;