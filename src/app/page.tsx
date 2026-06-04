import Image from "next/image";
import Analytics from "./components/Analytics/Analytics";
import "./styles/Home.scss";

const highlightStats = [
  {
    value: "Full cycle",
    label: "web, desktop, APIs e entrega até produção",
  },
  {
    value: "SQL + dados",
    label: "grandes volumes de dados, queries críticas e resposta em tempo real",
  },
  {
    value: "React -> Flutter",
    label: "front-end moderno, back-end robusto e mobile commerce",
  },
] as const;

const strengths = [
  {
    title: "Software confiável em produção",
    description:
      "Experiência em sistemas de alta disponibilidade, com foco em estabilidade, evolução contínua e resposta rápida a incidentes.",
  },
  {
    title: "Integração ponta a ponta",
    description:
      "Desenvolvimento e consumo de APIs REST conectando sistemas corporativos, industriais e fluxos operacionais.",
  },
  {
    title: "Performance orientada a dados",
    description:
      "Otimização de queries SQL e processamento em tempo real com foco em confiabilidade, escala e resposta rápida.",
  },
  {
    title: "Ownership em produção",
    description:
      "Implementação, manutenção, suporte de plantão e restauração de incidentes críticos em ambientes 24/7.",
  },
] as const;

const caseStudies = [
  {
    title: "CSN",
    status: "Atual",
    role: "Desenvolvedor de Software • desde Mar/2023",
    summary:
      "Desenvolvimento full cycle e sustentação de sistemas web e desktop de missão crítica, em ambiente de alta disponibilidade. Progressão de estágio a desenvolvedor.",
    focus:
      "Alta disponibilidade, integração entre sistemas e processamento de dados em tempo real.",
    bullets: [
      "Aplicações em C# / .NET para fluxos de negócio críticos em produção.",
      "APIs REST para integração entre sistemas corporativos.",
      "Otimização de queries SQL Server em bases com milhões de registros e criação de base histórica.",
      "Suporte on-call, diagnóstico e restauração rápida de incidentes críticos.",
    ],
    stack: ["C#", ".NET", "Windows Forms", "SQL Server", "REST APIs", "IIS", "Windows Server"],
    linkLabel: "LinkedIn",
    linkHref: "https://www.linkedin.com/in/caiosilvamap/",
  },
  {
    title: "InfoAgro",
    status: "Atual",
    role: "Pesagro-Rio • Desenvolvedor de Software • desde Ago/2025",
    summary:
      "Portal web para a PESAGRO-RIO que centraliza dados e recursos do agronegócio do Sul Fluminense para produtores e pesquisadores.",
    focus:
      "Entrega full stack em produção, com dashboards de dados, autenticação e fluxos de cadastro orientados ao usuário.",
    bullets: [
      "Frontend em Next.js / React / TypeScript com páginas públicas e dashboards de visualização de dados agrícolas.",
      "Autenticação, gestão de usuários e cadastro multi-step de produtores com validações.",
      "Integração com API em FastAPI e banco PostgreSQL.",
      "Estruturação técnica do projeto, definição de padrões e versionamento com Git.",
    ],
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Dashboards"],
    linkLabel: "infoagro.org",
    linkHref: "https://infoagro.org/",
  },
  {
    title: "PetJa",
    status: "Em lançamento",
    role: "Projeto próprio / Mobile & Full Stack",
    summary:
      "Aplicativo mobile de e-commerce para petshop, iniciado em parceria familiar, com operação completa de catálogo, pedidos e administração.",
    focus:
      "Produto próprio com stack mobile + serverless e painel administrativo; parceria firmada com petshop físico para venda local via app.",
    bullets: [
      "App mobile em Flutter.",
      "Back-end serverless com Firebase Authentication, Firestore e Storage.",
      "Painel administrativo web com FireCMS para produtos, pedidos e operação.",
      "Publicação já autorizada para Google Play e App Store.",
    ],
    stack: ["Flutter", "Firebase", "Firestore", "Storage", "FireCMS", "Mobile Commerce"],
    linkLabel: "petja.app",
    linkHref: "https://petja.app/",
  },
] as const;

