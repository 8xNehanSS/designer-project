import "./labelcontainer.css";

function LabelContainer(props) {
  const image = props.image;
  const text = props.text;
  const color = props.color;
  return (
    <div className="label-container" style={{ backgroundColor: color }}>
      <img src={image} alt="label-image" className="label-container-image" />
      <div className="label-text">{text}</div>
    </div>
  );
}

export default LabelContainer;
