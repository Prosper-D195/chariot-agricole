import PropTypes from 'prop-types';

function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item-row">
      <div className="cart-item-image">
        <img src={item.image} alt={item.title} />
      </div>
      
      <div className="cart-item-details">
        <span className="cart-item-category">{item.category}</span>
        <h3>{item.title}</h3>
        <p className="cart-item-unit-price">Prix unitaire : {item.price} FCFA</p>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-selector">
          <button 
            type="button" 
            className="btn-qty"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <input 
            type="number" 
            className="input-qty"
            value={item.quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val)) onUpdateQuantity(item.id, val);
            }}
            min="1"
          />
          <button 
            type="button" 
            className="btn-qty"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>

        <button 
          type="button" 
          className="btn-remove"
          onClick={() => onRemove(item.id)}
        >
          Supprimer
        </button>
      </div>

      <div className="cart-item-subtotal">
        <p>{item.price * item.quantity} FCFA</p>
      </div>
    </div>
  );
}

// Validation rigoureuse des props pour éliminer les erreurs "missing in props validation"
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;