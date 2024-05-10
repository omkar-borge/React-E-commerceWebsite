import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { MdDeleteForever } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  const elementFound = cartItems.indexOf(item.id) >= 0;

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(item.id));
  };

  const removeFromCart = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars}
        <i className="fa-solid fa-star" style={{ color: "goldenrod" }}></i> |
        {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="bank-offer">
        <i className="fa-solid fa-tag offer-tag"></i> <b>Bank Offer:</b>
        {item.offer}{" "}
        <i style={{ cursor: "pointer" }}>
          <b>
            <a href="https://www.flipkart.com/pages/sbi-offfer-tnc">T&C</a>
          </b>
        </i>
      </div>
      <div className="price">
        <span className="current-price">₹{item.current_price}</span>
        <span className="original-price"> M.R.P: ₹{item.original_price} </span>
        <span className="discount"> ({item.discount_percentage}% off) </span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-cart button-hover"
          style={{ border: "1px solid black" }}
          onClick={removeFromCart}
        >
          <MdDeleteForever style={{ fontSize: "20px", textAlign: "center" }} />{" "}
          Remove from cart
        </button>
      ) : (
        <button className="btn-add-cart button-hover" onClick={handleAddToCart}>
          {" "}
          <i className="fa-solid fa-cart-shopping"></i> Add to cart
        </button>
      )}
    </div>
  );
};

export default HomeItem;