const timeline = [
  {
    period: "Mar/2023 - hoje",
    title: "Companhia Siderúrgica Nacional",
    description:
      "De estágio a desenvolvedor: full cycle e sustentação de sistemas críticos de alta disponibilidade e dados em tempo real.",
  },
  {
    period: "Ago/2025 - hoje",
    title: "Pesagro-Rio • InfoAgro",
    description:
      "Desenvolvedor full stack do portal em produção com Next.js, FastAPI e PostgreSQL para o agronegócio do Sul Fluminense.",
  },
  {
    period: "Produto próprio",
    title: "PetJa",
    description:
      "E-commerce mobile para petshop com Flutter, Firebase e painel administrativo web.",
  },
  {
    period: "2020 - 2025",
    title: "IFRJ • Licenciatura em Computação",
    description:
      "Formação em computação no Campus Pinheiral, com base prática para desenvolvimento, arquitetura de software e colaboração em equipe.",
  },
] as const;

const profileFacts = [
  { label: "Base", value: "Volta Redonda - RJ, Brasil" },
  { label: "Formação", value: "Licenciatura em Computação • IFRJ Pinheiral" },
  { label: "Idiomas", value: "PT-BR nativo • Inglês básico" },
  { label: "Modo de trabalho", value: "Scrum, Kanban, colaboração multidisciplinar" },
] as const;

const stackGroups = [
  {
    title: "Linguagens",
    items: ["C#", "TypeScript", "JavaScript", "Python", "HTML5"],
  },
  {
    title: "Front-end",
    items: ["React", "Next.js", "TailwindCSS", "SCSS"],
  },
  {
    title: "Back-end",
    items: [".NET", "ASP.NET Core", "Node.js", "FastAPI", "REST APIs", "JWT/OAuth", "LINQ"],
  },
  {
    title: "Dados & Mobile",
    items: ["SQL Server", "PostgreSQL", "Oracle", "Firebase Firestore", "Flutter"],
  },
  {
    title: "Infra & Entrega",
    items: ["IIS", "Windows Server", "Git", "Azure DevOps", "Docker", "Postman"],
  },
  {
    title: "Arquitetura & Práticas",
    items: ["Clean Code", "SOLID", "Clean Architecture", "DDD", "CI/CD"],
  },
] as const;

