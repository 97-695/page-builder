import { Send, Lock, Shield, Flame } from "lucide-react";
import britishMoneyImage from "@/assets/british-money.png";

const MoneySection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-xl overflow-hidden mb-8">
          <img 
            src={britishMoneyImage} 
            alt="Lucre com Libras Esterlinas" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="text-foreground font-bold flex items-center gap-2">
              💷 Lucre com Libras Esterlinas 💷
            </span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-highlight-yellow" />
            <h3 className="text-xl md:text-2xl font-black text-foreground">
              +17 mil pessoas já estão lucrando com esse método!
            </h3>
          </div>
          
          <p className="text-highlight-red text-lg md:text-xl font-bold uppercase tracking-wide mb-8">
            Não fique de fora dessa oportunidade única!
          </p>
          
          <a 
            href="https://t.me/newwmoney" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button px-8 py-4 md:px-12 md:py-5 rounded-lg font-bold text-lg md:text-xl uppercase tracking-wide flex items-center gap-3 mx-auto mb-8"
          >
            <Send className="w-5 h-5 md:w-6 md:h-6" />
            Garantir minha vaga agora
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-highlight-yellow" />
              <span>Acesso Gratuito</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Seguro</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-secondary px-2 py-0.5 rounded">GB</span>
              <span>Método Exclusivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneySection;
