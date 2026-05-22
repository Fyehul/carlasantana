import { useState, useEffect, useRef } from "react";
import Carla01 from "./assets/img/Carla02.png";
import Carla02 from "./assets/img/Carla0.png";
import "./index.css";

/* ─── CONFIGURAÇÕES ─────────────────────────────────────────────────────── */
const CFG = {
  phone:        "5579999439488",
  phoneDisplay: "(79) 9 9943-9488",
  igHandle:     "@corretoracarlasantana",
  igUrl:        "https://instagram.com/corretoracarlasantana",
  address:      "Rua Cupertino Dória, ao lado do Nathan Baby",
  city:         "Itabaiana – SE",
  creci:        "CRECI PF 5370",
  heroImg:      Carla01,
  aboutImg:     Carla02,
};

const MSG_PADRAO = "Olá Carla! Vim pelo seu site e tenho interesse em imóveis. Poderia me ajudar?";

const wa = (msg = MSG_PADRAO) =>
  `https://wa.me/${CFG.phone}?text=${encodeURIComponent(msg)}`;

/* ─── HOOK: REVEAL ON SCROLL ────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── ÍCONES INLINE ─────────────────────────────────────────────────────── */
const Icons = {
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.847L.057 23.882a.5.5 0 00.613.613l6.035-1.467A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.946 9.946 0 01-5.084-1.389l-.364-.215-3.773.916.934-3.772-.234-.376A9.946 9.946 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  House: () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  Map: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
};

