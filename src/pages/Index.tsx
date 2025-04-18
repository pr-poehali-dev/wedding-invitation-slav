import WeddingHeader from "@/components/WeddingHeader";
import DateSection from "@/components/DateSection";
import WeddingDescription from "@/components/WeddingDescription";
import DressCodeSection from "@/components/DressCodeSection";
import RsvpSection from "@/components/RsvpSection";
import Footer from "@/components/Footer";
import SlavicOrnament from "@/components/SlavicOrnament";

const Index = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <SlavicOrnament position="top" className="mb-6" />
      
      <div className="max-w-4xl mx-auto">
        <WeddingHeader />
        <DateSection />
        <WeddingDescription />
        <DressCodeSection />
        <RsvpSection />
        <Footer />
      </div>
      
      <SlavicOrnament position="bottom" className="mt-6" />
    </div>
  );
};

export default Index;