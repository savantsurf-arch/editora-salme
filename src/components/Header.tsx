import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X, Shield, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { useEditorial } from '../context/EditorialContext';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openBookModal?: (bookId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { institutional, isAdminLoggedIn } = useEditorial();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'catalog', label: 'Catálogo' },
    { id: 'authors', label: 'Autores' },
    { id: 'about', label: 'A Editora' },
    { id: 'news', label: 'Novidades' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#1C1614]/8 py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#1C1614]/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left transition-transform active:scale-98"
          >
            <div className="w-10 h-10 rounded-full border border-[#BB8752]/40 bg-[#F4EFE6] flex items-center justify-center text-[#BB8752] group-hover:bg-[#BB8752] group-hover:text-white transition-all duration-300 shadow-sm">
              <BookOpen className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <span className="block font-display tracking-[0.25em] text-lg sm:text-xl font-semibold text-[#1C1614]">
                SALME
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#BB8752] font-medium -mt-1">
                Editora Independente
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-[#1C1614] bg-[#BB8752]/15 font-semibold shadow-2xs'
                    : 'text-[#5A514B] hover:text-[#1C1614] hover:bg-[#1C1614]/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={institutional.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Editora"
              className="p-2 rounded-full text-[#5A514B] hover:text-[#BB8752] hover:bg-[#F4EFE6] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => handleNavClick('admin')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isAdminLoggedIn
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                  : 'bg-[#F4EFE6] text-[#5A514B] hover:text-[#1C1614] border border-[#1C1614]/10 hover:border-[#BB8752]/40'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#BB8752]" />
              <span>{isAdminLoggedIn ? 'Painel Ativo' : 'Painel'}</span>
            </button>

            <button
              onClick={() => handleNavClick('catalog')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1614] text-[#FAF7F2] hover:bg-[#BB8752] transition-colors text-xs font-semibold tracking-wider uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC096]" />
              <span>Catálogo</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('admin')}
              className="p-2 text-[#5A514B] hover:text-[#1C1614]"
              aria-label="Acessar painel"
            >
              <Shield className="w-4 h-4 text-[#BB8752]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1614] hover:bg-[#F4EFE6] transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#1C1614]/10 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-[#BB8752]/15 text-[#1C1614] font-semibold'
                    : 'text-[#5A514B] hover:bg-[#F4EFE6] hover:text-[#1C1614]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#1C1614]/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('admin')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F4EFE6] text-[#1C1614] text-xs font-medium border border-[#1C1614]/10"
              >
                <Shield className="w-4 h-4 text-[#BB8752]" />
                <span>{isAdminLoggedIn ? 'Acessar Painel Administrativo' : 'Painel da Equipe'}</span>
              </button>

              <button
                onClick={() => handleNavClick('catalog')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1614] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 text-[#DFC096]" />
                <span>Explorar Catálogo Completo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
