import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { BookCard } from '../components/BookCard';
import { Book } from '../types';
import { useEditorial } from '../context/EditorialContext';

interface CatalogPageProps {
  onOpenBook: (book: Book) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ onOpenBook }) => {
  const { books } = useEditorial();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'year-desc' | 'title-asc'>('featured');

  // Categories list
  const categories = [
    { id: 'all', label: 'Todos os Livros' },
    { id: 'duologia', label: 'Duologia Espelhos Quebrados' },
    { id: 'internacional', label: 'Edições em Inglês (Broken Mirrors)' },
    { id: 'independente', label: 'Livros Independentes' },
  ];

  // Filtering and sorting logic
  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        // Search filter
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          (book.series && book.series.toLowerCase().includes(query)) ||
          book.genre.toLowerCase().includes(query) ||
          book.tags.some((t) => t.toLowerCase().includes(query));

        // Category filter
        const matchesCategory =
          selectedCategory === 'all' || book.category === selectedCategory;

        // Language filter
        const matchesLanguage =
          selectedLanguage === 'all' || book.language === selectedLanguage;

        return matchesSearch && matchesCategory && matchesLanguage;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (a.isFeatured === b.isFeatured) return 0;
          return a.isFeatured ? -1 : 1;
        }
        if (sortBy === 'year-desc') {
          return b.publicationYear - a.publicationYear;
        }
        if (sortBy === 'title-asc') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [books, searchQuery, selectedCategory, selectedLanguage, sortBy]);

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      {/* Catalog Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
            <BookOpen className="w-3.5 h-3.5 text-[#BB8752]" />
            <span>Catálogo Editorial Oficial</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1C1614]">
            Nosso Acervo de Publicações
          </h1>

          <p className="text-base text-[#5A514B] font-light leading-relaxed">
            Descubra todas as histórias, duologias, edições internacionais e romances independentes publicados pela Editora Salme.
          </p>
        </div>

        {/* Filter & Search Bar Box */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#1C1614]/8 editorial-shadow mb-10 space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#8A817A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por título, autor, série (ex: Espelhos Quebrados, A Bela e os Espinhos, Nath Almeida)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#1C1614]/10 text-sm text-[#1C1614] placeholder-[#8A817A] focus:outline-none focus:border-[#BB8752] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-[#8A817A] hover:text-[#1C1614]"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categories & Sorting Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-[#1C1614]/5">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#1C1614] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] text-[#5A514B] hover:text-[#1C1614]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort selector & Language */}
            <div className="flex items-center gap-3 self-end md:self-auto text-xs">
              <div className="flex items-center gap-1.5 text-[#5A514B]">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#BB8752]" />
                <span className="font-medium">Ordenar:</span>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="bg-[#FAF7F2] border border-[#1C1614]/10 rounded-md px-2 py-1 text-xs text-[#1C1614] focus:outline-none focus:border-[#BB8752]"
                >
                  <option value="featured">Destaques da Editora</option>
                  <option value="year-desc">Mais Recentes</option>
                  <option value="title-asc">Título (A-Z)</option>
                </select>
              </div>

              <div className="flex items-center gap-1 text-[#5A514B]">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-[#FAF7F2] border border-[#1C1614]/10 rounded-md px-2 py-1 text-xs text-[#1C1614] focus:outline-none focus:border-[#BB8752]"
                >
                  <option value="all">Todos os Idiomas</option>
                  <option value="Português">Português</option>
                  <option value="Inglês">Inglês</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#8A817A] px-1">
          <span>
            Exibindo <strong>{filteredBooks.length}</strong> {filteredBooks.length === 1 ? 'publicação' : 'publicações'}
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedLanguage !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLanguage('all');
              }}
              className="text-[#BB8752] hover:underline font-medium"
            >
              Redefinir filtros
            </button>
          )}
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onOpenDetails={onOpenBook} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#1C1614]/8 space-y-4 my-8">
            <BookOpen className="w-12 h-12 text-[#BB8752]/60 mx-auto" />
            <h3 className="font-editorial text-2xl font-semibold text-[#1C1614]">
              Nenhum livro encontrado
            </h3>
            <p className="text-xs text-[#5A514B] max-w-sm mx-auto">
              Não encontramos publicações correspondentes aos filtros selecionados. Tente ajustar os termos da busca.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLanguage('all');
              }}
              className="px-5 py-2 rounded-full bg-[#1C1614] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Ver Todo o Catálogo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