const contactCards = [
  {
    title: "Email",
    value: "caiosilvamap@gmail.com",
    href: "mailto:caiosilvamap@gmail.com",
    icon: "/email-icon.svg",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/caiosilvamap",
    href: "https://www.linkedin.com/in/caiosilvamap/",
    icon: "/linkedin-icon.svg",
  },
  {
    title: "GitHub",
    value: "github.com/caiosilvamap",
    href: "https://github.com/caiosilvamap",
    icon: "/github-icon.svg",
  },
  {
    title: "WhatsApp",
    value: "+55 24 99833-1776",
    href: "https://wa.me/5524998331776",
    icon: "/whatsapp-icon.svg",
  },
] as const;

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">CS</span>
          <span className="brand-copy">
            <strong>Caio Silva</strong>
            <span>Full Stack Developer</span>
          </span>
        </a>

        <nav className="topbar-nav" aria-label="Seções principais">
          <a href="#projects">Projetos</a>
          <a href="#experience">Trajetória</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contato</a>
        </nav>

        <a className="topbar-link" href="mailto:caiosilvamap@gmail.com">
          Vamos conversar
        </a>
      </header>

      <section className="hero section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK DEVELOPER • .NET • NEXT.JS • FLUTTER</p>
          <div className="hero-status">
            <span className="status-dot" />
            Aberto a novas oportunidades em produtos de tecnologia
          </div>

          <h1>
            Software confiável e <em>produtos digitais</em> que escalam, da web ao mobile.
          </h1>

          <p className="hero-summary">
            Sou Caio Silva Marques Porto, desenvolvedor full stack com experiência em sistemas de alta
            disponibilidade, integração via APIs REST, grandes volumes de dados e produtos digitais
            ponta a ponta. Busco aplicar essa base em uma empresa com tecnologia no centro do negócio,
            com foco em performance, confiabilidade e produto.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Ver projetos
            </a>
            <a className="button button-secondary" href="mailto:caiosilvamap@gmail.com">
              Falar comigo
            </a>
          </div>

          <div className="hero-intro-card">
            <p>
              Desenvolvimento full cycle de aplicações web, desktop e mobile, análise técnica,
              integração entre sistemas, otimização de performance e suporte em produção.
            </p>
          </div>

          <div className="stats-grid">
            {highlightStats.map((item) => (
              <article className="stat-card" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-card">
            <div className="portrait-frame">
              <Image
                src="/me.jpeg"
                alt="Caio Silva Marques Porto"
                width={3024}
                height={3504}
                sizes="(max-width: 720px) 82vw, (max-width: 980px) 72vw, 38vw"
                priority
                className="portrait-image"
              />
            </div>
          </div>

          <div className="profile-facts">
            {profileFacts.map((fact) => (
              <article className="fact-card" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="expertise">
        <SectionHeading
          eyebrow="FOCO DE ATUAÇÃO"
          title="Áreas em que tenho atuado com mais consistência"
          description="Minha experiência me levou a contextos exigentes de engenharia, e é justamente daí que vem a base que levo para produtos digitais: estabilidade, integração entre sistemas, leitura rápida de contexto e responsabilidade técnica."
        />

        <div className="strengths-grid">
          {strengths.map((strength) => (
            <article className="panel-card strength-card" key={strength.title}>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projetos e contextos que representam meu perfil"
          description="Alguns trabalhos e projetos que ajudam a mostrar meu contexto de atuação, as tecnologias utilizadas e o tipo de responsabilidade envolvida em cada frente."
        />

        <div className="projects-grid">
          {caseStudies.map((project) => (
            <article className="panel-card project-card" key={project.title}>
              <div className="project-header">
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.role}</p>
              </div>

              <p className="project-summary">{project.summary}</p>
              <p className="project-focus">{project.focus}</p>

              <ul className="project-points">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="pill-row">
                {project.stack.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.linkHref}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeading
          eyebrow="TRAJETÓRIA"
          title="Experiência recente, formação e forma de trabalho"
          description="Minha base é full stack, e o diferencial hoje está na combinação entre confiabilidade, atenção a dados, integração entre sistemas e responsabilidade real com produção."
        />

        <div className="experience-layout">
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="experience-side">
            <article className="panel-card side-card">
              <span className="mini-label">Resumo profissional</span>
              <p>
                Desenvolvedor de Software Full Stack com atuação em aplicações web, desktop e mobile,
                trabalhando com C#, .NET, SQL Server, React, Next.js, Python e Flutter.
              </p>
            </article>

            <article className="panel-card side-card">
              <span className="mini-label">Práticas</span>
              <div className="pill-row">
                <span className="pill">Clean Code</span>
                <span className="pill">SOLID</span>
                <span className="pill">Clean Architecture</span>
                <span className="pill">DDD</span>
                <span className="pill">CI/CD</span>
                <span className="pill">Scrum</span>
                <span className="pill">Kanban</span>
              </div>
            </article>

            <article className="panel-card side-card">
              <span className="mini-label">Valor que eu levo para o time</span>
              <ul className="compact-list">
                <li>Leitura rápida de contexto e incidentes.</li>
                <li>Capacidade de navegar entre front-end, back-end, dados e infra.</li>
                <li>Comunicação técnica clara com operação e equipe multidisciplinar.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="stack">
        <SectionHeading
          eyebrow="STACK"
          title="Tecnologias com as quais venho construindo"
          description="A stack combina base Microsoft forte, front-end moderno e ferramentas voltadas a integração, dados e entrega contínua."
        />

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="panel-card stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="contact-banner">
          <div className="contact-copy">
            <p className="eyebrow">CONTATO</p>
            <h2>Contato</h2>
            <p>
              Caso faça sentido conversar sobre oportunidades, projetos ou troca de ideias, estes são
              os canais pelos quais você pode falar comigo.
            </p>
          </div>

          <div className="contact-grid">
            {contactCards.map((contact) => (
              <a
                className="contact-card"
                href={contact.href}
                key={contact.title}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Image src={contact.icon} alt={contact.title} width={22} height={22} />
                <span>{contact.title}</span>
                <strong>{contact.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Caio Silva Marques Porto</span>
        <span>.NET, React, Next.js, SQL Server, Python, Flutter</span>
      </footer>

      <Analytics />
    </main>
  );
}
