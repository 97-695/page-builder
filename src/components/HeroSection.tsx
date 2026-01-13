import { Send, AlertTriangle, Check, Lock, Shield } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import ukFlag from "@/assets/uk-flag.png";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <img src={ukFlag} alt="UK Flag" className="w-16 h-auto mx-auto" />
        </div>
        
        <CountdownTimer />
        
        <div className="mt-12 md:mt-16 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 uppercase italic">
            <span className="text-foreground">Descubra como </span>
            <span className="text-highlight-red">Brasileiros</span>
            <br />
            <span className="text-foreground">estão ganhando </span>
            <span className="text-highlight-yellow">até</span>
            <br />
            <span className="text-highlight-yellow">R$1.000,00 </span>
            <span className="text-foreground">por dia </span>
            <span className="text-highlight-red">com</span>
            <br />
            <span className="text-highlight-red">método britânico!</span>
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Método <span className="text-foreground font-bold">100% Online</span> e{" "}
            <span className="text-foreground font-bold">Comprovado</span> que está transformando a vida de
            milhares de pessoas. Sem precisar aparecer, sem precisar vender!
          </p>
          
          <a 
            href="https://t.me/newwmoney" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button px-8 py-4 md:px-12 md:py-5 rounded-lg font-bold text-lg md:text-xl uppercase tracking-wide flex items-center gap-3 mx-auto mb-6"
          >
            <Send className="w-5 h-5 md:w-6 md:h-6" />
            Quero entrar no grupo VIP
          </a>
          
          <div className="flex items-center justify-center gap-2 text-highlight-yellow mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">
              <span className="font-bold">VAGAS LIMITADAS</span> — Grupo pode fechar a qualquer momento!
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-highlight-red" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-highlight-red" />
              <span>Sem Vender Nada</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-highlight-red" />
              <span>Resultados Reais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
