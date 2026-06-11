import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// 1. Création du contexte
const CartContext = createContext();

// 2. Le Provider (Fournisseur de données)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /**
   * AJOUTER un produit au panier
   * Si le produit existe déjà, on augmente sa quantité
   */
  const addToCart = (product, quantityToAdd) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      // Si c'est un nouveau produit
      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
  };

  /**
   * MODIFIER la quantité directement
   * Utile pour les champs de saisie ou les boutons +/- dans le panier
   */
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId); // Supprime si la quantité descend à 0
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  /**
   * SUPPRIMER un produit complètement du panier
   */
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  /**
   * CALCULS dynamiques pour la Navbar et le Panier
   */
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        updateQuantity, 
        removeFromCart, 
        totalItemsCount, 
        totalPrice 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3. Validation des props (pour corriger les erreurs de validation demandées)
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// 4. Hook personnalisé pour utiliser le panier facilement ailleurs
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
  }
  return context;
};