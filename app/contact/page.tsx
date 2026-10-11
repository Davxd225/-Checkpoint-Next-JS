import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "Contact — Yokoli François",
  description: "Page de contact de Yokoli François.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-container content-page contact-page">
        <p className="eyebrow">Contact</p>
        <h1>Parlons de votre prochain projet.</h1>
        <p className="hero-copy">
          Pour me contacter au sujet de mes projets ou d’une collaboration,
          ajoute ici ton adresse e-mail ou un autre moyen de contact.
        </p>
        <p className="contact-note">
          Adresse e-mail ou réseau professionnel : à renseigner avant de publier
          le portfolio.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
