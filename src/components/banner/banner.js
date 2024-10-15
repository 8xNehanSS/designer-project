import "./banner.css";

function Banner() {
  return (
    <div className="banner-section">
      <div className="banner-content">
        <p>Samsung</p>
        <p>Meta</p>
        <p>Apple</p>
        <p>Intel Corporation</p>
        <p>Tesla Inc.</p>
      </div>
      <div className="banner-footer">
        <p>Trusted by many</p>
      </div>
      <div className="banner-capabilities">
        <h3>Our Capabilities</h3>
        <div className="banner-capabilities-sub">
          <div>
            <p>Web design</p>
            <p>Product design</p>
            <p>UX & UI design</p>
            <p>Art direction</p>
            <p>Dynamic design</p>
          </div>
          <div>
            <p>Visual design</p>
            <p>Ecommerce</p>
            <p>Back-end</p>
            <p>Front-end</p>
            <p>Responsive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
