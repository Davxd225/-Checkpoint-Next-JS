import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const folders = [
  {
    path: "app/",
    purpose: "Routes et mises en page Next.js",
    example: "app/structure/page.tsx",
  },
  {
    path: "components/",
    purpose: "Composants partagés de l’interface",
    example: "components/site-header.tsx",
  },
  {
    path: "styles/",
    purpose: "Styles globaux et variables CSS",
    example: "styles/globals.css",
  },
];

export default function StructurePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-container detail-page">
        <p className="eyebrow">Organisation du projet</p>
        <h1>Une structure lisible, dès le départ.</h1>
        <p className="hero-copy">
          Avec l’App Router de Next.js, les fichiers page.tsx placés dans app/
          définissent les routes. Les composants partagés et les styles restent
          indépendants des pages qui les utilisent.
        </p>

        <div className="folder-list">
          {folders.map((folder) => (
            <article className="folder-row" key={folder.path}>
              <div>
                <h2>{folder.path}</h2>
                <p>{folder.purpose}</p>
              </div>
              <code>{folder.example}</code>
            </article>
          ))}
        </div>

        <p className="structure-note">
          Pour ajouter une page, créez un dossier dans app/ avec un fichier
          page.tsx. Par exemple, app/contact/page.tsx crée la route /contact.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
