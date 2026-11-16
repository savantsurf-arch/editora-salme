import React from 'react';
import { X, MapPin, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { Author, Book } from '../types';
import { useEditorial } from '../context/EditorialContext';

interface AuthorModalProps {
  author: Author | null;
  onClose: () => void;
  onSelectBook: (book: Book) => void;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({ author, onClose, onSelectBook }) => {
  const { books } = useEditorial();

  if (!author) return null;

  const authorBooks = books.filter(b =>
    b.author.toLowerCase().includes(author.penName?.toLowerCase() || '') ||
    b.author.toLowerCase().includes(author.name.toLowerCase()) ||
    b.author.toLowerCase().includes('nath')
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF7F2] rounded-2xl max-w-3xl w-full border border-[#1C1614]/10 shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1614]/10 bg-[#F4EFE6]">
          <span className="font-display text-xs uppercase tracking-[0.2em] text-[#BB8752] font-semibold">
            Perfil do Autor
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#1C1614] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-[#BB8752] to-[#DFC096] shrink-0 shadow-lg">
              <img
                src={author.photoUrl}
                alt={author.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4EFE6] text-[#8C6033] text-[10px] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#BB8752]" />
                <span>Autora do Catálogo Salme</span>
              </div>
              <h2 className="font-editorial text-3xl font-bold text-[#1C1614]">
                {author.name}
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#BB8752] font-semibold">
                Nome editorial: {author.penName}
              </p>
              <p className="text-xs text-[#8A817A] flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#BB8752]" />
                <span>{author.origin}</span>
              </p>

              {/* Social buttons */}
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
                {author.instagram && (
                  <a
                    href={author.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#1C1614]/10 text-xs text-[#1C1614] hover:text-[#BB8752] transition-colors"
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
                    className="px-3 py-1 rounded-full bg-white border border-[#1C1614]/10 text-xs text-[#1C1614] hover:text-[#BB8752] transition-colors font-semibold"
                  >
                    TikTok
                  </a>
                )}
                {author.threads && (
                  <a
                    href={author.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-white border border-[#1C1614]/10 text-xs text-[#1C1614] hover:text-[#BB8752] transition-colors font-semibold"
                  >
                    Threads
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="bg-[#F4EFE6] p-5 rounded-xl border border-[#1C1614]/8 space-y-3">
            <h4 className="font-display text-xs uppercase tracking-wider text-[#BB8752] font-semibold">
              Sobre a Autora
            </h4>
            <p className="font-editorial text-lg italic text-[#1C1614] leading-relaxed">
              "{author.bio}"
            </p>
            {author.extendedBio && (
              <p className="text-xs text-[#5A514B] leading-relaxed">
                {author.extendedBio}
              </p>
            )}
          </div>

          {/* Published Books Grid */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-wider text-[#1C1614] font-semibold mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#BB8752]" />
              <span>Obras e Publicações ({authorBooks.length})</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {authorBooks.map((b) => (
                <div
                  key={b.id}
                  onClick={() => {
                    onClose();
                    onSelectBook(b);
                  }}
                  className="cursor-pointer p-3 rounded-xl bg-white border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all group flex flex-col justify-between"
                >
                  <img
                    src={b.coverUrl}
                    alt={b.title}
                    className="w-full aspect-[2/3] object-cover rounded shadow-2xs group-hover:scale-103 transition-transform"
                  />
                  <div className="mt-2 text-center">
                    <p className="font-editorial text-sm font-semibold text-[#1C1614] truncate group-hover:text-[#BB8752]">
                      {b.title}
                    </p>
                    <p className="text-[10px] text-[#BB8752] truncate">
                      {b.series || b.genre}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
