import { Tent, Droplets, Sun } from "lucide-react";

const WeddingDescription = () => {
  return (
    <section className="my-12 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl text-center text-slavic-secondary mb-6">О нашей свадьбе</h2>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-slavic/20 p-3 rounded-full mr-4">
            <Sun className="h-6 w-6 text-slavic-secondary" />
          </div>
          <div>
            <h3 className="text-xl text-slavic-secondary mb-2">Славянские традиции</h3>
            <p className="text-slavic-dark">
              Наша свадьба будет проходить в традиционном славянском стиле. 
              Мы соединим наши судьбы в окружении природы, следуя древним обычаям наших предков.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-slavic/20 p-3 rounded-full mr-4">
            <Droplets className="h-6 w-6 text-slavic-secondary" />
          </div>
          <div>
            <h3 className="text-xl text-slavic-secondary mb-2">Единение с природой</h3>
            <p className="text-slavic-dark">
              Праздник пройдет на берегу живописной реки, где чистый воздух,
              журчание воды и пение птиц создадут особую атмосферу для нашего особенного дня.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-slavic/20 p-3 rounded-full mr-4">
            <Tent className="h-6 w-6 text-slavic-secondary" />
          </div>
          <div>
            <h3 className="text-xl text-slavic-secondary mb-2">Уютное празднование</h3>
            <p className="text-slavic-dark">
              Гостей ждут уютные палатки, славянские угощения, 
              традиционные обряды и веселые гуляния до самого заката.
              Будем танцевать, петь и праздновать нашу любовь вместе с вами!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDescription;