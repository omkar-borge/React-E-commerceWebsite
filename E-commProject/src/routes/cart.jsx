import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import CartPriceDetails from "../components/cartPriceDetails";

const Cart = () => {
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
  // console.log(finalItems);
  return (
    <>
      <main>
        <div className="cart">
          <div
            className="shoping-cart"
            // style={{
            //   backgroundColor: "Blue",
            //   width: "250px",
            //   height: "500px",
            //   border: "2px solid black",
            // }}
          >
            {finalItems.map((item) => (
              <CartItem item={item}></CartItem>
            ))}
          </div>
          <CartPriceDetails />
        </div>
      </main>
    </>
  );
};

export default Cart;
