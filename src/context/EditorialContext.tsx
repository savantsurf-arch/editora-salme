import React, { createContext, useContext, useState, useEffect } from 'react';
import { Book, Author, NewsItem, InstitutionalInfo, ContactMessage } from '../types';
import { INITIAL_BOOKS, INITIAL_AUTHORS, INITIAL_NEWS, INITIAL_INSTITUTIONAL } from '../data/initialData';

interface EditorialContextType {
  books: Book[];
  authors: Author[];
  news: NewsItem[];
  institutional: InstitutionalInfo;
  messages: ContactMessage[];
  isAdminLoggedIn: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  
  // Books CRUD
  addBook: (book: Omit<Book, 'id'>) => void;
  updateBook: (id: string, updates: Partial<Book>) => void;
  deleteBook: (id: string) => void;
  
  // Authors CRUD
  addAuthor: (author: Omit<Author, 'id'>) => void;
  updateAuthor: (id: string, updates: Partial<Author>) => void;
  deleteAuthor: (id: string) => void;

  // News CRUD
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, updates: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;

  // Institutional info
  updateInstitutional: (updates: Partial<InstitutionalInfo>) => void;

  // Contact messages
  sendMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  markMessageRead: (id: string) => void;
  deleteMessage: (id: string) => void;

  // Reset
  resetToDefaults: () => void;
}

const EditorialContext = createContext<EditorialContextType | undefined>(undefined);

const STORAGE_KEYS = {
  BOOKS: 'salme_books_v1',
  AUTHORS: 'salme_authors_v1',
  NEWS: 'salme_news_v1',
  INSTITUTIONAL: 'salme_institutional_v1',
  MESSAGES: 'salme_messages_v1',
  AUTH: 'salme_admin_auth_v1',
};

export const EditorialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKS);
      return saved ? JSON.parse(saved) : INITIAL_BOOKS;
    } catch {
      return INITIAL_BOOKS;
    }
  });

  const [authors, setAuthors] = useState<Author[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTHORS);
      return saved ? JSON.parse(saved) : INITIAL_AUTHORS;
    } catch {
      return INITIAL_AUTHORS;
    }
  });

  const [news, setNews] = useState<NewsItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      return saved ? JSON.parse(saved) : INITIAL_NEWS;
    } catch {
      return INITIAL_NEWS;
    }
  });

  const [institutional, setInstitutional] = useState<InstitutionalInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INSTITUTIONAL);
      return saved ? JSON.parse(saved) : INITIAL_INSTITUTIONAL;
    } catch {
      return INITIAL_INSTITUTIONAL;
    }
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTHORS, JSON.stringify(authors));
  }, [authors]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INSTITUTIONAL, JSON.stringify(institutional));
  }, [institutional]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTH, isAdminLoggedIn ? 'true' : 'false');
  }, [isAdminLoggedIn]);

  // Auth
  const loginAdmin = (password: string) => {
    // Standard secure phrase for team or default 'salme2025' or 'salmeadmin'
    if (password === 'salme2025' || password === 'admin' || password === 'salme') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  // Books CRUD
  const addBook = (bookData: Omit<Book, 'id'>) => {
    const newBook: Book = {
      ...bookData,
      id: bookData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4),
    };
    setBooks(prev => [newBook, ...prev]);
  };

  const updateBook = (id: string, updates: Partial<Book>) => {
    setBooks(prev => prev.map(b => (b.id === id ? { ...b, ...updates } : b)));
  };

  const deleteBook = (id: string) => {
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  // Authors CRUD
  const addAuthor = (authorData: Omit<Author, 'id'>) => {
    const newAuthor: Author = {
      ...authorData,
      id: authorData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now().toString().slice(-4),
    };
    setAuthors(prev => [...prev, newAuthor]);
  };

  const updateAuthor = (id: string, updates: Partial<Author>) => {
    setAuthors(prev => prev.map(a => (a.id === id ? { ...a, ...updates } : a)));
  };

  const deleteAuthor = (id: string) => {
    setAuthors(prev => prev.filter(a => a.id !== id));
  };

  // News CRUD
  const addNews = (itemData: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = {
      ...itemData,
      id: 'news-' + Date.now(),
    };
    setNews(prev => [newItem, ...prev]);
  };

  const updateNews = (id: string, updates: Partial<NewsItem>) => {
    setNews(prev => prev.map(n => (n.id === id ? { ...n, ...updates } : n)));
  };

  const deleteNews = (id: string) => {
    setNews(prev => prev.filter(n => n.id !== id));
  };

  // Institutional info
  const updateInstitutional = (updates: Partial<InstitutionalInfo>) => {
    setInstitutional(prev => ({ ...prev, ...updates }));
  };

  // Contact messages
  const sendMessage = (msgData: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msgData,
      id: 'msg-' + Date.now(),
      createdAt: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'unread'
    };
    setMessages(prev => [newMsg, ...prev]);
  };

  const markMessageRead = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status: 'read' as const } : m));
  };

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const resetToDefaults = () => {
    setBooks(INITIAL_BOOKS);
    setAuthors(INITIAL_AUTHORS);
    setNews(INITIAL_NEWS);
    setInstitutional(INITIAL_INSTITUTIONAL);
    localStorage.removeItem(STORAGE_KEYS.BOOKS);
    localStorage.removeItem(STORAGE_KEYS.AUTHORS);
    localStorage.removeItem(STORAGE_KEYS.NEWS);
    localStorage.removeItem(STORAGE_KEYS.INSTITUTIONAL);
  };

  return (
    <EditorialContext.Provider
      value={{
        books,
        authors,
        news,
        institutional,
        messages,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        addBook,
        updateBook,
        deleteBook,
        addAuthor,
        updateAuthor,
        deleteAuthor,
        addNews,
        updateNews,
        deleteNews,
        updateInstitutional,
        sendMessage,
        markMessageRead,
        deleteMessage,
        resetToDefaults,
      }}
    >
      {children}
    </EditorialContext.Provider>
  );
};

export const useEditorial = () => {
  const context = useContext(EditorialContext);
  if (!context) {
    throw new Error('useEditorial must be used within an EditorialProvider');
  }
  return context;
};
