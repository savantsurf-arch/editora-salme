import React, { useState } from 'react';
import {
  Shield, Lock, Plus, Trash2, Edit3, Save, RotateCcw,
  BookOpen, Users, Newspaper, MessageSquare, Building2, Check,
  ExternalLink, LogOut, AlertCircle, Eye
} from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';
import { Book, Author, NewsItem } from '../types';

export const AdminPage: React.FC = () => {
  const {
    books, authors, news, institutional, messages,
    isAdminLoggedIn, loginAdmin, logoutAdmin,
    addBook, updateBook, deleteBook,
    addAuthor, updateAuthor, deleteAuthor,
    addNews, updateNews, deleteNews,
    updateInstitutional, markMessageRead, deleteMessage, resetToDefaults
  } = useEditorial();

  // Login form state
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'books' | 'authors' | 'news' | 'messages' | 'institutional'>('books');

  // Book Modal State
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [editingBookId, setEditingBookId] = useState<string | null>(null);
  const [bookForm, setBookForm] = useState<Omit<Book, 'id'>>({
    title: '',
    series: 'Espelhos Quebrados',
    seriesOrder: 1,
    author: 'Nath Almeida',
    synopsis: '',
    genre: 'Romance Sáfico',
    category: 'duologia',
    language: 'Português',
    coverUrl: '',
    format: 'eBook Kindle / Kindle Unlimited',
    asin: '',
    publicationYear: new Date().getFullYear(),
    pages: 300,
    buyUrl: '',
    status: 'available',
    isFeatured: true,
    tags: ['Romance Sáfico', 'Espelhos Quebrados'],
  });

  // Author Modal State
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [editingAuthorId, setEditingAuthorId] = useState<string | null>(null);
  const [authorForm, setAuthorForm] = useState<Omit<Author, 'id'>>({
    name: '',
    penName: '',
    bio: '',
    extendedBio: '',
    photoUrl: '',
    origin: 'Bahia, Brasil',
    instagram: '',
    tiktok: '',
    threads: '',
    isFeatured: true,
    publishedBooksCount: 1,
  });

  // News Modal State
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [newsForm, setNewsForm] = useState<Omit<NewsItem, 'id'>>({
    title: '',
    summary: '',
    content: '',
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    category: 'Lançamento',
    imageUrl: '',
    externalLink: '',
  });

  // Institutional Form State
  const [instForm, setInstForm] = useState(institutional);
  const [instSaved, setInstSaved] = useState(false);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      setLoginError(false);
      setPassword('');
    } else {
      setLoginError(true);
    }
  };

  // Open Book Modal (New or Edit)
  const handleOpenBookModal = (book?: Book) => {
    if (book) {
      setEditingBookId(book.id);
      setBookForm({
        title: book.title,
        originalTitle: book.originalTitle,
        series: book.series,
        seriesOrder: book.seriesOrder,
        author: book.author,
        synopsis: book.synopsis,
        genre: book.genre,
        category: book.category,
        language: book.language,
        coverUrl: book.coverUrl,
        format: book.format,
        isbn: book.isbn,
        asin: book.asin,
        publicationYear: book.publicationYear,
        pages: book.pages,
        buyUrl: book.buyUrl,
        status: book.status,
        isFeatured: book.isFeatured,
        tags: book.tags,
      });
    } else {
      setEditingBookId(null);
      setBookForm({
        title: '',
        series: 'Espelhos Quebrados',
        seriesOrder: 1,
        author: 'Nath Almeida',
        synopsis: '',
        genre: 'Romance Sáfico',
        category: 'duologia',
        language: 'Português',
        coverUrl: 'https://editora-salme.my.canva.site/_assets/media/346eec122f5d5e87b99a206f88c3eb5a.jpg',
        format: 'eBook Kindle / Kindle Unlimited',
        asin: '',
        publicationYear: new Date().getFullYear(),
        pages: 300,
        buyUrl: '',
        status: 'available',
        isFeatured: true,
        tags: ['Romance Sáfico'],
      });
    }
    setIsBookModalOpen(true);
  };

  const handleSaveBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBookId) {
      updateBook(editingBookId, bookForm);
    } else {
      addBook(bookForm);
    }
    setIsBookModalOpen(false);
  };

  // Open Author Modal
  const handleOpenAuthorModal = (author?: Author) => {
    if (author) {
      setEditingAuthorId(author.id);
      setAuthorForm({
        name: author.name,
        penName: author.penName,
        bio: author.bio,
        extendedBio: author.extendedBio,
        photoUrl: author.photoUrl,
        origin: author.origin,
        instagram: author.instagram,
        tiktok: author.tiktok,
        threads: author.threads,
        isFeatured: author.isFeatured,
        publishedBooksCount: author.publishedBooksCount,
      });
    } else {
      setEditingAuthorId(null);
      setAuthorForm({
        name: '',
        penName: '',
        bio: '',
        extendedBio: '',
        photoUrl: '',
        origin: 'Bahia, Brasil',
        instagram: '',
        tiktok: '',
        threads: '',
        isFeatured: true,
        publishedBooksCount: 1,
      });
    }
    setIsAuthorModalOpen(true);
  };

  const handleSaveAuthor = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAuthorId) {
      updateAuthor(editingAuthorId, authorForm);
    } else {
      addAuthor(authorForm);
    }
    setIsAuthorModalOpen(false);
  };

  // Open News Modal
  const handleOpenNewsModal = (item?: NewsItem) => {
    if (item) {
      setEditingNewsId(item.id);
      setNewsForm({
        title: item.title,
        summary: item.summary,
        content: item.content,
        date: item.date,
        category: item.category,
        imageUrl: item.imageUrl,
        externalLink: item.externalLink,
      });
    } else {
      setEditingNewsId(null);
      setNewsForm({
        title: '',
        summary: '',
        content: '',
        date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
        category: 'Lançamento',
        imageUrl: '',
        externalLink: '',
      });
    }
    setIsNewsModalOpen(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNewsId) {
      updateNews(editingNewsId, newsForm);
    } else {
      addNews(newsForm);
    }
    setIsNewsModalOpen(false);
  };

  // Save Institutional Info
  const handleSaveInstitutional = (e: React.FormEvent) => {
    e.preventDefault();
    updateInstitutional(instForm);
    setInstSaved(true);
    setTimeout(() => setInstSaved(false), 3000);
  };

  // If NOT Logged In: Show Authentication Gate
  if (!isAdminLoggedIn) {
    return (
      <div className="pt-32 pb-24 bg-[#FAF7F2] min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#1C1614]/10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-[#F4EFE6] text-[#BB8752] border border-[#BB8752]/30 flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-editorial text-3xl font-bold text-[#1C1614]">
              Painel Administrativo
            </h1>
            <p className="text-xs text-[#5A514B]">
              Acesso restrito para a equipe editorial da Editora Salme
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                Senha de Acesso
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha institucional..."
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614] focus:outline-none focus:border-[#BB8752] focus:bg-white transition-all"
              />
            </div>

            {loginError && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Senha incorreta. Dica: use <strong>salme2025</strong> ou <strong>admin</strong></span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-[#FAF7F2] font-semibold text-xs uppercase tracking-widest transition-all shadow-md active:scale-98"
            >
              Entrar no Painel
            </button>
          </form>

          <div className="pt-2 border-t border-[#1C1614]/10 text-center">
            <p className="text-[11px] text-[#8A817A]">
              Credencial padrão para homologação: <strong className="text-[#1C1614]">salme2025</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If Logged In: Show Admin Dashboard
  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header of the Admin Panel */}
        <div className="bg-[#1C1614] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 mb-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#BB8752]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A221F] text-[#DFC096] text-[11px] font-semibold uppercase tracking-wider mb-2 border border-[#BB8752]/30">
              <Shield className="w-3.5 h-3.5 text-[#BB8752]" />
              <span>Gestão Editorial Salme</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold">
              Painel de Controle e Publicações
            </h1>
            <p className="text-xs text-[#FAF7F2]/70 font-light mt-1">
              Gerencie catálogo, autores, notícias e informações da editora sem mexer no código.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Deseja restaurar os dados padrão originais do catálogo?')) {
                  resetToDefaults();
                }
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#2A221F] hover:bg-[#3D322E] text-xs text-[#DFC096] border border-[#BB8752]/30 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Originais</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-900/60 hover:bg-rose-800 text-xs text-rose-100 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F4EFE6] rounded-2xl border border-[#1C1614]/8 mb-8">
          <button
            onClick={() => setActiveTab('books')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'books'
                ? 'bg-white text-[#1C1614] shadow-xs'
                : 'text-[#5A514B] hover:text-[#1C1614]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#BB8752]" />
            <span>Livros ({books.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('authors')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'authors'
                ? 'bg-white text-[#1C1614] shadow-xs'
                : 'text-[#5A514B] hover:text-[#1C1614]'
            }`}
          >
            <Users className="w-4 h-4 text-[#BB8752]" />
            <span>Autores ({authors.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'news'
                ? 'bg-white text-[#1C1614] shadow-xs'
                : 'text-[#5A514B] hover:text-[#1C1614]'
            }`}
          >
            <Newspaper className="w-4 h-4 text-[#BB8752]" />
            <span>Novidades ({news.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'messages'
                ? 'bg-white text-[#1C1614] shadow-xs'
                : 'text-[#5A514B] hover:text-[#1C1614]'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#BB8752]" />
            <span>Mensagens ({messages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('institutional')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'institutional'
                ? 'bg-white text-[#1C1614] shadow-xs'
                : 'text-[#5A514B] hover:text-[#1C1614]'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#BB8752]" />
            <span>Identidade Institucional</span>
          </button>
        </div>

        {/* TAB 1: BOOKS MANAGEMENT */}
        {activeTab === 'books' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-editorial text-2xl font-bold text-[#1C1614]">
                  Catálogo Editorial de Livros
                </h2>
                <p className="text-xs text-[#5A514B]">
                  Cadastre novos títulos, atualize capas, sinopses e links de compra.
                </p>
              </div>

              <button
                onClick={() => handleOpenBookModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Novo Livro</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-[#1C1614]/8 overflow-hidden editorial-shadow">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F4EFE6] text-[#1C1614] uppercase tracking-wider text-[11px] font-semibold border-b border-[#1C1614]/8">
                    <tr>
                      <th className="py-3 px-4">Capa</th>
                      <th className="py-3 px-4">Título & Série</th>
                      <th className="py-3 px-4">Autor</th>
                      <th className="py-3 px-4">Formato / Idioma</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1C1614]/6">
                    {books.map((b) => (
                      <tr key={b.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                        <td className="py-3 px-4">
                          <img
                            src={b.coverUrl}
                            alt={b.title}
                            className="w-10 h-14 object-cover rounded shadow-2xs bg-[#1C1614]"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-editorial text-base font-semibold text-[#1C1614]">
                            {b.title}
                          </p>
                          <p className="text-[10px] text-[#BB8752] uppercase font-medium">
                            {b.series ? `${b.series} (Vol. ${b.seriesOrder || 1})` : b.genre}
                          </p>
                        </td>
                        <td className="py-3 px-4 text-[#5A514B] font-medium">
                          {b.author}
                        </td>
                        <td className="py-3 px-4 text-[#5A514B]">
                          <span>{b.format}</span>
                          <span className="block text-[10px] text-[#8A817A]">{b.language}</span>
                        </td>
                        <td className="py-3 px-4">
                          {b.status === 'available' ? (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                              Disponível
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-semibold">
                              Em Breve
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button
                            onClick={() => handleOpenBookModal(b)}
                            className="p-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#EBE2D4] text-[#1C1614] transition-colors"
                            title="Editar livro"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Tem certeza que deseja excluir "${b.title}"?`)) {
                                deleteBook(b.id);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                            title="Excluir livro"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AUTHORS MANAGEMENT */}
        {activeTab === 'authors' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-editorial text-2xl font-bold text-[#1C1614]">
                  Quadro de Autores
                </h2>
                <p className="text-xs text-[#5A514B]">
                  Cadastre novos autores, edite biografias e fotos de perfil.
                </p>
              </div>

              <button
                onClick={() => handleOpenAuthorModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Novo Autor</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authors.map((a) => (
                <div
                  key={a.id}
                  className="bg-white rounded-2xl p-6 border border-[#1C1614]/8 editorial-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={a.photoUrl}
                      alt={a.name}
                      className="w-16 h-16 rounded-full object-cover p-1 bg-[#BB8752]/30 shadow-sm shrink-0"
                    />
                    <div className="space-y-1">
                      <h3 className="font-editorial text-xl font-bold text-[#1C1614]">
                        {a.name}
                      </h3>
                      <p className="text-xs text-[#BB8752] font-semibold">
                        Assina como: {a.penName}
                      </p>
                      <p className="text-xs text-[#8A817A]">{a.origin}</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#5A514B] italic line-clamp-3">
                    "{a.bio}"
                  </p>

                  <div className="pt-3 border-t border-[#1C1614]/8 flex items-center justify-between">
                    <span className="text-[11px] text-[#8A817A]">
                      Redes: Instagram {a.instagram ? '✓' : '–'}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenAuthorModal(a)}
                        className="p-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#EBE2D4] text-[#1C1614] transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Excluir autor(a) ${a.name}?`)) {
                            deleteAuthor(a.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: NEWS MANAGEMENT */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-editorial text-2xl font-bold text-[#1C1614]">
                  Novidades e Notícias
                </h2>
                <p className="text-xs text-[#5A514B]">
                  Publique novidades, datas de lançamentos e notas para a comunidade leitora.
                </p>
              </div>

              <button
                onClick={() => handleOpenNewsModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Nova Notícia</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-[#1C1614]/8 editorial-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#8A817A]">
                      <span className="px-2 py-0.5 rounded-full bg-[#1C1614] text-white font-medium">
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-editorial text-lg font-bold text-[#1C1614] line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5A514B] line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1C1614]/8 flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleOpenNewsModal(item)}
                      className="p-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#EBE2D4] text-[#1C1614] transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Excluir notícia "${item.title}"?`)) {
                          deleteNews(item.id);
                        }
                      }}
                      className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CONTACT MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#1C1614]">
                Mensagens Recebidas pelo Formulário
              </h2>
              <p className="text-xs text-[#5A514B]">
                Leituras e submissões enviadas pelos leitores e parceiros.
              </p>
            </div>

            {messages.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#1C1614]/8 space-y-2">
                <MessageSquare className="w-10 h-10 text-[#BB8752]/50 mx-auto" />
                <h3 className="font-editorial text-xl font-semibold text-[#1C1614]">
                  Nenhuma mensagem no momento
                </h3>
                <p className="text-xs text-[#5A514B]">
                  As mensagens enviadas pelo formulário de contato do site aparecerão aqui em tempo real.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`bg-white rounded-2xl p-6 border transition-all ${
                      m.status === 'unread'
                        ? 'border-[#BB8752] shadow-md bg-amber-50/20'
                        : 'border-[#1C1614]/8 editorial-shadow'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-editorial text-xl font-bold text-[#1C1614]">
                            {m.name}
                          </h3>
                          {m.status === 'unread' && (
                            <span className="px-2 py-0.5 rounded-full bg-[#BB8752] text-white text-[10px] font-bold uppercase">
                              Nova
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#5A514B]">
                          {m.email} {m.phone && `• Tel: ${m.phone}`}
                        </p>
                      </div>
                      <div className="text-xs text-[#8A817A]">
                        {m.createdAt}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#1C1614]/6 space-y-1 mb-3">
                      <span className="text-[10px] uppercase font-semibold text-[#BB8752] block">
                        Assunto: {m.subject}
                      </span>
                      <p className="text-xs text-[#1C1614] whitespace-pre-line leading-relaxed">
                        {m.message}
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-3 text-xs">
                      {m.status === 'unread' && (
                        <button
                          onClick={() => markMessageRead(m.id)}
                          className="text-[#BB8752] hover:underline font-semibold"
                        >
                          Marcar como Lida
                        </button>
                      )}
                      <button
                        onClick={() => deleteMessage(m.id)}
                        className="text-rose-600 hover:underline font-semibold"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: INSTITUTIONAL SETTINGS */}
        {activeTab === 'institutional' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#1C1614]/8 editorial-shadow space-y-6">
            <div>
              <h2 className="font-editorial text-2xl font-bold text-[#1C1614]">
                Configurações da Editora Salme
              </h2>
              <p className="text-xs text-[#5A514B]">
                Altere os textos oficiais, links de contato e redes sociais em todo o site.
              </p>
            </div>

            {instSaved && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Informações institucionais atualizadas com sucesso!</span>
              </div>
            )}

            <form onSubmit={handleSaveInstitutional} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    Nome da Editora
                  </label>
                  <input
                    type="text"
                    value={instForm.name}
                    onChange={(e) => setInstForm({ ...instForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    Slogan Principal
                  </label>
                  <input
                    type="text"
                    value={instForm.slogan}
                    onChange={(e) => setInstForm({ ...instForm, slogan: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                  Frase de Destaque da Home (Hero)
                </label>
                <input
                  type="text"
                  value={instForm.heroHeadline}
                  onChange={(e) => setInstForm({ ...instForm, heroHeadline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                  Manifesto Editorial
                </label>
                <textarea
                  rows={3}
                  value={instForm.manifesto}
                  onChange={(e) => setInstForm({ ...instForm, manifesto: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    E-mail Institucional
                  </label>
                  <input
                    type="email"
                    value={instForm.contactEmail}
                    onChange={(e) => setInstForm({ ...instForm, contactEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    WhatsApp (somente números com DDD, ex: 5571999990000)
                  </label>
                  <input
                    type="text"
                    value={instForm.whatsapp}
                    onChange={(e) => setInstForm({ ...instForm, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    Instagram Oficial
                  </label>
                  <input
                    type="url"
                    value={instForm.instagram}
                    onChange={(e) => setInstForm({ ...instForm, instagram: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    TikTok
                  </label>
                  <input
                    type="url"
                    value={instForm.tiktok}
                    onChange={(e) => setInstForm({ ...instForm, tiktok: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    Threads
                  </label>
                  <input
                    type="url"
                    value={instForm.threads}
                    onChange={(e) => setInstForm({ ...instForm, threads: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    ID do Vídeo YouTube (Trilha Sonora Oficial)
                  </label>
                  <input
                    type="text"
                    value={instForm.soundtrackYoutubeId}
                    onChange={(e) => setInstForm({ ...instForm, soundtrackYoutubeId: e.target.value })}
                    placeholder="ex: cUtXnzGXRoM"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                    Título da Trilha Sonora
                  </label>
                  <input
                    type="text"
                    value={instForm.soundtrackSubtitle}
                    onChange={(e) => setInstForm({ ...instForm, soundtrackSubtitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar Alterações Institucionais</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL: ADD / EDIT BOOK */}
        {isBookModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#1C1614]/10 shadow-2xl my-6 max-h-[90vh] overflow-y-auto">
              <h3 className="font-editorial text-2xl font-bold text-[#1C1614] mb-4">
                {editingBookId ? 'Editar Livro' : 'Cadastrar Novo Livro'}
              </h3>

              <form onSubmit={handleSaveBook} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Título do Livro *</label>
                  <input
                    type="text"
                    required
                    value={bookForm.title}
                    onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Autor *</label>
                    <input
                      type="text"
                      required
                      value={bookForm.author}
                      onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Série / Coleção</label>
                    <input
                      type="text"
                      value={bookForm.series || ''}
                      onChange={(e) => setBookForm({ ...bookForm, series: e.target.value })}
                      placeholder="ex: Espelhos Quebrados"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Gênero</label>
                    <input
                      type="text"
                      value={bookForm.genre}
                      onChange={(e) => setBookForm({ ...bookForm, genre: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Idioma</label>
                    <select
                      value={bookForm.language}
                      onChange={(e: any) => setBookForm({ ...bookForm, language: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    >
                      <option value="Português">Português</option>
                      <option value="Inglês">Inglês</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Status</label>
                    <select
                      value={bookForm.status}
                      onChange={(e: any) => setBookForm({ ...bookForm, status: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    >
                      <option value="available">Disponível</option>
                      <option value="coming_soon">Em Breve</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">URL da Imagem da Capa *</label>
                  <input
                    type="url"
                    required
                    value={bookForm.coverUrl}
                    onChange={(e) => setBookForm({ ...bookForm, coverUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Link de Compra na Amazon</label>
                    <input
                      type="url"
                      value={bookForm.buyUrl}
                      onChange={(e) => setBookForm({ ...bookForm, buyUrl: e.target.value })}
                      placeholder="https://a.co/d/..."
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Formato</label>
                    <input
                      type="text"
                      value={bookForm.format}
                      onChange={(e) => setBookForm({ ...bookForm, format: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Sinopse Completa *</label>
                  <textarea
                    rows={4}
                    required
                    value={bookForm.synopsis}
                    onChange={(e) => setBookForm({ ...bookForm, synopsis: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={bookForm.isFeatured}
                    onChange={(e) => setBookForm({ ...bookForm, isFeatured: e.target.checked })}
                    className="w-4 h-4 rounded text-[#BB8752]"
                  />
                  <label htmlFor="isFeatured" className="text-xs font-medium text-[#1C1614]">
                    Exibir em Destaque na Página Inicial
                  </label>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-[#1C1614]/10">
                  <button
                    type="button"
                    onClick={() => setIsBookModalOpen(false)}
                    className="px-4 py-2 rounded-full bg-black/5 text-[#5A514B]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-white font-semibold"
                  >
                    Salvar Publicação
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD / EDIT AUTHOR */}
        {isAuthorModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#1C1614]/10 shadow-2xl my-6">
              <h3 className="font-editorial text-2xl font-bold text-[#1C1614] mb-4">
                {editingAuthorId ? 'Editar Autor(a)' : 'Cadastrar Novo Autor(a)'}
              </h3>

              <form onSubmit={handleSaveAuthor} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      value={authorForm.name}
                      onChange={(e) => setAuthorForm({ ...authorForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Nome Artístico / Assinatura</label>
                    <input
                      type="text"
                      value={authorForm.penName || ''}
                      onChange={(e) => setAuthorForm({ ...authorForm, penName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">URL da Fotografia / Avatar *</label>
                  <input
                    type="url"
                    required
                    value={authorForm.photoUrl}
                    onChange={(e) => setAuthorForm({ ...authorForm, photoUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Biografia Curta (Citação) *</label>
                  <textarea
                    rows={2}
                    required
                    value={authorForm.bio}
                    onChange={(e) => setAuthorForm({ ...authorForm, bio: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Biografia Expandida</label>
                  <textarea
                    rows={3}
                    value={authorForm.extendedBio || ''}
                    onChange={(e) => setAuthorForm({ ...authorForm, extendedBio: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Origem / Localização</label>
                    <input
                      type="text"
                      value={authorForm.origin}
                      onChange={(e) => setAuthorForm({ ...authorForm, origin: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Instagram</label>
                    <input
                      type="url"
                      value={authorForm.instagram || ''}
                      onChange={(e) => setAuthorForm({ ...authorForm, instagram: e.target.value })}
                      placeholder="https://instagram.com/..."
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-[#1C1614]/10">
                  <button
                    type="button"
                    onClick={() => setIsAuthorModalOpen(false)}
                    className="px-4 py-2 rounded-full bg-black/5 text-[#5A514B]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-white font-semibold"
                  >
                    Salvar Autor
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD / EDIT NEWS */}
        {isNewsModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#1C1614]/10 shadow-2xl my-6">
              <h3 className="font-editorial text-2xl font-bold text-[#1C1614] mb-4">
                {editingNewsId ? 'Editar Notícia' : 'Nova Notícia / Lançamento'}
              </h3>

              <form onSubmit={handleSaveNews} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Título *</label>
                  <input
                    type="text"
                    required
                    value={newsForm.title}
                    onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Categoria</label>
                    <select
                      value={newsForm.category}
                      onChange={(e: any) => setNewsForm({ ...newsForm, category: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    >
                      <option value="Lançamento">Lançamento</option>
                      <option value="Notícia">Notícia</option>
                      <option value="Evento">Evento</option>
                      <option value="Comunidade">Comunidade</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold uppercase text-[#1C1614] mb-1">Data</label>
                    <input
                      type="text"
                      value={newsForm.date}
                      onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Resumo Curto *</label>
                  <input
                    type="text"
                    required
                    value={newsForm.summary}
                    onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Conteúdo Completo *</label>
                  <textarea
                    rows={4}
                    required
                    value={newsForm.content}
                    onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">URL da Imagem Ilustrativa</label>
                  <input
                    type="url"
                    value={newsForm.imageUrl || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, imageUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[#1C1614] mb-1">Link Externo (Opcional)</label>
                  <input
                    type="url"
                    value={newsForm.externalLink || ''}
                    onChange={(e) => setNewsForm({ ...newsForm, externalLink: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#1C1614]/12 text-sm"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-[#1C1614]/10">
                  <button
                    type="button"
                    onClick={() => setIsNewsModalOpen(false)}
                    className="px-4 py-2 rounded-full bg-black/5 text-[#5A514B]"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-white font-semibold"
                  >
                    Salvar Notícia
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
