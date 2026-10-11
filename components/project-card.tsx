type ProjectCardProps = {
  title: string;
  githubUrl: string;
};

export default function ProjectCard({ title, githubUrl }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-caption">
        <h3>{title}</h3>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
