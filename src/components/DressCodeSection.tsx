import { Shirt } from "lucide-react";

const DressCodeSection = () => {
  return (
    <section className="my-12 text-center max-w-2xl mx-auto px-4">
      <div className="bg-slavic/10 backdrop-blur-sm border border-slavic/30 rounded-lg p-6">
        <div className="flex justify-center mb-4">
          <Shirt className="h-10 w-10 text-slavic" />
        </div>
        <h2 className="text-3xl mb-4 text-slavic-secondary">Дресс-код</h2>
        <p className="text-lg text-slavic-dark mb-6">
          Приветствуются наряды в славянском стиле или в природных тонах:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white/30 rounded-lg">
            <h3 className="text-xl text-slavic-secondary mb-2">Для женщин</h3>
            <p className="text-slavic-dark">
              Сарафаны, платья с вышивкой, венки из цветов, 
              легкие натуральные ткани в светлых или природных тонах.
            </p>
          </div>
          
          <div className="p-4 bg-white/30 rounded-lg">
            <h3 className="text-xl text-slavic-secondary mb-2">Для мужчин</h3>
            <p className="text-slavic-dark">
              Светлые рубахи (косоворотки), брюки из натуральных тканей, 
              пояса с орнаментом, удобная обувь для природы.
            </p>
          </div>
          
          <div className="p-4 bg-white/30 rounded-lg">
            <h3 className="text-xl text-slavic-secondary mb-2">Обувь</h3>
            <p className="text-slavic-dark">
              Рекомендуем удобную обувь, подходящую для отдыха на природе 
              у реки (сандалии, мокасины, невысокие каблуки).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;