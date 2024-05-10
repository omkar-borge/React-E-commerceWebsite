const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="foot">
          <div className="aboutus" style={{ color: "white" }}>
            <b style={{ color: "grey" }}>About us</b>
            <a>Contact</a>
            <a>About us</a>

            <a>Press</a>
            <a>Cleartrip</a>
            <a>Corporate information</a>
          </div>
          <div className="help" style={{ color: "white" }}>
            <b style={{ color: "grey" }}>Help</b>
            <a>Payments</a>
            <a>Shipping</a>
            <a>Cancellation & Returns</a>
            <a>FAQ</a>
            <a>Report</a>
          </div>
          <div className="consumerpolicy" style={{ color: "white" }}>
            <b style={{ color: "grey" }}>Consumer Policy</b>
            <a>Cancellation & Return</a>
            <a>Terms of use</a>
            <a>Security</a>
            <a>Privacy</a>
            <a>Sitemap</a>
            <a>ERP Compliance</a>
          </div>
          <div className="social" style={{ color: "white" }}>
            <b style={{ color: "grey" }}>Social</b>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>YouTube</a>
          </div>
        </div>
        <div className="endfoot">
          <a>
            <i className="fa-solid fa-store" style={{ color: "goldenrod" }}></i>{" "}
            Become a seller
          </a>
          <a>
            <i
              className="fa-brands fa-adversal"
              style={{ color: "goldenrod" }}
            ></i>
            Advertise
          </a>
          <a>
            <i className="fa-solid fa-gift" style={{ color: "goldenrod" }}></i>
            Giftcards
          </a>
          <a>
            <i
              className="fa-solid fa-handshake-angle"
              style={{ color: "goldenrod" }}
            ></i>
            Help centers
          </a>
          <div className="card"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
