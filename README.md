# Editora Salme — Novo Site Institucional & Plataforma Editorial

Site institucional de alto padrão, moderno, responsivo e completo desenvolvido para a **Editora Salme**, substituindo a página simples anterior no Canva por uma experiência editorial sofisticada.

---

## 🏛️ Identidade Visual & Conceito Editorial

- **Paleta de Cores**:
  - *Fundo Principal*: Off-white editorial (`#FAF7F2`) e papel envelhecido suave (`#F4EFE6`).
  - *Tipografia e Textos*: Grafite e marrom espresso escuro (`#1C1614`).
  - *Destaque e Acentos*: Dourado vintage e caramelo acobreado (`#BB8752` e `#DFC096`).
  - *Bordas e Sombreamento*: Traços sutis de 1px com sombra de lombada de livro e acabamento impresso.
- **Tipografia**:
  - Títulos: **Cormorant Garamond** (Serifada elegante, fluida e nobre) e **Cinzel** (Display clássico).
  - Textos de Apoio e Navegação: **Plus Jakarta Sans** (Sans-serif moderna, legível e limpa).

---

## 📚 Estrutura e Funcionalidades

1. **Página Inicial (Home)**:
   - **Hero Section**: Apresentação editorial com slogan *"Histórias para quem ainda acredita no amor"*, chamada de ação para o catálogo e contato, vitrine de destaque para *"A Bela e os Espinhos"*.
   - **Livros em Destaque**: Cards elegantes com efeito 3D de lombada de livro, status de leitura e links diretos para a Amazon / Kindle Unlimited.
   - **Sobre a Editora**: Apresentação institucional, manifesto autoral, missão, visão e pilares.
   - **Seção Autores**: Perfil autoral com biografia real de **Nathalia Almeida** (*Nath Almeida*), foto oficial, catálogo de obras e links para redes sociais.
   - **Trilha Sonora Exclusiva**: Player interativo integrado com a trilha sonora oficial de *A Bela e os Espinhos* no YouTube.
   - **Novidades & Lançamentos**: Notícias sobre a duologia *Espelhos Quebrados*, edições internacionais *Broken Mirrors* e eventos.
   - **Contato & Conversão**: Botão flutuante de WhatsApp, formulário de contato funcional com validação e mensagens de confirmação.

2. **Catálogo Editorial Exclusivo (`/catalogo`)**:
   - Grade completa de publicações.
   - Busca em tempo real por título, autor, série ou palavras-chave.
   - Filtros por categoria: *Todos*, *Duologia Espelhos Quebrados*, *Edições em Inglês (Broken Mirrors)* e *Livros Independentes*.
   - Ordenação dinâmica por *Destaques*, *Mais Recentes* e *Ordem Alfabética*.

3. **Página / Modal Individual dos Livros**:
   - Capa em alta definição com profundidade e perspectiva.
   - Sinopse completa oficial.
   - Ficha técnica: Formato, Idioma, Ano, Páginas estimadas, Código ASIN Amazon, Selo.
   - Botão direto de compra na Amazon ou botão de lista de espera para lançamentos.
   - Seção de livros relacionados por série ou gênero.
   - Botão nativo de compartilhamento.

4. **Página de Autores (`/autores`) & Modal de Perfil**:
   - Biografia completa e citação autoral verbatim.
   - Listagem de todas as obras publicadas pelo autor na editora.
   - Redes oficiais (Instagram `@n.awriter`, TikTok `@n.alwriter`, Threads `@n.awriter`).

5. **Página Sobre a Editora (`/sobre`)**:
   - História de criação, linha editorial, compromisso com a literatura independente e representatividade afetiva.

6. **Página de Novidades (`/novidades`)**:
   - Mural literário com comunicados oficiais e reprodução da trilha sonora.

7. **Painel Administrativo da Equipe (CMS Integrado - `/admin`)**:
   - Acesso protegido por senha institucional (**`salme2025`** ou **`admin`**).
   - **Gestão de Livros**: Cadastrar novos livros, alterar capas, editar títulos, sinopses, status (*Disponível* / *Em Breve*) e links da Amazon.
   - **Gestão de Autores**: Cadastrar e editar biografias, fotos e redes sociais.
   - **Gestão de Novidades**: Publicar notícias e comunicados para os leitores.
   - **Caixa de Entrada**: Visualizar todas as mensagens enviadas através do formulário de contato do site com opção de marcar como lida e excluir.
   - **Configurações Institucionais**: Alterar slogan, manifesto, WhatsApp, Instagram e ID da trilha sonora em tempo real.
   - **Persistência de Dados**: Salvo em `localStorage` e pronto para sincronização com Supabase.
   - Botão de restauração rápida para dados originais.

---

## 🚀 Como Executar o Projeto

No terminal:
```bash
cd "C:\Users\NITRO5\.gemini\antigravity\scratch\editora-salme"
npm run dev
```

Ou execute com um clique duplo o arquivo executável:
`C:\Users\NITRO5\.gemini\antigravity\scratch\iniciar-editora-salme.bat`

O site estará disponível no seu navegador em:
**`http://localhost:5173`**

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite 8** (Build ultra-rápido)
- **Tailwind CSS v4**
- **Lucide Icons**
- **Supabase JS**
- Fontes do Google: *Cormorant Garamond*, *Cinzel* e *Plus Jakarta Sans*
