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
    githubUrl: "https://github.com/Davxd225?tab=repositories",
  },
  {
    title: "Site pour un petit restaurant",
    githubUrl: "https://github.com/Davxd225?tab=repositories",
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
