import React from 'react';
import { Mail, HelpCircle } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { useEditorial } from '../context/EditorialContext';

export const ContactPage: React.FC = () => {
  const { institutional } = useEditorial();

  const faqs = [
    {
      q: 'Onde posso comprar os livros da Editora Salme?',
      a: 'Todos os nossos títulos estão disponíveis em formato digital (eBook) na Amazon e integrados ao programa Kindle Unlimited para assinantes, com leitura em qualquer dispositivo.'
    },
    {
      q: 'A Editora Salme aceita envio de originais literários?',
      a: 'Sim! Aceitamos submissões de originais com foco em romances, releituras de clássicos e narrativas autorais. Você pode enviar sua proposta e sinopse detalhada através do nosso formulário ou diretamente para o nosso e-mail de contato.'
    },
    {
      q: 'Haverá versões físicas dos livros?',
      a: 'Estamos preparando tiragens físicas especiais para o catálogo. Acompanhe nossas redes sociais e novidades para ser avisado sobre campanhas de pré-venda e eventos de autógrafos.'
    },
    {
      q: 'Como posso propor parcerias de divulgação ou clubes do livro?',
      a: 'Ficamos muito felizes com o interesse! Selecione o assunto "Parcerias e Divulgação" em nosso formulário ou envie uma mensagem no Instagram para receber materiais de divulgação e kits digitais.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
            <Mail className="w-3.5 h-3.5 text-[#BB8752]" />
            <span>Fale Conosco</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1C1614]">
            Canais de Comunicação
          </h1>

          <p className="text-base text-[#5A514B] font-light leading-relaxed">
            Nossa equipe e nossos autores estão prontos para dialogar com leitoras, livreiros, parceiros e entusiastas da boa literatura.
          </p>
        </div>

        {/* Contact Form & Direct Contacts */}
        <ContactSection />

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#BB8752] font-semibold">
              <HelpCircle className="w-4 h-4" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h3 className="font-editorial text-3xl font-semibold text-[#1C1614]">
              Perguntas Frequentes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#1C1614]/8 editorial-shadow space-y-2"
              >
                <h4 className="font-editorial text-lg font-bold text-[#1C1614]">
                  {faq.q}
                </h4>
                <p className="text-xs text-[#5A514B] leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
