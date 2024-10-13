import "./herosection.css";
import heroImage1 from "../../assets/images/hero_image_1.png";
import arrowImage1 from "../../assets/common/arrow_right.png";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-header">
        <h1>
          <span className="text-style1">the</span>{" "}
          <span className="text-style2">
            INSTRUMENT
            <br />
            DESIGN
          </span>{" "}
          <span className="text-style1">studio</span>
        </h1>
      </div>
      <div className="hero-description">
        <div className="hero-image">
          <img src={heroImage1} alt="hero-image" />
        </div>
        <span>
          The Instrument's a fresh design studio vibing out of London. We'll
          hook you up with killer branding, turn your design dreams into
          reality, and build a dope websites.
        </span>
      </div>
      <div className="hero-button">
        <div className="hero-button-container">
          <span>Work with us</span>
          <img src={arrowImage1} alt="arrow-image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
