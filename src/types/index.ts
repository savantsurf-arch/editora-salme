export interface Book {
  id: string;
  title: string;
  originalTitle?: string;
  series?: string;
  seriesOrder?: number;
  author: string;
  synopsis: string;
  genre: string;
  category: 'safico' | 'romance' | 'duologia' | 'internacional' | 'independente';
  language: 'Português' | 'Inglês';
  coverUrl: string;
  format: string;
  isbn?: string;
  asin?: string;
  publicationYear: number;
  pages?: number;
  buyUrl: string;
  status: 'available' | 'coming_soon';
  isFeatured: boolean;
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  penName?: string;
  bio: string;
  extendedBio?: string;
  photoUrl: string;
  origin: string;
  instagram?: string;
  tiktok?: string;
  threads?: string;
  isFeatured: boolean;
  publishedBooksCount: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: 'Lançamento' | 'Notícia' | 'Evento' | 'Comunidade';
  imageUrl?: string;
  externalLink?: string;
}

export interface InstitutionalInfo {
  name: string;
  slogan: string;
  heroHeadline: string;
  heroSubheadline: string;
  manifesto: string;
  history: string;
  mission: string;
  vision: string;
  values: string[];
  contactEmail: string;
  whatsapp: string;
  instagram: string;
  tiktok: string;
  threads: string;
  soundtrackTitle: string;
  soundtrackSubtitle: string;
  soundtrackYoutubeId: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'read';
}
