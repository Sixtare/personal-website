export interface ProjectFeature {
  title: string;
  description: string;
  icon: string; // Material Symbol name
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  longDescription: string;
  role: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  features: ProjectFeature[];
  heroType: "steam-stats" | "steam-family-bot" | "smw-assembly-hacks" | "chibi-chops";
  imageUrl?: string;
}

export const projects: Record<string, ProjectData> = {
  "steam-stats": {
    slug: "steam-stats",
    title: "Steam Stats",
    subtitle: "Steam Profile Analytics",
    tagline: "Uma plataforma de análise e comparação de perfis da Steam, gerando relatórios de valor e afinidade de jogos.",
    longDescription: "Steam Stats é uma aplicação full-stack que transforma dados do seu perfil da Steam em visualizações interativas e análises detalhadas. Descubra estatísticas sobre sua biblioteca de jogos, horas jogadas, valor estimado da conta, distribuição de gêneros e muito mais. Conta com um avançado comparador que confronta dois perfis de jogadores, calculando similaridade de cosseno com base nos gostos e horas jogadas.",
    role: "Full Stack Developer",
    stack: ["Java 25", "Spring Boot 4.0.6", "PostgreSQL", "Next.js 16.2.6", "TypeScript 5", "Tailwind CSS 4", "Docker", "Steam Web API", "SteamSpy API", "Kaggle Dataset"],
    githubUrl: "https://github.com/Sixtare/steam-stats",
    demoUrl: "https://steamstats.sestare.dev/",
    heroType: "steam-stats",
    imageUrl: "/steamstats.png",
    features: [
      {
        title: "Dashboard de Perfil",
        description: "Exibe avatar, nível Steam, idade da conta, total de horas jogadas e valor estimado da biblioteca de jogos com base na Steam Store.",
        icon: "dashboard"
      },
      {
        title: "Comparação Avançada",
        description: "Compare dois perfis lado a lado para encontrar jogos em comum, horas jogadas equivalentes e a porcentagem de similaridade de cosseno.",
        icon: "compare_arrows"
      },
      {
        title: "Filtros e Scroll Infinito",
        description: "Navegação fluida na biblioteca com scroll infinito sob demanda, imagens reais dos títulos e busca dinâmica instantânea.",
        icon: "filter_list"
      }
    ]
  },
  "steam-family-bot": {
    slug: "steam-family-bot",
    title: "Steam Family Bot",
    subtitle: "Steam Helper Discord Bot",
    tagline: "Bot para o Discord que monitora o catálogo compartilhado e as aquisições de jogos no estilo Steam Family.",
    longDescription: "Steam Family Bot é um bot de Discord que gerencia grupos de compartilhamento de jogos no estilo 'Steam Family'. Ele permite criar uma família virtual com até 6 membros, adicionar os respectivos perfis Steam (por URL completa ou vanity URL) e receber notificações automáticas em tempo real no canal do servidor sempre que alguém comprar um jogo novo.",
    role: "Full Stack Developer & Architect",
    stack: ["Java 21", "JDA 6.4.1", "SQLite", "HikariCP", "JDBI", "Steam Web API", "Maven", "Discord OAuth2"],
    githubUrl: "https://github.com/Sixtare/steam-family-bot",
    heroType: "steam-family-bot",
    imageUrl: "/familybot.png",
    features: [
      {
        title: "Notificações em Tempo Real",
        description: "O bot realiza varreduras automáticas periódicas e envia alertas imediatos sempre que novos jogos forem detectados nas contas.",
        icon: "notifications_active"
      },
      {
        title: "Painel de Comandos Interativos",
        description: "Controle as configurações do bot no servidor e adicione perfis de maneira ágil usando o comando slash interativo /family.",
        icon: "terminal"
      },
      {
        title: "Destino Personalizável",
        description: "Use o comando /setupchannel para definir de forma flexível se as notificações devem ser postadas no canal ou enviadas por DM.",
        icon: "settings"
      }
    ]
  },
  "smw-assembly-hacks": {
    slug: "smw-assembly-hacks",
    title: "Smw Assembly Hacks",
    subtitle: "65c816 Assembly Hacks for SMW",
    tagline: "Low-level SNES 65c816 assembly hacks, gameplay routines, and patches for Super Mario World.",
    longDescription: "Este repositório serve como uma biblioteca organizada de modificações e patches de baixo nível para a ROM americana de Super Mario World (SNES). Escrito em assembly 65c816 nativo, o código permite alterar dinamicamente mecânicas de física do Mario, comportamento de inimigos (sprites), blocos customizados e otimizações de performance.",
    role: "ROM Hacker & Retro Developer",
    stack: ["65c816 Assembly", "Asar Assembler", "SNES Architecture", "UberASM", "Lunar Magic", "Snes9x Debugger"],
    githubUrl: "https://github.com/Sixtare/smw-65c816-asm",
    heroType: "smw-assembly-hacks",
    imageUrl: "/smwhacks.png",
    features: [
      {
        title: "Mecânicas Inéditas",
        description: "Adicione mecânicas e lógicas customizadas ao motor original de Super Mario World que seriam impossíveis em editores convencionais.",
        icon: "extension"
      },
      {
        title: "Compilação Prática",
        description: "Patches organizados de forma limpa e modular para aplicação direta na ROM utilizando o assembler Asar ou UberASM.",
        icon: "build"
      },
      {
        title: "Depuração de Sistema",
        description: "Roteiros depurados e validados instrução por instrução para garantir compatibilidade real com o console SNES original.",
        icon: "bug_report"
      }
    ]
  },
  "chibi-chops": {
    slug: "chibi-chops",
    title: "Chibi Chops",
    subtitle: "Video Splicing and Converter",
    tagline: "Lightweight video splicing and conversion desktop utility powered by FFmpeg and VLC.",
    longDescription: "ChibiChops é um utilitário desktop projetado para simplificar e acelerar tarefas do dia a dia, como cortar trechos de vídeos ou converter arquivos de formato. Ele atua como um wrapper leve e veloz para os executáveis do FFmpeg/FFprobe, eliminando a lentidão e complexidade de editores de vídeo tradicionais.",
    role: "Creator & Developer",
    stack: ["Java 17+", "Maven", "FFmpeg Wrapper", "FFprobe", "vlcj (VLC 3.x)", "JavaFX", "Multi-platform"],
    githubUrl: "https://github.com/Sixtare/ChibiChops",
    heroType: "chibi-chops",
    imageUrl: "/chibichops.png",
    features: [
      {
        title: "Cortes sem Perda (Trim)",
        description: "Extraia cenas e segmentos específicos de vídeos de alta definição instantaneamente sem re-renderização, preservando a qualidade.",
        icon: "content_cut"
      },
      {
        title: "Conversão de Formatos",
        description: "Mecanismo flexível para alternar entre formatos comuns de vídeo e áudio utilizando predefinições otimizadas do FFmpeg.",
        icon: "transform"
      },
      {
        title: "Visualização Integrada",
        description: "Interface intuitiva com player integrado rodando em VLC (vlcj) para marcar com precisão cirúrgica os pontos de corte.",
        icon: "movie"
      }
    ]
  }
};
