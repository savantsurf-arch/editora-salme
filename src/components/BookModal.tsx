import React from 'react';
import { X, ExternalLink, BookOpen, Check, Share2, Sparkles, MessageCircle } from 'lucide-react';
import { Book } from '../types';
import { useEditorial } from '../context/EditorialContext';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
  onSelectBook: (book: Book) => void;
  onContact: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose, onSelectBook, onContact }) => {
  const { books, institutional } = useEditorial();

  if (!book) return null;

  const relatedBooks = books
    .filter(b => b.id !== book.id && (b.series === book.series || b.category === book.category))
    .slice(0, 3);

  const isComingSoon = book.status === 'coming_soon';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${book.title} — Editora Salme`,
          text: `Confira o livro "${book.title}" por ${book.author} publicado pela Editora Salme.`,
          url: window.location.href,
        });
      } catch {
        // Ignored
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF7F2] rounded-2xl max-w-4xl w-full border border-[#1C1614]/10 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1614]/10 bg-[#F4EFE6]">
          <div className="flex items-center gap-2">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-[#BB8752] font-semibold">
              Detalhes da Publicação
            </span>
            {book.series && (
              <span className="px-2 py-0.5 rounded-full bg-[#1C1614] text-[10px] text-white font-medium">
                {book.series}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-black/5 text-[#5A514B] transition-colors"
              title="Compartilhar"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-[#1C1614] transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Book Cover Presentation */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[260px] aspect-[2/3] book-shadow rounded-lg overflow-hidden bg-[#1C1614]">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/50 via-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Status pill */}
              <div className="mt-4 text-center">
                {isComingSoon ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BB8752] text-white text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Em Produção / Lançamento Futuro
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    Disponível para Leitura
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Title, Author, Synopsis & Tech Details */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#BB8752] font-semibold mb-1">
                  {book.genre}
                </p>
                <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#1C1614] leading-tight">
                  {book.title}
                </h2>
                <p className="font-editorial text-lg text-[#5A514B] italic mt-1">
                  Por {book.author}
                </p>
              </div>

              {/* Synopsis */}
              <div>
                <h4 className="text-xs font-display uppercase tracking-wider text-[#1C1614] font-semibold mb-2">
                  Sinopse Editorial
                </h4>
                <p className="text-sm text-[#5A514B] leading-relaxed font-light whitespace-pre-line">
                  {book.synopsis}
                </p>
              </div>

              {/* Technical Information Box */}
              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#1C1614]/8 space-y-2 text-xs">
                <h4 className="font-display uppercase tracking-wider text-[#BB8752] font-semibold text-[11px] mb-2">
                  Especificações Técnicas
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[#5A514B]">
                  <div>
                    <span className="font-semibold text-[#1C1614] block">Formato:</span>
                    <span>{book.format}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1614] block">Idioma:</span>
                    <span>{book.language}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1614] block">Ano de Publicação:</span>
                    <span>{book.publicationYear}</span>
                  </div>
                  {book.pages && (
                    <div>
                      <span className="font-semibold text-[#1C1614] block">Páginas:</span>
                      <span>~{book.pages} páginas</span>
                    </div>
                  )}
                  {book.asin && (
                    <div>
                      <span className="font-semibold text-[#1C1614] block">ASIN / ID Amazon:</span>
                      <span className="font-mono text-[11px]">{book.asin}</span>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-[#1C1614] block">Selo Editorial:</span>
                    <span>Editora Salme</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {book.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-white border border-[#1C1614]/8 text-[11px] text-[#5A514B]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Conversion Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {!isComingSoon && book.buyUrl && book.buyUrl !== '#' ? (
                  <a
                    href={book.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Ler / Comprar na Amazon</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      onClose();
                      onContact();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#BB8752] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ser avisado no Lançamento</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onClose();
                    onContact();
                  }}
                  className="py-3 px-5 rounded-full bg-[#F4EFE6] hover:bg-[#EBE2D4] text-[#1C1614] border border-[#1C1614]/15 font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Dúvidas Editoriais
                </button>
              </div>
            </div>
          </div>

          {/* Related Books Section */}
          {relatedBooks.length > 0 && (
            <div className="pt-8 border-t border-[#1C1614]/10">
              <h3 className="font-editorial text-2xl font-semibold text-[#1C1614] mb-4">
                Outras Obras Relacionadas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedBooks.map((relBook) => (
                  <div
                    key={relBook.id}
                    onClick={() => onSelectBook(relBook)}
                    className="cursor-pointer p-3 rounded-xl bg-white border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all flex items-center gap-3 group"
                  >
                    <img
                      src={relBook.coverUrl}
                      alt={relBook.title}
                      className="w-14 h-20 object-cover rounded shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-[#BB8752] font-semibold uppercase truncate">
                        {relBook.series || relBook.genre}
                      </p>
                      <h4 className="font-editorial text-base font-semibold text-[#1C1614] truncate group-hover:text-[#BB8752]">
                        {relBook.title}
                      </h4>
                      <p className="text-xs text-[#5A514B] truncate">
                        {relBook.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
