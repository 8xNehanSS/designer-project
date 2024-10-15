import "./footer.css";
import image from "../../assets/images/mailbox.png";
import arrowImage1 from "../../assets/common/arrow_right.png";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-image">
        <img src={image} alt="footer-image" />
      </div>

      <div className="footer-section-sub">
        <p>
          <span className="footer-text1">
            Hello
            <span /> <span className="footer-text2">at</span>{" "}
            <span className="footer-text1">INSTRUMENT</span>{" "}
            <span className="footer-text2">dot</span>{" "}
            <span className="footer-text1">com</span>
          </span>
        </p>
        <button className="hero-button-container">
          Get in Touch
          <img src={arrowImage1} alt="arrow-image" className="arrow-footer" />
        </button>
        <div className="footer-links">
          <p>About</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Dribble</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
