import ProjectCard from "@/components/project-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "Projets — Yokoli François",
  description: "Découvrez les projets web de Yokoli François.",
};

const projects = [
  {
    title: "Boutique d’articles sportifs",
    imageSrc: "/images/Capture d’écran_16-10-2026_211036_mondialsport.sowcoder.com.jpeg",
    imageAlt: "Page d’accueil de la boutique Mondial Sport",
  },
  {
    title: "Boutique de produits technologiques",
    imageSrc: "/images/Capture d’écran_16-10-2026_212159_smarttech-2k2n.onrender.com.jpeg",
    imageAlt: "Page d’accueil de la boutique SmartTech",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-container content-page">
        <p className="eyebrow">Projets</p>
        <h1>Mes projets</h1>
        <div className="project-grid projects-page-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
