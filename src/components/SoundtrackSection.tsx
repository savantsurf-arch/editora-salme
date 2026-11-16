import React from 'react';
import { Music, Play, Sparkles, ExternalLink } from 'lucide-react';
import { useEditorial } from '../context/EditorialContext';

export const SoundtrackSection: React.FC = () => {
  const { institutional } = useEditorial();

  return (
    <section className="py-20 bg-[#1C1614] text-[#FAF7F2] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BB8752]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BB8752]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A221F] border border-[#BB8752]/30 text-[#DFC096] text-xs font-medium uppercase tracking-widest">
              <Music className="w-3.5 h-3.5 text-[#BB8752]" />
              <span>Experiência Literária Multimídia</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FAF7F2] leading-tight">
              A Trilha Sonora que inspirou a escrita
            </h2>

            <p className="font-editorial text-lg text-[#DFC096] italic">
              {institutional.soundtrackSubtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed font-light">
              Mergulhe no universo de "A Bela e os Espinhos" através da seleção musical que embalou a criação dos personagens e das cenas mais intensas da duologia. Aperte o play e viva a atmosfera completa enquanto lê cada capítulo.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={`https://www.youtube.com/watch?v=${institutional.soundtrackYoutubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#BB8752] hover:bg-[#A87442] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Ouvir no YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs text-[#FAF7F2]/50 italic">
                Acesso gratuito e sem anúncios intrusivos
              </span>
            </div>
          </div>

          {/* Right: Embedded YouTube Player with Editorial Frame */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-2xl rounded-2xl p-2 sm:p-3 bg-gradient-to-tr from-[#BB8752]/40 via-[#2A221F] to-[#BB8752]/20 border border-[#BB8752]/30 shadow-2xl">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${institutional.soundtrackYoutubeId}?rel=0&modestbranding=1`}
                  title={institutional.soundtrackTitle}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
