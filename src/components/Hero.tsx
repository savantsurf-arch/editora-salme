import React from 'react';
import { ArrowRight, BookOpen, MessageCircle, Sparkles, Star } from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';

interface HeroProps {
  onExploreCatalog: () => void;
  onContact: () => void;
  onOpenBook: (bookId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onContact, onOpenBook }) => {
  const { institutional, books } = useEditorial();
  const featuredBook = books.find(b => b.id === 'a-bela-e-os-espinhos') || books[0];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F4EFE6]/60 via-[#FAF7F2] to-[#FAF7F2]">
      {/* Decorative filigree and subtle ornaments */}
      <div className="absolute top-12 left-8 w-64 h-64 bg-[#BB8752]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#BB8752]/7 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle border top line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#BB8752]/30 text-[#8C6033] text-xs font-medium tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#BB8752]" />
              <span className="font-display uppercase tracking-widest text-[11px]">Selo Editorial Independente</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1614] leading-[1.12]">
              Histórias para quem ainda{' '}
              <span className="italic font-normal text-[#BB8752] block sm:inline">
                acredita no amor.
              </span>
            </h1>

            {/* Subheadline / Presentation */}
            <p className="text-base sm:text-lg text-[#5A514B] leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              {institutional.heroHeadline} Um espaço literário dedicado a romances sensíveis, releituras apaixonantes de clássicos e narrativas autorais que acolhem as cicatrizes da vida.
            </p>

            {/* Badges / Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-[#5A514B]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF7F2] border border-[#1C1614]/8 shadow-2xs">
                <Star className="w-3 h-3 text-[#BB8752] fill-[#BB8752]" />
                Romance Sáfico & Contemporâneo
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF7F2] border border-[#1C1614]/8 shadow-2xs">
                <BookOpen className="w-3 h-3 text-[#BB8752]" />
                Duologia Espelhos Quebrados
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF7F2] border border-[#1C1614]/8 shadow-2xs">
                Disponível no Kindle Unlimited
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1C1614] text-[#FAF7F2] hover:bg-[#BB8752] transition-all duration-300 text-xs font-semibold uppercase tracking-widest shadow-md hover:shadow-lg active:scale-98"
              >
                <span>Conheça nosso catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContact}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F4EFE6] text-[#1C1614] hover:bg-[#EBE2D4] border border-[#1C1614]/15 transition-all duration-300 text-xs font-semibold uppercase tracking-wider active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-[#BB8752]" />
                <span>Fale conosco</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Book Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative backdrop frame */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#BB8752]/20 via-[#FAF7F2] to-[#BB8752]/10 rounded-2xl border border-[#BB8752]/25 -rotate-2 scale-98 pointer-events-none" />

              {/* Main Card Showcase */}
              <div className="relative bg-white rounded-xl p-5 sm:p-6 border border-[#1C1614]/10 shadow-2xl rotate-1 transition-all duration-500 hover:rotate-0">
                {/* Book header badge */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1C1614]/8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#BB8752] font-semibold block">
                      Livro em Destaque
                    </span>
                    <h3 className="font-editorial text-lg text-[#1C1614] font-semibold">
                      {featuredBook.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F4EFE6] text-[10px] text-[#8C6033] font-medium border border-[#BB8752]/20">
                    {featuredBook.series}
                  </span>
                </div>

                {/* Book Cover Container */}
                <div
                  onClick={() => onOpenBook(featuredBook.id)}
                  className="group relative cursor-pointer overflow-hidden rounded-lg bg-[#1C1614] shadow-xl aspect-[2/3] flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={featuredBook.coverUrl}
                    alt={featuredBook.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-xs font-semibold text-[#DFC096] uppercase tracking-wider">
                      Ver Sinopse Completa
                    </span>
                    <p className="text-xs text-white/90 line-clamp-2 mt-1">
                      {featuredBook.synopsis}
                    </p>
                  </div>
                </div>

                {/* Book meta footer */}
                <div className="mt-4 pt-3 border-t border-[#1C1614]/8 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#8A817A] block">Autoria</span>
                    <span className="font-editorial text-sm font-semibold text-[#1C1614]">
                      {featuredBook.author}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBook(featuredBook.id)}
                    className="text-xs font-semibold text-[#BB8752] hover:text-[#8C6033] flex items-center gap-1 group/btn"
                  >
                    <span>Conheça a obra</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
