import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import MoneySection from "@/components/MoneySection";
import ExitPopup from "@/components/ExitPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <HeroSection />
      <MoneySection />
      <ExitPopup delaySeconds={20} />
    </div>
  );
};

export default Index;