/* ─── NAVBAR ─────────────────────────────────────────────────────────────── */
function NavBar({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        {/* inner centralizado com max-width */}
        <div className="nav-inner">
          <div className="nav-logo">
            <span>Carla Santana</span>
            <span>Corretora de Imóveis</span>
          </div>
          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
            <a className="btn-nav" href={wa()} target="_blank" rel="noopener noreferrer">
              <Icons.WhatsApp /> Falar Agora
            </a>
          </div>
          <div className="hamburger" onClick={() => setOpen(true)} aria-label="Abrir menu">
            <span /><span /><span />
          </div>
        </div>
      </nav>

      {open && (
        <nav className="nav-mobile">
          <div
            style={{ position: "absolute", top: 20, right: 24, cursor: "pointer", color: "#fff" }}
            onClick={() => setOpen(false)}
          >
            <Icons.Close />
          </div>
          <div className="nav-logo" style={{ textAlign: "center" }}>
            <span>Carla Santana</span>
            <span>Corretora de Imóveis</span>
          </div>
          <a href="#sobre"    onClick={() => setOpen(false)}>Sobre</a>
          <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#contato"  onClick={() => setOpen(false)}>Contato</a>
          <a
            className="btn-nav"
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <Icons.WhatsApp /> Falar Agora
          </a>
        </nav>
      )}
    </>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-shape" />
      <div className="hero-bg-shape2" />
      <div className="hero-inner">

        {/* texto — animações escalonadas */}
        <div className="hero-text">
          <div className="hero-badge" data-reveal data-delay="0">
            <Icons.Star /> Mais de 10 anos de mercado
          </div>
          <h1 className="hero-title" data-reveal data-delay="1">
            Realize o sonho da<br /><span>casa própria</span><br />com quem entende
          </h1>
          <p className="hero-subtitle" data-reveal data-delay="2">Carla Santana — {CFG.creci}</p>
          <p className="hero-desc" data-reveal data-delay="3">
            Corretora de imóveis com mais de 10 anos de experiência em Itabaiana e região.
            Especialista em financiamento habitacional, loteamentos e compra & venda.
            Estou aqui para te guiar em cada etapa da conquista do seu imóvel.
          </p>
          <div className="hero-ctas" data-reveal data-delay="4">
            <a className="btn-primary" href={wa()} target="_blank" rel="noopener noreferrer">
              <Icons.WhatsApp /> Quero meu imóvel
            </a>
            <a className="btn-secondary" href="#sobre">
              Saiba mais →
            </a>
          </div>
        </div>

        {/* foto */}
        <div className="hero-img-side" data-reveal data-delay="2">
          <div style={{ position: "relative" }}>
            <div className="hero-photo-wrap">
              <img src={CFG.heroImg} alt="Carla Santana - Corretora de Imóveis" />
            </div>
            <div className="hero-creci-badge">
              <div>
                <div className="creci-label">Registro</div>
                <div className="creci-num">{CFG.creci}</div>
              </div>
              <div style={{ width: 1, height: 36, background: "#eee" }} />
              <div>
                <div className="creci-label">Atuação</div>
                <div className="creci-num">Sergipe</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── STATS ──────────────────────────────────────────────────────────────── */
function Stats() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {[
          { num: "10+",  label: "Anos de experiência" },
          { num: "500+", label: "Famílias atendidas"  },
          { num: "100%", label: "Comprometimento"     },
        ].map((s, i) => (
          <div className="stat-item" key={s.label} data-reveal data-delay={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SOBRE ──────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="section" id="sobre">
      <div className="section-inner">
        <div className="about-grid">

          <div className="about-photo-col" data-reveal>
            <div className="about-photo">
              <img src={CFG.aboutImg} alt="Carla Santana" />
            </div>
            <div className="about-card-float">
              <div className="num">10+</div>
              <div className="lbl">Anos no<br />mercado</div>
            </div>
          </div>

          <div className="about-text" data-reveal data-delay="1">
            <div className="section-tag">Sobre mim</div>
            <h2 className="section-title">
              Quem está ao <span>seu lado</span> nessa conquista
            </h2>
            <p className="section-desc">
              Sou a Carla Santana, corretora de imóveis com mais de 10 anos de experiência em
              Itabaiana e Sergipe. Cursando Arquitetura e Urbanismo, atendo com olhar técnico e
              humano quem busca o imóvel ideal — seja para morar, investir ou financiar.
            </p>
            <p className="section-desc">
              Parceira da Caixa Econômica Federal e de importantes construtoras da região,
              ofereço as melhores condições para tornar o sonho da casa própria realidade.
            </p>
            <div className="about-bullets">
              {[
                { icon: "🏠", title: "Especialista em Financiamento Habitacional", desc: "Parceria direta com a Caixa Econômica Federal" },
                { icon: "📍", title: "Presença em Itabaiana e região",            desc: "Escritório próprio na Rua Cupertino Dória" },
                { icon: "🎓", title: "Cursando Arq & Urbanismo",                  desc: "Visão técnica e detalhada sobre cada imóvel" },
              ].map((b) => (
                <div className="about-bullet" key={b.title}>
                  <div className="bullet-icon">{b.icon}</div>
                  <div className="bullet-text">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="btn-primary"
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.WhatsApp /> Conversar agora
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── SERVIÇOS ───────────────────────────────────────────────────────────── */
function Services() {
  const services = [
    { icon: "🏡", title: "Compra & Venda de Imóveis",       desc: "Casas, apartamentos e terrenos. Avaliação gratuita e suporte completo do início ao fechamento." },
    { icon: "🏦", title: "Financiamento Habitacional",       desc: "Parceira da Caixa Econômica Federal. Simulação, documentação e acompanhamento de ponta a ponta." },
    { icon: "🏗️", title: "Loteamentos",                     desc: "Acesso exclusivo a loteamentos na região. Lotes com documentação regularizada e financiamento facilitado." },
    { icon: "🤝", title: "Parcerias Comerciais",             desc: "Benefícios exclusivos para clientes: descontos em lojas parceiras e vantagens especiais na compra." },
    { icon: "🗺️", title: "Consultoria Imobiliária",         desc: "Orientação personalizada para comprar, vender ou investir no imóvel certo no momento certo." },
    { icon: "📋", title: "Regularização e Documentação",    desc: "Assessoria completa em toda a documentação necessária para uma compra segura e tranquila." },
  ];

  return (
    <section className="services-section" id="servicos">
      <div className="section-inner">
        <div className="section-tag" data-reveal>O que ofereço</div>
        <h2 className="section-title" data-reveal data-delay="1">Serviços que fazem a <span>diferença</span></h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.title} data-reveal data-delay={i % 3}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DEPOIMENTOS ────────────────────────────────────────────────────────── */
function Highlights() {
  const items = [
    { quote: "\u201C", text: "Carla me ajudou a realizar o sonho da casa própria. Toda a burocracia do financiamento foi resolvida com ela, sem stress nenhum!", name: "M.S.", role: "Cliente — Financiamento Caixa" },
    { quote: "\u201C", text: "Profissional incrível! Me atendeu com muita atenção e encontrou o lote perfeito dentro do meu orçamento. Super recomendo!", name: "J.O.", role: "Cliente — Loteamento" },
    { quote: "\u201C", text: "Transparência e compromisso em tudo. Ela acompanha de perto cada etapa e te deixa seguro durante todo o processo.", name: "A.C.", role: "Cliente — Compra de Casa" },
  ];

  return (
    <section className="highlights-section">
      <div className="section-inner">
        <div className="section-tag" data-reveal>Depoimentos</div>
        <h2 className="section-title" data-reveal data-delay="1">O que dizem <span>nossos clientes</span></h2>
        <div className="highlights-grid">
          {items.map((item, i) => (
            <div className="highlight-card" key={item.name} data-reveal data-delay={i}>
              <div className="quote">{item.quote}</div>
              <p>{item.text}</p>
              <div className="highlight-author">
                <div className="author-dot">{item.name[0]}</div>
                <div className="author-info">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTATO ────────────────────────────────────────────────────────────── */
function Contact() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.03775883409077!2d-37.42995807810785!3d-10.687803159557589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70ffb0064a3e6c7%3A0x9806eafa353f4055!2sCarla%20Santana%20Corretora!5e0!3m2!1spt-BR!2sbr!4v1779321719813!5m2!1spt-BR!2sbr";

  return (
    <section className="contact-section" id="contato">
      <div className="section-inner">
        <div className="section-tag" data-reveal>Localização & Contato</div>
        <h2 className="section-title" data-reveal data-delay="1">Estou aqui para <span>te atender</span></h2>
        <div className="contact-grid">

          <div className="map-wrap" data-reveal>
            <iframe
              src={mapSrc}
              title="Localização Carla Santana"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact-info" data-reveal data-delay="1">
            <h3 className="contact-info-title">Fale comigo</h3>
            <p className="contact-info-sub">Escolha o canal mais fácil para você:</p>

            <a className="contact-item" href={wa()} target="_blank" rel="noopener noreferrer">
              <div className="contact-item-icon ci-green"><Icons.WhatsApp /></div>
              <div>
                <strong>WhatsApp</strong>
                <span>{CFG.phoneDisplay}</span>
              </div>
            </a>

            <a className="contact-item" href={`tel:${CFG.phone}`}>
              <div className="contact-item-icon ci-blue"><Icons.Phone /></div>
              <div>
                <strong>Telefone</strong>
                <span>{CFG.phoneDisplay}</span>
              </div>
            </a>

            <a className="contact-item" href={CFG.igUrl} target="_blank" rel="noopener noreferrer">
              <div className="contact-item-icon ci-pink"><Icons.Instagram /></div>
              <div>
                <strong>Instagram</strong>
                <span>{CFG.igHandle}</span>
              </div>
            </a>

            <div className="contact-item" style={{ cursor: "default" }}>
              <div className="contact-item-icon ci-map"><Icons.Map /></div>
              <div>
                <strong>Endereço</strong>
                <span>{CFG.address}</span>
                <span style={{ display: "block", fontSize: ".82rem", color: "#888", marginTop: 3 }}>
                  {CFG.city} — ao lado do Nathan Baby
                </span>
              </div>
            </div>

            <a
              className="btn-wa-big"
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.WhatsApp /> Agendar visita pelo WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span>Carla Santana</span>
          <span>Corretora de Imóveis · {CFG.creci}</span>
        </div>
        <div className="footer-links">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <a href={CFG.igUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Carla Santana — Corretora de Imóveis · {CFG.creci} · Itabaiana, Sergipe
        </p>
        <p className="footer-dev">
          Desenvolvido por{" "}
          <a
            href="https://heverecstudiocode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev-link"
          >
            Heverec Studio Code
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────────────────── */
export default function LandingCarla() {
  const [scrolled, setScrolled] = useState(false);

  useReveal(); // ativa o IntersectionObserver de reveal

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <NavBar scrolled={scrolled} />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Highlights />
      <Contact />
      <Footer />
      <a
        className="wa-float"
        href={wa()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <Icons.WhatsApp />
      </a>
    </div>
  );
}