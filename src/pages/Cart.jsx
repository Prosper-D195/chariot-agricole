import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'; // Importation du sous-composant

function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItemsCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h2>Votre panier est vide 🛒</h2>
        <p>Il semblerait que vous n'ayez pas encore sélectionné de produits frais de notre exploitation.</p>
        <Link to="/shop" className="btn-back-shop">
          Découvrir nos produits agricoles
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>Votre Panier d'Achat</h1>
        <p>Vous avez sélectionné <strong>{totalItemsCount}</strong> produit(s) de la ferme.</p>
      </header>

      <div className="cart-content">
        {/* Liste des articles du panier via notre nouveau composant */}
        <div className="cart-items-list">
          {cart.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              onUpdateQuantity={updateQuantity} 
              onRemove={removeFromCart} 
            />
          ))}
        </div>

        {/* Résumé financier de la commande */}
        <div className="cart-summary-box">
          <h3>Résumé du Bon de Commande</h3>
          <hr />
          <div className="summary-row">
            <span>Nombre total d'articles :</span>
            <span>{totalItemsCount}</span>
          </div>
          <div className="summary-row total-row">
            <span>Montant Global :</span>
            <span>{totalPrice} FCFA</span>
          </div>
          <button 
            type="button" 
            className="btn-checkout-simulated"
            onClick={() => alert("Simulation de commande validée pour l'exploitation !")}
          >
            Valider la réservation
          </button>
          <Link to="/shop" className="link-continue-shopping">
            ← Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;