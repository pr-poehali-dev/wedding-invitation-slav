import { Leaf, Heart } from "lucide-react";

const WeddingHeader = () => {
  return (
    <header className="text-center py-8">
      <div className="flex justify-center items-center mb-2">
        <Leaf className="text-slavic h-6 w-6 mr-2 animate-floating" />
        <Heart className="text-slavic-accent h-6 w-6 animate-pulse" />
        <Leaf className="text-slavic h-6 w-6 ml-2 animate-floating" style={{ animationDelay: "0.5s" }} />
      </div>
      <h1 className="text-4xl md:text-6xl text-slavic-secondary font-bold mb-4">
        Сергей и Юлия
      </h1>
      <div className="relative flex items-center justify-center mb-4">
        <div className="h-[2px] bg-slavic-secondary w-16 md:w-24"></div>
        <Heart className="text-slavic-accent h-6 w-6 mx-2" />
        <div className="h-[2px] bg-slavic-secondary w-16 md:w-24"></div>
      </div>
      <p className="text-xl md:text-2xl text-slavic-dark">
        С радостью приглашаем вас на нашу свадьбу
      </p>
    </header>
  );
};

export default WeddingHeader;