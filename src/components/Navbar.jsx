import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { totalItemsCount } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🦅 L'Aigle Royal — Exploitation Agricole</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/shop">Boutique</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Panier 
            {totalItemsCount > 0 && <span className="cart-badge">{totalItemsCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;