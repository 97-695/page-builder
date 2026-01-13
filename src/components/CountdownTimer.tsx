import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 43,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-foreground">
        <AlertTriangle className="w-5 h-5 text-highlight-yellow" />
        <span className="text-sm md:text-base tracking-wider uppercase">
          Oferta expira em
        </span>
        <AlertTriangle className="w-5 h-5 text-highlight-yellow" />
      </div>
      
      <div className="flex items-center gap-3 md:gap-4">
        <div className="flex flex-col items-center">
          <div className="countdown-box rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-black text-foreground">
              {formatNumber(timeLeft.hours)}
            </span>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
            Horas
          </span>
        </div>
        
        <span className="text-3xl md:text-5xl font-black text-foreground">:</span>
        
        <div className="flex flex-col items-center">
          <div className="countdown-box rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-black text-foreground">
              {formatNumber(timeLeft.minutes)}
            </span>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
            Minutos
          </span>
        </div>
        
        <span className="text-3xl md:text-5xl font-black text-foreground">:</span>
        
        <div className="flex flex-col items-center">
          <div className="countdown-box rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
            <span className="text-3xl md:text-5xl font-black text-foreground">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
            Segundos
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
