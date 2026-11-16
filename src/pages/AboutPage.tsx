import React from 'react';
import { BookOpen, Feather, Heart, Sparkles, Target, Compass, Award, ShieldCheck, Users } from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { institutional } = useEditorial();

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C6033] text-xs font-semibold uppercase tracking-widest border border-[#BB8752]/20">
            <Feather className="w-3.5 h-3.5 text-[#BB8752]" />
            <span>Identidade Institucional</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1C1614]">
            Sobre a Editora Salme
          </h1>

          <p className="font-editorial text-xl text-[#BB8752] italic">
            "{institutional.slogan}"
          </p>
        </div>

        {/* Hero Manifesto Card */}
        <div className="bg-[#1C1614] text-[#FAF7F2] rounded-3xl p-8 sm:p-14 mb-16 relative overflow-hidden shadow-2xl border border-[#BB8752]/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BB8752]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="font-display uppercase tracking-[0.25em] text-xs text-[#DFC096] font-semibold block">
              Nosso Manifesto
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug text-[#FAF7F2]">
              "Acreditamos que a literatura existe para acolher as cicatrizes do mundo."
            </h2>

            <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              {institutional.manifesto}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('catalog')}
                className="px-6 py-3 rounded-full bg-[#BB8752] hover:bg-[#A87442] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                Conheça Nossas Obras
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Entre em Contato
              </button>
            </div>
          </div>
        </div>

        {/* História e Atuação Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="font-editorial text-3xl font-semibold text-[#1C1614]">
              Nossa História
            </h3>
            <p className="text-base text-[#5A514B] leading-relaxed font-light">
              {institutional.history}
            </p>
            <p className="text-base text-[#5A514B] leading-relaxed font-light">
              Desde a publicação dos primeiros capítulos das histórias de Nathalia Almeida no universo digital, percebemos que havia uma sede profunda dos leitores por narrativas que tratassem o amor com honestidade emocional, sem rodeios superficiais e com respeito às muitas facetas da representatividade.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h3 className="font-editorial text-3xl font-semibold text-[#1C1614]">
              Linha Editorial
            </h3>
            <p className="text-base text-[#5A514B] leading-relaxed font-light">
              Nossa curadoria privilegia obras com personagens de forte densidade psicológica, releituras que trazem novas óticas para mitos e contos conhecidos, romances LGBTQIA+ sensíveis e histórias contemporâneas que provocam reflexão e empatia.
            </p>
            <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#1C1614]/8 space-y-2">
              <h4 className="font-display text-xs uppercase tracking-wider text-[#BB8752] font-semibold">
                Compromisso com o Autor Independente
              </h4>
              <p className="text-xs text-[#5A514B] leading-relaxed">
                Cada publicação da Salme respeita integralmente a visão criativa do autor, aliando primor estético em capas e diagramação com distribuição global em plataformas de leitura.
              </p>
            </div>
          </div>
        </div>

        {/* Pilares: Missão, Visão & Valores */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-[#1C1614]">
              Pilares Fundamentais
            </h3>
            <p className="text-sm text-[#5A514B]">
              Os valores éticos e estéticos que norteiam cada decisão editorial da Salme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-[#1C1614]/8 editorial-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] text-[#BB8752] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-display text-sm uppercase tracking-wider text-[#1C1614] font-semibold">
                Nossa Missão
              </h4>
              <p className="text-xs text-[#5A514B] leading-relaxed font-light">
                {institutional.mission}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#1C1614]/8 editorial-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] text-[#BB8752] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-display text-sm uppercase tracking-wider text-[#1C1614] font-semibold">
                Nossa Visão
              </h4>
              <p className="text-xs text-[#5A514B] leading-relaxed font-light">
                {institutional.vision}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#1C1614]/8 editorial-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] text-[#BB8752] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display text-sm uppercase tracking-wider text-[#1C1614] font-semibold">
                Nossos Valores
              </h4>
              <ul className="space-y-2 text-xs text-[#5A514B]">
                {institutional.values.map((val, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BB8752]" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
