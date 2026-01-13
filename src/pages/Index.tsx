import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import MoneySection from "@/components/MoneySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <HeroSection />
      <MoneySection />
    </div>
  );
};

export default Index;
