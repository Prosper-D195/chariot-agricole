import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  if (loading) {
    return <div className="loading">Chargement de la récolte fraîche...</div>;
  }

  // Extraire la liste unique des catégories présentes dans vos données
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="shop-page">
      <header className="shop-header">
        <h1>Le Marché de l'Exploitation</h1>
        <p>Commandez vos produits frais récoltés et préparés directement à la ferme.</p>
      </header>

      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Shop;