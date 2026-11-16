import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedBooks } from '../components/FeaturedBooks';
import { AboutSection } from '../components/AboutSection';
import { AuthorsSection } from '../components/AuthorsSection';
import { SoundtrackSection } from '../components/SoundtrackSection';
import { NewsSection } from '../components/NewsSection';
import { ContactSection } from '../components/ContactSection';
import { Book, Author } from '../types';

interface HomeProps {
  onOpenBook: (book: Book) => void;
  onOpenBookById: (bookId: string) => void;
  onOpenAuthor: (author: Author) => void;
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenBook,
  onOpenBookById,
  onOpenAuthor,
  onNavigate,
}) => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero
        onExploreCatalog={() => onNavigate('catalog')}
        onContact={() => onNavigate('contact')}
        onOpenBook={onOpenBookById}
      />

      {/* 2. Featured Books Showcase */}
      <FeaturedBooks
        onOpenBook={onOpenBook}
        onViewAll={() => onNavigate('catalog')}
      />

      {/* 3. About Section Preview */}
      <AboutSection
        onLearnMore={() => onNavigate('about')}
        onExploreCatalog={() => onNavigate('catalog')}
      />

      {/* 4. Authors Section */}
      <AuthorsSection
        onOpenAuthor={onOpenAuthor}
        onOpenBook={onOpenBookById}
      />

      {/* 5. Signature Soundtrack / Multimedia Section */}
      <SoundtrackSection />

      {/* 6. Literary News & Releases */}
      <NewsSection
        onViewAllNews={() => onNavigate('news')}
      />

      {/* 7. Contact & Conversion */}
      <ContactSection />
    </main>
  );
};
