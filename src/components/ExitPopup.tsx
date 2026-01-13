import { useState, useEffect } from "react";
import { X, Send, AlertTriangle } from "lucide-react";

interface ExitPopupProps {
  delaySeconds?: number;
}

const ExitPopup = ({ delaySeconds = 20 }: ExitPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTA = () => {
    window.open("https://t.me/newwmoney", "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 max-w-md w-full animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header icons */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="w-8 h-8 text-highlight-yellow" />
          <span className="text-4xl">🤯</span>
          <AlertTriangle className="w-8 h-8 text-highlight-yellow" />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
          <span className="text-foreground">ESPERE! NÃO VÁ </span>
          <span className="text-highlight-red">EMBORA!</span>
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground text-center mb-6">
          Você está prestes a perder a oportunidade de mudar sua vida financeira para sempre!
        </p>

        {/* Info card 1 */}
        <div className="bg-secondary/50 border border-highlight-red/30 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xl">🔥</span>
            <span className="text-foreground font-bold">
              +17 MIL PESSOAS já estão lucrando!
            </span>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            Não fique de fora dessa revolução financeira!
          </p>
        </div>

        {/* Info card 2 */}
        <div className="bg-secondary/50 border border-highlight-yellow/30 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xl">💰</span>
            <span className="text-foreground font-bold">ÚLTIMA CHANCE!</span>
            <span className="text-xl">💰</span>
          </div>
          <p className="text-highlight-yellow text-sm text-center">
            O grupo pode fechar a qualquer momento!
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleCTA}
          className="cta-button w-full px-6 py-4 rounded-lg font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3 mb-4"
        >
          <Send className="w-5 h-5" />
          SIM! Quero entrar agora!
        </button>

        {/* Dismiss link */}
        <button 
          onClick={handleClose}
          className="w-full text-center text-muted-foreground text-sm underline hover:text-foreground transition-colors"
        >
          Não, prefiro continuar sem ganhar dinheiro
        </button>
      </div>
    </div>
  );
};

export default ExitPopup;
