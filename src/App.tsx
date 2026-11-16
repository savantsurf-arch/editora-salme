import React, { useState } from 'react';
import { EditorialProvider, useEditorial } from './context/EditorialContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookModal } from './components/BookModal';
import { AuthorModal } from './components/AuthorModal';
import { Home } from './pages/Home';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { AuthorsPage } from './pages/AuthorsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { Book, Author } from './types';

const MainContent: React.FC = () => {
  const { books } = useEditorial();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  const handleOpenBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleOpenBookById = (bookId: string) => {
    const book = books.find((b) => b.id === bookId);
    if (book) {
      setSelectedBook(book);
    }
  };

  const handleOpenAuthor = (author: Author) => {
    setSelectedAuthor(author);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-[#BB8752]/20 selection:text-[#1C1614]">
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handleNavigate}
        openBookModal={handleOpenBookById}
      />

      {/* Dynamic View Router */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <Home
            onOpenBook={handleOpenBook}
            onOpenBookById={handleOpenBookById}
            onOpenAuthor={handleOpenAuthor}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'catalog' && (
          <CatalogPage onOpenBook={handleOpenBook} />
        )}
        {currentPage === 'authors' && (
          <AuthorsPage
            onOpenAuthor={handleOpenAuthor}
            onOpenBook={handleOpenBookById}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'news' && (
          <NewsPage onOpenBookById={handleOpenBookById} />
        )}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminPage />}
      </div>

      {/* Floating Action for WhatsApp */}
      <WhatsAppFloat />

      {/* Global Interactive Modals */}
      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onSelectBook={handleOpenBook}
        onContact={() => {
          setSelectedBook(null);
          handleNavigate('contact');
        }}
      />

      <AuthorModal
        author={selectedAuthor}
        onClose={() => setSelectedAuthor(null)}
        onSelectBook={handleOpenBook}
      />

      {/* Institutional Footer */}
      <Footer setCurrentPage={handleNavigate} />
    </div>
  );
};

export function App() {
  return (
    <EditorialProvider>
      <MainContent />
    </EditorialProvider>
  );
}

export default App;
