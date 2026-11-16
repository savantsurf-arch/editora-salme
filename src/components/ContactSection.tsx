import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { useEditorial } from '../context/EditorialContext';

export const ContactSection: React.FC = () => {
  const { institutional, sendMessage } = useEditorial();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dúvidas sobre o Catálogo',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    setTimeout(() => {
      sendMessage(formData);
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Dúvidas sobre o Catálogo',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre as publicações da Editora Salme.'
  );

  return (
    <section className="py-24 bg-[#F4EFE6]/70 border-t border-[#1C1614]/8 relative overflow-hidden" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct channels and institutional invitation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#BB8752]" />
              <span>Canais de Atendimento</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1614] leading-tight">
              Vamos conversar sobre literatura?
            </h2>

            <p className="text-sm sm:text-base text-[#5A514B] leading-relaxed font-light">
              Seja para tirar dúvidas sobre nossos livros, parcerias de divulgação, clubes de leitura ou envio de originais literários, nossa equipe está de braços abertos.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${institutional.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all shadow-2xs group"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1C1614] uppercase tracking-wider">
                    Conversar via WhatsApp
                  </h4>
                  <p className="text-xs text-[#5A514B]">
                    Atendimento rápido e direto para leitores e parceiros
                  </p>
                </div>
              </a>

              {/* Instagram direct */}
              <a
                href={institutional.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#1C1614]/8 hover:border-[#BB8752]/40 transition-all shadow-2xs group"
              >
                <div className="w-11 h-11 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1C1614] uppercase tracking-wider">
                    Instagram Oficial
                  </h4>
                  <p className="text-xs text-[#5A514B]">
                    Acompanhe bastidores, lançamentos e interaja diretamente
                  </p>
                </div>
              </a>

              {/* Institutional Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#1C1614]/8 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-[#F4EFE6] text-[#BB8752] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#1C1614] uppercase tracking-wider">
                    E-mail Institucional
                  </h4>
                  <p className="text-xs text-[#5A514B]">
                    {institutional.contactEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#1C1614]/8 editorial-shadow">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#BB8752] font-semibold block mb-1">
                  Mensagem Direta
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#1C1614]">
                  Envie sua mensagem para a editora
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-2xl font-semibold text-emerald-900">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Agradecemos o seu contato com a Editora Salme. Nossa equipe editorial responderá o mais breve possível no seu e-mail informado.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-emerald-800 underline hover:no-underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nome completo"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614] focus:outline-none focus:border-[#BB8752] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="exemplo@email.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614] focus:outline-none focus:border-[#BB8752] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(DDD) 99999-9999"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614] focus:outline-none focus:border-[#BB8752] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                        Assunto
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614] focus:outline-none focus:border-[#BB8752] focus:bg-white transition-all"
                      >
                        <option value="Dúvidas sobre o Catálogo">Dúvidas sobre o Catálogo</option>
                        <option value="Envio de Originais / Avaliação">Envio de Originais / Avaliação</option>
                        <option value="Parcerias e Divulgação">Parcerias e Divulgação</option>
                        <option value="Clubes de Leitura">Clubes de Leitura</option>
                        <option value="Outros Assuntos">Outros Assuntos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1614] mb-1.5">
                      Sua Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva sua mensagem com detalhes..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#1C1614]/12 text-sm text-[#1C1614] focus:outline-none focus:border-[#BB8752] focus:bg-white transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#1C1614] hover:bg-[#BB8752] text-[#FAF7F2] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm active:scale-99 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <span>Enviando mensagem...</span>
                      ) : (
                        <>
                          <span>Enviar Mensagem</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
