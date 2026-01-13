import { Flame } from "lucide-react";

const UrgencyBanner = () => {
  return (
    <div className="bg-urgency py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Flame className="w-5 h-5 text-foreground animate-pulse" />
        <span className="text-foreground font-bold text-sm md:text-base tracking-wide uppercase">
          Últimas vagas disponíveis — Entre agora antes que feche!
        </span>
        <Flame className="w-5 h-5 text-foreground animate-pulse" />
      </div>
    </div>
  );
};

export default UrgencyBanner;
