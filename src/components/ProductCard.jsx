import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price} FCFA</p>
        
        <div className="product-controls">
          <div className="quantity-selector">
            <button type="button" onClick={decrement} className="btn-qty">-</button>
            <input 
              type="number" 
              value={quantity} 
              onChange={handleInputChange} 
              min="1" 
              className="input-qty"
            />
            <button type="button" onClick={increment} className="btn-qty">+</button>
          </div>
          
          <button 
            type="button" 
            className="btn-add"
            onClick={() => {
              addToCart(product, quantity);
              setQuantity(1); // Réinitialise à 1 après l'ajout
            }}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

// Validation des propriétés pour supprimer l'erreur "missing in props validation"
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;