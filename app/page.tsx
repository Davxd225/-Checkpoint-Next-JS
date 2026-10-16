import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "Yokoli François — Portfolio",
  description:
    "Portfolio de Yokoli François : projets web, présentation et contact.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="portfolio-hero page-container">
          <div className="portfolio-intro">
            <p className="eyebrow">Développeur web · Portfolio</p>
            <h1>
              Bonjour, moi c’est <span>Yokoli François.</span>
            </h1>
            <p className="hero-copy">
              Je m’appelle Yokoli François. Je crée des sites web et je vous
              présente ici quelques projets réalisés, dont une boutique
              d’articles sportifs et un site pour un petit restaurant.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/projets">
                Voir mes projets <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" href="/contact">
                Me contacter
              </Link>
            </div>
            <p className="availability">
              <span aria-hidden="true" /> Portfolio de projets web
            </p>
          </div>
          <div className="portrait-frame">
            <Image
              src="/images/yokoli-francois.png"
              alt="Photo de Yokoli François"
              width={608}
              height={1080}
              className="portrait-image"
            />
            <span className="portrait-caption">Yokoli François</span>
          </div>
        </section>

        <section className="featured-section page-container" aria-labelledby="featured-title">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Projets</p>
              <h2 id="featured-title">Mes projets</h2>
            </div>
            <Link className="text-link" href="/projets">
              Tous les projets <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="project-grid">
            <ProjectCard
              title="Boutique d’articles sportifs"
              imageSrc="/images/Capture d’écran_16-10-2026_211036_mondialsport.sowcoder.com.jpeg"
              imageAlt="Page d’accueil de la boutique Mondial Sport"
            />
            <ProjectCard
              title="Boutique de produits technologiques"
              imageSrc="/images/Capture d’écran_16-10-2026_212159_smarttech-2k2n.onrender.com.jpeg"
              imageAlt="Page d’accueil de la boutique SmartTech"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
