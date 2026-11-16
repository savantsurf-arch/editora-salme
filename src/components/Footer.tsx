import React from 'react';
import { BookOpen, Heart, ArrowUp, Shield } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { useEditorial } from '../context/EditorialContext';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { institutional } = useEditorial();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId: string) => {
    setCurrentPage(pageId);
    scrollToTop();
  };

  return (
    <footer className="bg-[#1C1614] text-[#FAF7F2] border-t border-[#BB8752]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#BB8752]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FAF7F2]/10">
          {/* Column 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#BB8752]/50 bg-[#2A221F] flex items-center justify-center text-[#DFC096]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display tracking-[0.25em] text-xl font-bold text-[#FAF7F2]">
                  EDITORA SALME
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#BB8752] font-medium">
                  Selo Editorial Independente
                </span>
              </div>
            </div>

            <p className="font-editorial text-lg text-[#DFC096]/90 italic max-w-sm leading-relaxed">
              "{institutional.slogan}"
            </p>

            <p className="text-xs text-[#FAF7F2]/70 leading-relaxed max-w-sm">
              Publicando romances sensíveis, releituras de clássicos e narrativas autorais que tocam o coração e valorizam vozes independentes da literatura brasileira contemporânea.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={institutional.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#2A221F] border border-[#FAF7F2]/10 flex items-center justify-center text-[#DFC096] hover:bg-[#BB8752] hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={institutional.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-full bg-[#2A221F] border border-[#FAF7F2]/10 flex items-center justify-center text-[#DFC096] text-xs font-semibold hover:bg-[#BB8752] hover:text-white transition-all duration-200"
              >
                TikTok
              </a>
              <a
                href={institutional.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-full bg-[#2A221F] border border-[#FAF7F2]/10 flex items-center justify-center text-[#DFC096] text-xs font-semibold hover:bg-[#BB8752] hover:text-white transition-all duration-200"
              >
                Threads
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-[#BB8752] font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/70">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#DFC096] transition-colors">
                  Página Inicial
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalog')} className="hover:text-[#DFC096] transition-colors">
                  Catálogo Editorial
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('authors')} className="hover:text-[#DFC096] transition-colors">
                  Nossos Autores
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#DFC096] transition-colors">
                  Sobre a Editora
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('news')} className="hover:text-[#DFC096] transition-colors">
                  Novidades & Eventos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#DFC096] transition-colors">
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Séries & Destaques */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-[#BB8752] font-semibold mb-4">
              Publicações
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/70">
              <li>
                <button onClick={() => handleNav('catalog')} className="hover:text-[#DFC096] transition-colors text-left">
                  Série Espelhos Quebrados
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalog')} className="hover:text-[#DFC096] transition-colors text-left">
                  A Bela e os Espinhos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalog')} className="hover:text-[#DFC096] transition-colors text-left">
                  A Maldição do Silêncio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalog')} className="hover:text-[#DFC096] transition-colors text-left">
                  Broken Mirrors (Edição em Inglês)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('catalog')} className="hover:text-[#DFC096] transition-colors text-left">
                  Meu Amado Chefe
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contato & Equipe */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-[#BB8752] font-semibold mb-4">
              Contato Institucional
            </h4>
            <p className="text-xs text-[#FAF7F2]/70 mb-2">
              Envio de originais, propostas editoriais e parcerias:
            </p>
            <p className="text-xs text-[#DFC096] font-medium mb-4">
              {institutional.contactEmail}
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleNav('admin')}
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#2A221F] hover:bg-[#382D29] text-[11px] text-[#DFC096] border border-[#BB8752]/30 transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Área Restrita da Equipe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/50 gap-4">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Editora Salme. Todos os direitos reservados. Feito com</span>
            <Heart className="w-3.5 h-3.5 text-[#BB8752] fill-[#BB8752]" />
            <span>para a literatura autoral.</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#FAF7F2]/40">Salvador • Bahia • Brasil</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#DFC096] hover:text-white transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
