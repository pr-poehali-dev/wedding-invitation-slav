import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center items-center mb-2">
        <div className="h-[1px] bg-slavic/30 w-12"></div>
        <Heart className="text-slavic-accent h-5 w-5 mx-2" />
        <div className="h-[1px] bg-slavic/30 w-12"></div>
      </div>
      <p className="text-slavic-dark">
        С нетерпением ждём встречи с вами!
      </p>
      <p className="text-slavic-dark mt-2">
        Сергей и Юлия
      </p>
    </footer>
  );
};

export default Footer;