import React from 'react';
import { ExternalLink, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onOpenDetails: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onOpenDetails }) => {
  const isComingSoon = book.status === 'coming_soon';

  return (
    <article className="group bg-white rounded-xl border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all duration-300 editorial-shadow hover:shadow-xl flex flex-col overflow-hidden">
      {/* Cover Showcase Container */}
      <div
        onClick={() => onOpenDetails(book)}
        className="relative bg-[#1C1614]/5 cursor-pointer overflow-hidden p-6 pb-4 flex items-center justify-center border-b border-[#1C1614]/5"
      >
        {/* Subtle decorative glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1614]/5 pointer-events-none" />

        {/* Badge status */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1">
          {book.series && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#1C1614] text-[#FAF7F2] shadow-sm">
              {book.series}
            </span>
          )}
          {isComingSoon && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#BB8752] text-white shadow-sm">
              Em Breve
            </span>
          )}
        </div>

        {/* 3D Book Cover Presentation */}
        <div className="relative w-44 sm:w-48 aspect-[2/3] book-shadow rounded-md overflow-hidden bg-[#1C1614]">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle book spine shading overlay */}
          <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Content description */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#8A817A]">
            <span>{book.genre}</span>
            <span className="text-[#BB8752] font-medium">{book.language}</span>
          </div>

          <h3
            onClick={() => onOpenDetails(book)}
            className="font-editorial text-2xl font-semibold text-[#1C1614] group-hover:text-[#BB8752] transition-colors cursor-pointer line-clamp-1 leading-snug"
          >
            {book.title}
          </h3>

          <p className="text-xs font-medium text-[#5A514B]">
            Por <span className="text-[#1C1614] font-semibold">{book.author}</span>
          </p>

          <p className="text-xs text-[#5A514B] line-clamp-3 leading-relaxed pt-1 font-light">
            {book.synopsis}
          </p>
        </div>

        {/* Actions Footer */}
        <div className="mt-5 pt-4 border-t border-[#1C1614]/8 flex items-center gap-2">
          <button
            onClick={() => onOpenDetails(book)}
            className="flex-1 py-2 px-3 rounded-lg bg-[#F4EFE6] hover:bg-[#EBE2D4] text-[#1C1614] text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#BB8752]" />
            <span>Conheça o livro</span>
          </button>

          {!isComingSoon && book.buyUrl && book.buyUrl !== '#' && (
            <a
              href={book.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Comprar ${book.title} na Amazon`}
              className="py-2 px-3 rounded-lg bg-[#1C1614] hover:bg-[#BB8752] text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1 shadow-xs"
            >
              <span>Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
