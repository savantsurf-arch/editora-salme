import React from 'react';
import { ArrowRight, Calendar, ExternalLink, Newspaper, Sparkles } from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';
import { NewsItem } from '../types';

interface NewsSectionProps {
  onViewAllNews?: () => void;
  onOpenNews?: (item: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onViewAllNews, onOpenNews }) => {
  const { news } = useEditorial();

  return (
    <section className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
              <Newspaper className="w-3.5 h-3.5 text-[#BB8752]" />
              <span>Acontecimentos Literários</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1614]">
              Novidades & Lançamentos
            </h2>
            <p className="text-sm sm:text-base text-[#5A514B] font-light max-w-xl">
              Fique por dentro das últimas edições, novidades editoriais e celebrações da comunidade leitora da Editora Salme.
            </p>
          </div>

          {onViewAllNews && (
            <button
              onClick={onViewAllNews}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BB8752] hover:text-[#8C6033] tracking-wider uppercase group"
            >
              <span>Ver todas as novidades</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {news.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all duration-300 editorial-shadow hover:shadow-lg flex flex-col overflow-hidden group"
            >
              {item.imageUrl && (
                <div className="relative aspect-video overflow-hidden bg-[#1C1614]/5">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1C1614] text-[#FAF7F2]">
                      {item.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#8A817A]">
                    <Calendar className="w-3.5 h-3.5 text-[#BB8752]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-editorial text-xl font-semibold text-[#1C1614] group-hover:text-[#BB8752] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A514B] line-clamp-3 leading-relaxed font-light">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1C1614]/8 flex items-center justify-between text-xs font-semibold">
                  {item.externalLink ? (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#BB8752] hover:text-[#8C6033] inline-flex items-center gap-1"
                    >
                      <span>Ler publicação</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[#8A817A]">Comunicado Oficial</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
