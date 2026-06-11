import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Section Héro : Grand bandeau d'accueil */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">🦅 L'EXCELLENCE AGRO-PASTORALE</div>
          <h1>L'Aigle Royal</h1>
          <h2>Du verger à votre table, la rigueur de la qualité</h2>
          <p>
            Spécialistes de la production fruitière tropicale d'élite et de l'élevage moderne. 
            Découvrez notre sélection exclusive de papayes Calina IPB9, de cultures maraîchères 
            et de produits transformés à la ferme.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-hero-primary">
              Visiter le Marché Frais
            </Link>
            <a href="#values" className="btn-hero-secondary">
              Notre Philosophie
            </a>
          </div>
        </div>
      </section>

      {/* Section Nos Piliers de Production */}
      <section id="values" className="values-section">
        <div className="section-title-container">
          <span className="subtitle">NOTRE SAVOIR-FAIRE</span>
          <h2 className="section-title">Une Exploitation Guidée par l'Exigence</h2>
          <div className="title-bar"></div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🍊</div>
            <h3>Arboriculture d'Élite</h3>
            <p>
              Une production rigoureuse axée sur des variétés sélectionnées comme la papaye 
              <strong> Calina IPB9</strong>, les mangues Amélie, les avocats et les agrumes, 
              cultivés pour obtenir un taux de sucre et une fermeté optimaux.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🐓</div>
            <h3>Élevage & Modernité</h3>
            <p>
              Des infrastructures avicoles et porcines de pointe garantissant des normes d'hygiène 
              strictes, une alimentation saine au grain et des produits d'une fraîcheur absolue.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🧪</div>
            <h3>Valorisation Locale</h3>
            <p>
              Nous transformons une partie de nos récoltes sur place (purs jus pressés à froid, 
              fruits séchés, confitures artisanales) pour capturer les saveurs tropicales sans 
              aucun intrant chimique.
            </p>
          </div>
        </div>
      </section>

      {/* Bandeau d'Appel à l'Action de fin */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Prêt à goûter la différence ?</h2>
          <p>Planifiez vos approvisionnements en direct avec l'exploitation, sans intermédiaire.</p>
          <Link to="/shop" className="btn-cta">
            Accéder à la boutique en ligne →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;