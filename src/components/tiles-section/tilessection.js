import "./tilessection.css";
import image1 from "../../assets/images/persons1.png";
import image2 from "../../assets/images/persons2.png";
import image3 from "../../assets/images/persons3.png";

function TilesSection() {
  return (
    <div className="tiles-section">
      <div className="tiles-card">
        <div>
          <img src={image1} />
          <p className="tiles-card-name">ZARA KENNEDY</p>
          <p className="tiles-card-title">Founder</p>
        </div>
      </div>
      <div className="tiles-card">
        <div>
          <img src={image2} />
          <p className="tiles-card-name">RILEY HOWELLS</p>
          <p className="tiles-card-title">Developer</p>
        </div>
      </div>
      <div className="tiles-card">
        <div>
          <img src={image3} />
          <p className="tiles-card-name">LILY THOMPSON</p>
          <p className="tiles-card-title">Art Director</p>
        </div>
      </div>
    </div>
  );
}

export default TilesSection;
