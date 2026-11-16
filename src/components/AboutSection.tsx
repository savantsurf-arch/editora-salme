import React from 'react';
import { ArrowRight, BookOpen, Feather, Heart, Sparkles, Target, Compass } from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';

interface AboutSectionProps {
  onLearnMore: () => void;
  onExploreCatalog: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onExploreCatalog }) => {
  const { institutional } = useEditorial();

  return (
    <section className="py-24 bg-[#F4EFE6]/60 border-y border-[#1C1614]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-[#BB8752]/15 rounded-3xl -rotate-2 pointer-events-none" />

              {/* Editorial Composition Card */}
              <div className="relative bg-[#1C1614] text-[#FAF7F2] p-8 sm:p-10 rounded-2xl shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#BB8752] bg-[#2A221F] flex items-center justify-center text-[#DFC096]">
                    <Feather className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display tracking-[0.2em] text-sm font-semibold text-[#FAF7F2]">
                      EDITORA SALME
                    </span>
                    <span className="block text-[10px] text-[#BB8752] uppercase tracking-widest">
                      Manifesto Editorial
                    </span>
                  </div>
                </div>

                <blockquote className="font-editorial text-xl sm:text-2xl text-[#DFC096] italic leading-relaxed">
                  "{institutional.manifesto}"
                </blockquote>

                <div className="pt-4 border-t border-[#FAF7F2]/10 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/80">
                    <Target className="w-4 h-4 text-[#BB8752] shrink-0" />
                    <span>Foco em romances com densidade emocional e sensibilidade</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/80">
                    <Heart className="w-4 h-4 text-[#BB8752] shrink-0" />
                    <span>Acolhimento de personagens reais, imperfeitos e plurais</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/80">
                    <Compass className="w-4 h-4 text-[#BB8752] shrink-0" />
                    <span>Valorização integral de autores independentes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#BB8752]" />
              <span>A Nossa Essência</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1614] leading-tight">
              Onde cada página acolhe os sentimentos mais verdadeiros
            </h2>

            <p className="text-base sm:text-lg text-[#5A514B] leading-relaxed font-light">
              {institutional.history}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#1C1614]/8 shadow-2xs">
                <h4 className="font-display text-xs uppercase tracking-wider text-[#BB8752] font-semibold mb-1">
                  Nossa Missão
                </h4>
                <p className="text-xs text-[#5A514B] leading-relaxed font-light">
                  {institutional.mission}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#1C1614]/8 shadow-2xs">
                <h4 className="font-display text-xs uppercase tracking-wider text-[#BB8752] font-semibold mb-1">
                  Nossa Visão
                </h4>
                <p className="text-xs text-[#5A514B] leading-relaxed font-light">
                  {institutional.vision}
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1614] text-[#FAF7F2] hover:bg-[#BB8752] transition-colors text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <span>Conheça nossa trajetória</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF7F2] hover:bg-[#EBE2D4] text-[#1C1614] border border-[#1C1614]/15 transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                <BookOpen className="w-4 h-4 text-[#BB8752]" />
                <span>Explorar Publicações</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
