import React, { useState } from 'react';
import { Newspaper, Calendar, ExternalLink, Sparkles, Music, BookOpen } from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';
import { SoundtrackSection } from '../components/SoundtrackSection';
import { NewsItem } from '../types';

interface NewsPageProps {
  onOpenBookById: (bookId: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onOpenBookById }) => {
  const { news } = useEditorial();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Lançamento', 'Notícia', 'Comunidade'];

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(n => n.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
            <Newspaper className="w-3.5 h-3.5 text-[#BB8752]" />
            <span>Mural Literário</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1C1614]">
            Novidades, Eventos & Lançamentos
          </h1>

          <p className="text-base text-[#5A514B] font-light leading-relaxed">
            Fique por dentro de todos os anúncios, novas publicações, marcos e comunicações da Editora Salme.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1C1614] text-[#FAF7F2]'
                    : 'bg-[#F4EFE6] text-[#5A514B] hover:text-[#1C1614]'
                }`}
              >
                {cat === 'all' ? 'Todas as Categorias' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all duration-300 editorial-shadow hover:shadow-xl flex flex-col overflow-hidden group"
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
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#8A817A]">
                    <Calendar className="w-3.5 h-3.5 text-[#BB8752]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-semibold text-[#1C1614] group-hover:text-[#BB8752] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A514B] leading-relaxed font-light">
                    {item.content}
                  </p>
                </div>

                {item.externalLink && (
                  <div className="pt-4 border-t border-[#1C1614]/8">
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#BB8752] hover:text-[#8C6033] inline-flex items-center gap-1.5"
                    >
                      <span>Acessar conteúdo externo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Integrated Soundtrack Section */}
        <SoundtrackSection />
      </div>
    </div>
  );
};
