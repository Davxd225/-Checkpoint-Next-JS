import Image from "next/image";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "À propos — Yokoli François",
  description: "Découvrez Yokoli François et ses compétences en développement web.",
};

const skills = ["React", "Next.js", "TypeScript", "CSS", "Accessibilité"];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-container content-page">
        <p className="eyebrow">À propos</p>
        <div className="about-layout">
          <div>
            <h1>Du code réfléchi, avec une attention aux détails.</h1>
            <p className="hero-copy">
              Je m’appelle Yokoli François. Je m’intéresse à la création de
              sites web et j’ai réalisé notamment une boutique d’articles
              sportifs et un site pour un petit restaurant.
            </p>
            <p className="body-copy">
              Ce portfolio présente mon travail, les technologies que
              j’apprends et les moyens de me contacter.
            </p>
            <h2 className="subheading">Ce que j’utilise</h2>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <figure className="about-portrait">
            <Image
              src="/images/yokoli-francois.png"
              alt="Photo de Yokoli François"
              width={608}
              height={1080}
            />
            <figcaption>Yokoli François</figcaption>
          </figure>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
