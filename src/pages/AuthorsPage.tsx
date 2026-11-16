import React from 'react';
import { Sparkles, MapPin, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { useEditorial } from '../context/EditorialContext';
import { Author, Book } from '../types';

interface AuthorsPageProps {
  onOpenAuthor: (author: Author) => void;
  onOpenBook: (bookId: string) => void;
}

export const AuthorsPage: React.FC<AuthorsPageProps> = ({ onOpenAuthor, onOpenBook }) => {
  const { authors, books } = useEditorial();

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#BB8752]" />
            <span>Equipe Criativa</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1C1614]">
            Autores da Editora Salme
          </h1>

          <p className="text-base text-[#5A514B] font-light leading-relaxed">
            Conheça as mentes e corações que constroem histórias inesquecíveis, conectando leitores através de sentimentos reais e profundos.
          </p>
        </div>

        {/* Authors List */}
        <div className="space-y-12">
          {authors.map((author) => {
            const authorBooks = books.filter(b =>
              b.author.toLowerCase().includes(author.penName?.toLowerCase() || '') ||
              b.author.toLowerCase().includes(author.name.toLowerCase()) ||
              b.author.toLowerCase().includes('nath')
            );

            return (
              <div
                key={author.id}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#1C1614]/8 editorial-shadow space-y-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4 flex flex-col items-center text-center">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-[#BB8752] via-[#DFC096] to-[#BB8752]/40 shadow-xl mb-4">
                      <img
                        src={author.photoUrl}
                        alt={author.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h2 className="font-editorial text-3xl font-bold text-[#1C1614]">
                      {author.name}
                    </h2>
                    <p className="text-xs uppercase tracking-widest text-[#BB8752] font-semibold mt-1">
                      Assina como: {author.penName}
                    </p>
                    <p className="text-xs text-[#8A817A] flex items-center justify-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#BB8752]" />
                      <span>{author.origin}</span>
                    </p>

                    {/* Social networks */}
                    <div className="flex items-center gap-2 mt-4">
                      {author.instagram && (
                        <a
                          href={author.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#1C1614]/10 text-xs text-[#1C1614] hover:text-[#BB8752] transition-colors"
                        >
                          <InstagramIcon className="w-3.5 h-3.5" />
                          <span>Instagram</span>
                        </a>
                      )}
                      {author.tiktok && (
                        <a
                          href={author.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#1C1614]/10 text-xs text-[#1C1614] hover:text-[#BB8752] transition-colors font-semibold"
                        >
                          TikTok
                        </a>
                      )}
                      {author.threads && (
                        <a
                          href={author.threads}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#1C1614]/10 text-xs text-[#1C1614] hover:text-[#BB8752] transition-colors font-semibold"
                        >
                          Threads
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-6">
                    <div className="bg-[#F4EFE6] p-6 sm:p-8 rounded-2xl border border-[#1C1614]/6 space-y-4">
                      <h3 className="font-display text-xs uppercase tracking-widest text-[#BB8752] font-semibold">
                        Biografia & Voz Autoral
                      </h3>
                      <blockquote className="font-editorial text-2xl text-[#1C1614] italic leading-relaxed">
                        "{author.bio}"
                      </blockquote>
                      <p className="text-sm text-[#5A514B] leading-relaxed font-light">
                        {author.extendedBio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Published bibliography */}
                <div className="pt-8 border-t border-[#1C1614]/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-editorial text-2xl font-semibold text-[#1C1614] flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#BB8752]" />
                      <span>Catálogo Completo da Autora ({authorBooks.length} obras)</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {authorBooks.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => onOpenBook(b.id)}
                        className="group/b cursor-pointer p-4 rounded-xl bg-[#FAF7F2] hover:bg-white border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all flex flex-col justify-between"
                      >
                        <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-sm mb-3 bg-[#1C1614]">
                          <img
                            src={b.coverUrl}
                            alt={b.title}
                            className="w-full h-full object-cover group-hover/b:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-semibold uppercase text-[#BB8752]">
                            {b.series || b.genre}
                          </span>
                          <h4 className="font-editorial text-base font-semibold text-[#1C1614] line-clamp-1 group-hover/b:text-[#BB8752]">
                            {b.title}
                          </h4>
                          <p className="text-[11px] text-[#5A514B] line-clamp-2">
                            {b.synopsis}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#1C1614]/8 flex items-center justify-between text-xs font-semibold text-[#BB8752]">
                          <span>Conhecer detalhes</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/b:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
