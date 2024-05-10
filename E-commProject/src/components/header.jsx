import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart);

  return (
    <header className="header-items">
      <Link to="\index.html" /* "or /" */>
        <img
          className="logo hover-header-items"
          src="images\logo.png"
          alt="logo"
        />
      </Link>
      <div className="search-bar">
        <select name="Categories" className="select-option">
          <option value="All Categories">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing & Accessories">Clothing & Accessories</option>
        </select>
        <input
          className="search-input"
          type="text"
          placeholder="Search BrightCart.in"
          readOnly
        />
        <div className="search-icon search-hover">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="user-login hover-header-items hover-bgcolor">
        <i className="fa-solid fa-user"> </i>
        <span className="user-login-text">Login</span>
      </div>
      <Link
        to="/cart"
        className="shopping-cart hover-header-items hover-bgcolor"
      >
        <i className="fa-solid fa-cart-shopping"></i>
        {cart.length > 0 ? (
          <span className="cart-count">{cart.length}</span>
        ) : null}
      </Link>
    </header>
  );
};

export default Header;
