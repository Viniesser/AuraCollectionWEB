import { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";

const Logo = "/src/assets/logo.png";

const Menu = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23C9A84C' stroke-width='2'%3E%3Cline x1='3' y1='6' x2='21' y2='6'/%3E%3Cline x1='3' y1='12' x2='21' y2='12'/%3E%3Cline x1='3' y1='18' x2='21' y2='18'/%3E%3C/svg%3E";
const Close = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23C9A84C' stroke-width='2'%3E%3Cline x1='18' y1='6' x2='6' y2='18'/%3E%3Cline x1='6' y1='6' x2='18' y2='18'/%3E%3C/svg%3E";

const IconCosmeticos = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='none' stroke='%23C9A84C' stroke-width='1.5' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'/%3E%3Cpath d='M8 14s1.5 2 4 2 4-2 4-2'/%3E%3Cline x1='9' y1='9' x2='9.01' y2='9'/%3E%3Cline x1='15' y1='9' x2='15.01' y2='9'/%3E%3C/svg%3E";
const IconAcessorios = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='none' stroke='%23C9A84C' stroke-width='1.5' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='8' r='4'/%3E%3Cpath d='M4 20c0-4 3.6-7 8-7s8 3 8 7'/%3E%3C/svg%3E";
const IconPresentes = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='none' stroke='%23C9A84C' stroke-width='1.5' viewBox='0 0 24 24'%3E%3Crect x='3' y='8' width='18' height='13' rx='1'/%3E%3Cpath d='M21 8H3V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2z'/%3E%3Cline x1='12' y1='5' x2='12' y2='21'/%3E%3Cpath d='M12 5C12 5 9 2 7 3s-1 3 2 3'/%3E%3Cpath d='M12 5c0 0 3-3 5-2s1 3-2 3'/%3E%3C/svg%3E";
const IconCheck = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23C9A84C' stroke-width='2.5' viewBox='0 0 24 24'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E";

const ProfileOne = "https://placehold.co/130x130/F2EDE4/3a3028?text=M";
const ProfileTwo  = "https://placehold.co/130x130/F2EDE4/3a3028?text=A";
const ProfileThree = "https://placehold.co/130x130/F2EDE4/3a3028?text=C";

const testimonials = [
  {
    profileImage: ProfileOne,
    testimony: "Os cosméticos da Aura Collection são simplesmente incríveis! A qualidade é impecável e a embalagem chegou lindamente embrulhada. Super recomendo!",
    stars: 5,
    name: "Mariana Souza",
    role: "Cliente desde 2023",
  },
  {
    profileImage: ProfileTwo,
    testimony: "Comprei um kit presente para minha mãe e ela amou cada detalhe. Entrega rápida mesmo vindo de Nova Aurora para cá. Voltarei a comprar com certeza!",
    stars: 5,
    name: "Andressa Lima",
    role: "Cliente fiel",
  },
  {
    profileImage: ProfileThree,
    testimony: "Os acessórios são de ótima qualidade e o atendimento é excelente. Fiz meu pedido e em poucos dias já estava em mãos. Nota 10!",
    stars: 4,
    name: "Carlos Mendes",
    role: "Comprador recorrente",
  },
];

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  async function handleSendEmail() {
    if (!contactEmail.trim() || !contactMessage.trim()) return;
    setEmailStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: contactEmail, message: contactMessage }),
      });
      if (!response.ok) throw new Error();
      setEmailStatus("success");
      setContactEmail("");
      setContactMessage("");
    } catch {
      setEmailStatus("error");
    }
  }

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Aura Collection" width={160} height={70} style={{ objectFit: "contain" }} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li><a href="#">Home</a></li>
              <li><a href="#solution">Soluções</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">Login</a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
                    <li><a className="reverse-color" onClick={() => setShowMobileMenu(false)} href="#">Login</a></li>
                  </ul>
                  <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                    <img src={Close} alt="fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                <img src={Menu} alt="abrir menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="container content">
          <p className="desktop-only gold-tag">Nova Aurora · Paraná · Brasil</p>
          <h1>Beleza, estilo e presentes que encantam!</h1>
          <p>
            Cosméticos, acessórios e presentes selecionados com amor em Nova Aurora — PR.
            Enviamos para todo o Brasil com cuidado e agilidade.
          </p>
          <div className="flex gap-1">
            <span><Button text="Comprar agora" /></span>
            <span className="desktop-only">
              <Button text="Ver coleção" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Nossas Categorias</h2>
            <span className="desktop-only">
              <h2>Pensado para você</h2>
            </span>
          </span>
          <p>
            A <strong>Aura Collection</strong> reúne o melhor em cosméticos,
            acessórios e presentes para tornar cada momento especial. Do Paraná
            para todo o Brasil.
          </p>
        </header>

        <section className="even-columns">
          <Card
            icon={IconCosmeticos}
            iconAlt="ícone cosméticos"
            title="Cosméticos"
            description="Produtos de beleza selecionados para realçar o que você já tem de mais bonito, com qualidade e sofisticação."
          />
          <Card
            icon={IconAcessorios}
            iconAlt="ícone acessórios"
            title="Acessórios"
            description="Peças exclusivas que completam qualquer look. Do dia a dia às ocasiões especiais, temos o acessório perfeito para você."
          />
          <Card
            icon={IconPresentes}
            iconAlt="ícone presentes"
            title="Presentes"
            description="Kits presente embalados com carinho para surpreender quem você ama. Enviamos para todo o Brasil com segurança."
          />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Quem comprou, aprovou!</p>
            <h2>Cada cliente importa!</h2>
          </span>
          <p>
            Clientes de todo o Brasil já descobriram a experiência Aura Collection.
            Veja o que estão dizendo sobre nossos produtos e atendimento.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div className="carousel-content" aria-hidden="true">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`clone-${i}`} {...t} />
            ))}
          </div>
        </section>
      </section>

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <section className="even-columns gap-1\.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Essencial</h3>
              <p>Experimente a Aura com nosso kit de boas-vindas gratuito.</p>
            </span>
            <h2>Grátis</h2>
            <Button text="Pedir agora" secondary />
            <span className="hr" />
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>Retire em Nova Aurora</p>
            </span>
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>1 kit por CPF</p>
            </span>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Premium</h3>
              <p>Para quem ama novidades e quer estar sempre na moda.</p>
            </span>
            <span className="price">
              <h2>R$ 79,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Assinar agora" />
            <span className="hr" />
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>Frete grátis todo mês</p>
            </span>
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>Box com 4 produtos exclusivos</p>
            </span>
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>Desconto em toda a loja</p>
            </span>
          </div>

          <div className="pricing-card">
            <span className="plan">
              <h3>VIP</h3>
              <p>Para quem merece o melhor — experiência completa Aura.</p>
            </span>
            <span className="price">
              <h2>R$ 139,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Assinar agora" secondary />
            <span className="hr" />
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>Tudo do Premium</p>
            </span>
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>Acesso antecipado a lançamentos</p>
            </span>
            <span className="features">
              <img src={IconCheck} alt="check" width={24} height={24} />
              <p>Consultoria de estilo mensal</p>
            </span>
          </div>
        </section>
      </section>

      <footer id="contact" style={{
        background: "var(--secondary-color)",
        color: "var(--light-text-color)",
        textAlign: "center",
        padding: "2.5rem",
        marginTop: "4rem"
      }}>
        <p style={{ color: "var(--primary-color)", fontWeight: "bold", letterSpacing: "0.1em", fontSize: "1.1rem" }}>
          AURA COLLECTION
        </p>
        <p style={{ color: "#c4b49a", marginTop: "0.5rem", fontSize: "0.875rem" }}>
          Nova Aurora · Paraná · Brasil
        </p>
        <p style={{ color: "#c4b49a", marginTop: "0.25rem", fontSize: "0.875rem" }}>
          contato@auracollection.com.br
        </p>

        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "2rem auto 0" }}>
          <p style={{ color: "var(--primary-color)", fontWeight: "bold", letterSpacing: "0.08em" }}>FALE CONOSCO</p>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            style={{ padding: "0.75rem 1rem", borderRadius: "0.25rem", border: "1px solid #c4b49a", background: "transparent", color: "var(--light-text-color)", outline: "none" }}
          />
          <textarea
            placeholder="Sua mensagem"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            rows={4}
            style={{ padding: "0.75rem 1rem", borderRadius: "0.25rem", border: "1px solid #c4b49a", background: "transparent", color: "var(--light-text-color)", outline: "none", resize: "none" }}
          />
          <button
            onClick={handleSendEmail}
            style={{ padding: "0.825rem", background: "var(--primary-color)", color: "var(--secondary-color)", fontWeight: "bold", border: "none", borderRadius: "0.25rem", cursor: "pointer", letterSpacing: "0.08em" }}
          >
            {emailStatus === "sending" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
          </button>
          {emailStatus === "success" && <p style={{ color: "#90ee90" }}>Mensagem enviada com sucesso!</p>}
          {emailStatus === "error" && <p style={{ color: "#ff6b6b" }}>Erro ao enviar. Tente novamente.</p>}
        </div>
      </footer>
    </>
  );
}
