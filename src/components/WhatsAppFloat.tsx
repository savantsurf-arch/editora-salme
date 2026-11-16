import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';

export const WhatsAppFloat: React.FC = () => {
  const { institutional } = useEditorial();
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappMessage = encodeURIComponent(
    'Olá, Editora Salme! Gostaria de conversar sobre suas publicações.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#1C1614] px-4 py-2 rounded-full border border-[#1C1614]/10 shadow-lg text-xs font-medium animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Fale conosco no WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8A817A] hover:text-[#1C1614] transition-colors"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${institutional.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
