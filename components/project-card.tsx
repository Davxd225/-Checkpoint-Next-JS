import Image from "next/image";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProjectCard({ title, imageSrc, imageAlt }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
        />
      </div>
      <div className="project-card-caption">
        <h3>{title}</h3>
      </div>
    </article>
  );
}
