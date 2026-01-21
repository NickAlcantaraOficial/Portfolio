import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code2, Database, BarChart3, Users, ArrowRight } from "lucide-react";

/**
 * Data-Driven Minimalism Design - Otimizado
 * - Clean, professional layout com foco em responsividade
 * - Blue primary (#0052cc) + Orange accent (#c85a17)
 * - Playfair Display para títulos, Poppins para headings, Inter para body
 * - Layout otimizado para galeria de projetos compacta
 */

export default function Home() {
  const skills = [
    { category: "Linguagens & Dados", items: ["Python", "SQL", "PostgreSQL", "PHP", "Análise de Dados Jr."], icon: Database },
    { category: "Tecnologias Web", items: ["HTML", "CSS", "JavaScript", "React"], icon: Code2 },
    { category: "Ferramentas & IA", items: ["IA Generativa", "CRM", "Excel", "Power BI"], icon: BarChart3 },
    { category: "Suporte & Infraestrutura", items: ["Manutenção de Hardware", "Redes", "Suporte N1/N2", "Linux"], icon: Users },
    { category: "Vendas & Negócios", items: ["Vendas Consultiva", "Governamentais", "Inside Sales", "Prospecção"], icon: Users },
  ];

  const experience = [
    {
      role: "Especialista em soluções",
      company: "Sinerji – Instituto de Pesquisa e Desenvolvimento",
      period: "Jan/2025 – Atual",
      description: "Atuo como Especialista em Soluções, integrando áreas comercial, técnica e de negócio para garantir adoção eficiente da plataforma e geração de valor ao cliente. Conduzo o levantamento de necessidades, apoio consultivo em reuniões e tradução de requisitos de negócio para soluções baseadas em dados.\n\nRealizo consultas e manipulação de informações em SQL/PostgreSQL, gestão de acessos e sustentação de usuários, além de análise de uso da plataforma para identificação de oportunidades de melhoria. Participo de testes funcionais, validação de regras de negócio e construção de relatórios estratégicos, contribuindo para decisões mais assertivas e otimização de processos.",
      highlights: ["PostgreSQL", "Python", "CRM", "IA Generativa", "SaaS", "Analytics"],
    },
    {
      role: "Analista de Soluções Web",
      company: "Plan Móveis Planejados – Autônomo",
      period: "Ago/2024 – Dez/2025",
      description: "Desenvolvimento de aplicação web para marcenaria, contemplando frontend em HTML/CSS/JavaScript e backend em PHP/MySQL. Responsável pela modelagem de dados, implementação de funcionalidades, layout responsivo e publicação do projeto, com foco em experiência do usuário e conversão de leads.",
      highlights: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Responsivo", "UX/Conversão"],
    },
    {
      role: "Analista de TI | Suporte e Sistemas",
      company: "Saúde Vivaz",
      period: "Jul/2023 – Nov/2023",
      description: "Atendimento de chamados N1/N2, manutenção de hardware e infraestrutura de redes. Suporte direto a usuários e gestão de cadastros em sistemas internos. Manutenção corretiva em sistemas e sites desenvolvidos em PHP.",
      highlights: ["Suporte N1/N2", "Hardware", "Redes", "PHP", "Sistemas"],
    },
    {
      role: "Consultor comercial | Inside Sales",
      company: "Digital Promotora",
      period: "Jun/2020 – Jun/2021",
      description: "Atuação consultiva em prospecção, negociação e fechamento de vendas. Foco em atingimento de metas e acompanhamento de KPIs de performance.",
      highlights: ["Vendas", "Prospecção", "Negociação", "KPIs"],
    },
  ];

  const education = [
    {
      degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      institution: "UDF",
      status: "Cursando",
      description: "Formação técnica em desenvolvimento de sistemas com foco em análise de dados, programação e desenvolvimento web. Estudante com sólida base em SQL, Python e PostgreSQL aplicados à análise de dados comerciais e automação de processos.",
    },
  ];

  const projects = [
    {
      name: "Benefiz",
      shortDescription: "Plataforma de saúde",
      description: "Plataforma de saúde especializada na venda de planos de saúde com demonstração detalhada dos benefícios inseridos em cada plano. Sistema intuitivo que facilita a compreensão e comparação de coberturas, promovendo decisões de compra informadas.",
      logo: "/images/benefiz-logo.png",
      url: "https://benefiz.com.br/",
      technologies: ["PHP", "Suporte Técnico", "Hardware", "Redes"],
      period: "Jul/2023 – Nov/2023",
    },
    {
      name: "Plan Móveis",
      shortDescription: "Site para móveis",
      description: "Site para móveis planejados. Projeto de desenvolvimento web com foco em experiência do usuário e conversão de vendas.",
      logo: "/images/plan-moveis-logo.png",
      url: "https://plan-moveis-planejados.vercel.app/",
      technologies: ["React", "JavaScript", "Vercel", "E-commerce"],
      period: "2024",
    },
    {
      name: "DP SolarCalc",
      shortDescription: "Calculadora solar",
      description: "Calculadora de energia solar para dimensionamento de sistemas fotovoltaicos. Ferramenta interativa que auxilia no cálculo de potência, consumo e viabilidade de instalação de paineis solares com interface intuitiva e cálculos precisos.",
      logo: "/images/dp-solar-new.png",
      url: "https://calculadoradpsolar.lovable.app/",
      technologies: ["React", "JavaScript", "Energia Solar"],
      period: "2026",
    },
  ];

  const stats = [
    { label: "Anos de Experiência", value: "4+ anos" },
    { label: "Idioma", value: "Inglês Avançado" },
    { label: "Localização", value: "Brasília – DF" },
    { label: "CNH", value: "Categoria B" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">NA</div>
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#projetos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Projetos</a>
            <a href="#experiencia" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Experiência</a>
            <a href="#skills" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-background.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-3 leading-tight">
                  Nicolas Alan Alcantara
                </h1>
                <p className="text-xl md:text-2xl text-primary font-heading font-semibold">
                  Especialista em TI & Análise de Dados
                </p>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Estudante de Análise e Desenvolvimento de Sistemas com sólida base em análise de dados, CRM e suporte técnico. Experiência prática em SQL, Python e PostgreSQL aplicados à análise de dados comerciais, automação de processos e apoio à tomada de decisão com IA Generativa.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#contato">
                  <Button className="bg-primary hover:bg-blue-800 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Entrar em Contato
                  </Button>
                </a>
                <a href="#experiencia">
                  <Button variant="outline" className="border-primary text-primary hover:bg-blue-50">
                    Ver Currículo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:flex md:justify-center md:items-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
                <img 
                  src="/images/profile-photo.jpg" 
                  alt="Nicolas Alan Alcantara" 
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12 border-t border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="text-xl md:text-2xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">Sobre Mim</h2>
            <div className="space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Sou um estudante de Análise e Desenvolvimento de Sistemas pela UDF com sólida base em análise de dados, CRM e suporte técnico. Minha experiência prática abrange SQL, Python, PostgreSQL e IA Generativa, aplicados à análise de dados comerciais, automação de processos e apoio à tomada de decisão.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Atualmente trabalho como Especialista em Soluções na Sinerji, onde realizo análise de dados comerciais com PostgreSQL, desenvolvimento de automações com Python e aplicação de IA para otimização de fluxos. Anteriormente, atuei em suporte técnico (N1/N2) e vendas consultiva.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Meu objetivo é atuar como Analista de Dados Jr, Analista de Negócios ou SDR, continuando a desenvolver minhas habilidades técnicas e contribuindo para projetos que gerem valor através de dados, análise e tecnologia. Possuo inglês avançado e tenho perfil analítico e comunicativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Galeria Otimizada */}
      <section id="projetos" className="py-20 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <a key={idx} href={project.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white rounded-xl border-l-4 border-primary hover:border-accent p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col overflow-hidden">
                  {/* Logo */}
                  <div className="flex justify-center mb-4 h-16">
                    <img src={project.logo} alt={project.name} className="h-full object-contain" />
                  </div>
                  
                  {/* Title & Period */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{project.name}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, tidx) => (
                      <span key={tidx} className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Visitar
                    <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">Experiência Profissional</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-lg border-l-4 border-primary p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-semibold text-sm md:text-base mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 whitespace-pre-line">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((skill, sidx) => (
                    <span key={sidx} className="bg-blue-100 text-primary text-xs md:text-sm px-3 py-1 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">Formação</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-lg border-l-4 border-accent p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-accent font-semibold text-sm md:text-base mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit whitespace-nowrap">
                    {edu.status}
                  </span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-24 bg-gradient-to-b from-secondary to-white relative overflow-hidden">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">Skills & Tecnologias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sidx) => (
                      <span key={sidx} className="bg-blue-100 text-primary text-xs px-2.5 py-1 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a href="mailto:nickalcantara230@gmail.com" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-primary hover:border-accent">
                <Mail className="w-6 h-6 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm md:text-base">Email</h3>
                <p className="text-muted-foreground text-sm">nickalcantara230@gmail.com</p>
              </div>
            </a>
            <a href="tel:+5561996958799" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-primary hover:border-accent">
                <Phone className="w-6 h-6 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm md:text-base">Telefone</h3>
                <p className="text-muted-foreground text-sm">+55 61 99695-8799</p>
              </div>
            </a>
            <div className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-primary hover:border-accent">
                <MapPin className="w-6 h-6 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm md:text-base">Localização</h3>
                <p className="text-muted-foreground text-sm">Brasília – DF</p>
              </div>
            </div>
          </div>
          <a href="https://wa.me/5561996958799" target="_blank" rel="noopener noreferrer">
            <div className="bg-primary text-white rounded-lg p-10 md:p-12 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-3">Vamos Conversar?</h3>
              <p className="text-blue-100 mb-6 text-sm md:text-base">
                Estou sempre aberto para novas oportunidades, projetos e conversas sobre tecnologia e dados.
              </p>
              <Button className="bg-white text-primary hover:bg-blue-50">
                Enviar Mensagem via WhatsApp
              </Button>
            </div>
          </a>
          <div className="mt-10 text-center">
            <a href="/Curriculo-Nicolas-Alcantara.pdf" download className="inline-block">
              <Button className="bg-primary hover:bg-blue-800 text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Baixar Currículo em PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-10 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div>
              <p className="font-heading font-semibold mb-1 text-sm md:text-base">Nicolas Alan Alcantara</p>
              <p className="text-blue-200 text-sm">Especialista em TI & Análise de Dados</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/NickAlcantaraOficial/portfolio-nicolas" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/nicolas-alan-alcantara-moraes-2154a5198/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:nickalcantara230@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-blue-900 mt-8 pt-8 text-center text-blue-200 text-xs md:text-sm">
            <p>© 2025 Nicolas Alan Alcantara. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
