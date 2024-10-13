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
        {/* Duplicate the content for seamless scrolling */}
        <p>Samsung</p>
        <p>Meta</p>
        <p>Apple</p>
        <p>Intel Corporation</p>
        <p>Tesla Inc.</p>
      </div>
    </div>
  );
}

export default Banner;
