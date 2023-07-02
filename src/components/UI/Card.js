import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; //Ability to pass other components to this custom components as 'text'
};

export default Card;
