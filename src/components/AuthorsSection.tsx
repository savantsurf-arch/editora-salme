import React from 'react';
import { ArrowRight, BookOpen, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { Author, Book } from '../types';
import { useEditorial } from '../context/EditorialContext';

interface AuthorsSectionProps {
  onOpenAuthor: (author: Author) => void;
  onOpenBook: (bookId: string) => void;
}

export const AuthorsSection: React.FC<AuthorsSectionProps> = ({ onOpenAuthor, onOpenBook }) => {
  const { authors, books } = useEditorial();

  return (
    <section className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#BB8752]" />
            <span>Nossos Escritores</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1614]">
            As vozes que dão vida às nossas histórias
          </h2>
          <p className="text-sm sm:text-base text-[#5A514B] font-light">
            Conheça os autores que colocam o coração em cada página e criam laços inesquecíveis com quem lê.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="space-y-12">
          {authors.map((author) => {
            const authorBooks = books.filter(b => b.author.includes(author.penName || author.name) || b.author.includes('Nath'));

            return (
              <div
                key={author.id}
                className="bg-white rounded-2xl p-6 sm:p-10 border border-[#1C1614]/8 editorial-shadow hover:border-[#BB8752]/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Author Portrait & Badges */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative">
                    {/* Decorative gold ring */}
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-[#BB8752] via-[#DFC096] to-[#BB8752]/30 shadow-xl">
                      <img
                        src={author.photoUrl}
                        alt={author.name}
                        className="w-full h-full object-cover rounded-full bg-[#F4EFE6]"
                      />
                    </div>
                    <div className="absolute -bottom-2 bg-[#1C1614] text-[#FAF7F2] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      Autora Destaque
                    </div>
                  </div>

                  <div className="mt-5 space-y-1">
                    <h3 className="font-editorial text-2xl font-bold text-[#1C1614]">
                      {author.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#BB8752] font-semibold">
                      Assina como: {author.penName}
                    </p>
                    <p className="text-xs text-[#8A817A] flex items-center justify-center gap-1 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#BB8752]" />
                      <span>{author.origin}</span>
                    </p>
                  </div>

                  {/* Social buttons */}
                  <div className="flex items-center gap-2 mt-4">
                    {author.instagram && (
                      <a
                        href={author.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#F4EFE6] text-[#BB8752] flex items-center justify-center hover:bg-[#BB8752] hover:text-white transition-colors"
                        title="Instagram"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    )}
                    {author.tiktok && (
                      <a
                        href={author.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 h-8 rounded-full bg-[#F4EFE6] text-[#1C1614] text-[11px] font-semibold flex items-center justify-center hover:bg-[#BB8752] hover:text-white transition-colors"
                      >
                        TikTok
                      </a>
                    )}
                    {author.threads && (
                      <a
                        href={author.threads}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 h-8 rounded-full bg-[#F4EFE6] text-[#1C1614] text-[11px] font-semibold flex items-center justify-center hover:bg-[#BB8752] hover:text-white transition-colors"
                      >
                        Threads
                      </a>
                    )}
                  </div>
                </div>

                {/* Author Biography & Published Works Showcase */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Quote / Bio */}
                  <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#1C1614]/5 space-y-3">
                    <p className="font-editorial text-lg sm:text-xl text-[#1C1614] italic leading-relaxed">
                      "{author.bio}"
                    </p>
                    <p className="text-xs text-[#5A514B] leading-relaxed">
                      {author.extendedBio}
                    </p>
                  </div>

                  {/* Author Works Grid */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-display text-xs uppercase tracking-wider text-[#1C1614] font-semibold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#BB8752]" />
                        <span>Obras Publicadas pela Salme</span>
                      </h4>
                      <button
                        onClick={() => onOpenAuthor(author)}
                        className="text-xs text-[#BB8752] hover:text-[#8C6033] font-semibold flex items-center gap-1"
                      >
                        <span>Ver Perfil Completo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {authorBooks.slice(0, 4).map((book) => (
                        <div
                          key={book.id}
                          onClick={() => onOpenBook(book.id)}
                          className="group/b cursor-pointer p-2 rounded-lg bg-[#FAF7F2] hover:bg-white border border-[#1C1614]/5 hover:border-[#BB8752]/40 transition-all text-center"
                        >
                          <img
                            src={book.coverUrl}
                            alt={book.title}
                            className="w-full aspect-[2/3] object-cover rounded shadow-2xs group-hover/b:scale-103 transition-transform"
                          />
                          <p className="font-editorial text-xs font-semibold text-[#1C1614] truncate mt-1.5">
                            {book.title}
                          </p>
                          <p className="text-[10px] text-[#BB8752] truncate">
                            {book.series || book.genre}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
