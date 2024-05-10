import { useSelector } from "react-redux";

const CartPriceDetails = () => {
  const cartItems = useSelector((store) => store.cart);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    // console.log(item);
    // console.log(cartItems);
    // console.log(item.id);
    const itemIndex = cartItems.indexOf(item.id);
    console.log(itemIndex);
    return itemIndex >= 0;
  });
  const CONVIENENCE_FEES = 99;
  let totalItems = cartItems.length;
  let totalMrp = 0;
  let totalDiscount = 0;

  finalItems.forEach((cartItem) => {
    totalMrp += cartItem.original_price;
    totalDiscount += cartItem.original_price - cartItem.current_price;
  });

  let finalPayment = totalMrp - totalDiscount + CONVIENENCE_FEES;

  return (
    <div className="shoping-cart-price-details">
      <div>
        <b>PRICE DETAILS ({totalItems} items)</b>
      </div>
      <hr />
      <div>
        Total MRP <span className="total-mrp">₹{totalMrp}</span>
      </div>
      <div>
        Discount on MRP <span className="disc-on-mrp">-₹{totalDiscount}</span>
      </div>
      <div>
        Convenience Fee <span className="convenience-fee">₹99</span>
      </div>
      <hr />
      <b>
        <div>
          Total Amount <span className="total-amount">₹{finalPayment}</span>
        </div>
        <div></div>
      </b>
      <button className="place-order">PLACE ORDER</button>
    </div>
  );
};

export default CartPriceDetails;
