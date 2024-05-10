import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  return (
    <div className="cart-item-container">
      <img className="img" src={item.image} alt="item-image" />
      <div className="item-details">
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">₹{item.current_price} </span>
          <span className="cart-original-price">
            M.R.P:{item.original_price}
          </span>
          <span className="discount"> ({item.discount_percentage}off)</span>
        </div>
        <div className="return-policy">
          <b>{item.return_policy} days</b> return available
        </div>
        <div className="delivery">Delivery by {item.delivery_date}</div>
      </div>
      <div className="delete-btn" onClick={removeCartItem}>
        <i className="fa-solid fa-trash " style={{ cursor: "pointer" }}></i>
      </div>
    </div>
  );
};

export default CartItem;
