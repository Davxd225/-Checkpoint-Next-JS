import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner page-container">
        <Link className="wordmark" href="/" aria-label="Accueil — Yokoli François">
          <span className="wordmark-mark" aria-hidden="true">
            YF
          </span>
          <span>Yokoli François</span>
        </Link>
        <nav aria-label="Navigation principale">
          <Link href="/">Accueil</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
