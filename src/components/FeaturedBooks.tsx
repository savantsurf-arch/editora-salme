import React, { useState } from 'react';
import { ArrowRight, BookOpen, Filter, Sparkles } from 'lucide-react';
import { BookCard } from './BookCard';
import { Book } from '../types';
import { useEditorial } from '../context/EditorialContext';

interface FeaturedBooksProps {
  onOpenBook: (book: Book) => void;
  onViewAll: () => void;
}

export const FeaturedBooks: React.FC<FeaturedBooksProps> = ({ onOpenBook, onViewAll }) => {
  const { books } = useEditorial();
  const [activeFilter, setActiveFilter] = useState<'all' | 'espelhos' | 'internacional' | 'independente'>('all');

  const filteredBooks = books.filter((b) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'espelhos') return b.series === 'Espelhos Quebrados';
    if (activeFilter === 'internacional') return b.category === 'internacional';
    if (activeFilter === 'independente') return b.category === 'independente';
    return true;
  });

  return (
    <section className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#BB8752]" />
              <span>Obras Selecionadas</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1614]">
              Publicações em Destaque
            </h2>
            <p className="text-sm sm:text-base text-[#5A514B] font-light max-w-xl">
              Navegue pelos livros que estão emocionando leitoras no Brasil e no exterior, com edições digitais e releituras marcantes.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4EFE6] rounded-xl border border-[#1C1614]/8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-[#1C1614] shadow-xs'
                  : 'text-[#5A514B] hover:text-[#1C1614]'
              }`}
            >
              Todos ({books.length})
            </button>
            <button
              onClick={() => setActiveFilter('espelhos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'espelhos'
                  ? 'bg-white text-[#1C1614] shadow-xs'
                  : 'text-[#5A514B] hover:text-[#1C1614]'
              }`}
            >
              Espelhos Quebrados
            </button>
            <button
              onClick={() => setActiveFilter('internacional')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'internacional'
                  ? 'bg-white text-[#1C1614] shadow-xs'
                  : 'text-[#5A514B] hover:text-[#1C1614]'
              }`}
            >
              Edições em Inglês
            </button>
            <button
              onClick={() => setActiveFilter('independente')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'independente'
                  ? 'bg-white text-[#1C1614] shadow-xs'
                  : 'text-[#5A514B] hover:text-[#1C1614]'
              }`}
            >
              Independentes
            </button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onOpenDetails={onOpenBook} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1C1614] text-[#FAF7F2] hover:bg-[#BB8752] transition-colors text-xs font-semibold uppercase tracking-widest shadow-md hover:shadow-lg"
          >
            <BookOpen className="w-4 h-4 text-[#DFC096]" />
            <span>Ver Catálogo Completo com Filtros & Busca</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
