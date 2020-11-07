import React from 'react';
function Card(props) {
  return (
    <div className="Card">
      <h3>{props.type} choice</h3>
      <h1>{props.title}</h1>
      <button onClick={() => {props.makeChoice(props.type, props.title)}}>Select</button>
    </div>
  );
}
export default Card;
