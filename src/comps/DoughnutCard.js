import React from 'react'

function Card(props) {
  const mySentence = props.name;
  const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  return (
  <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={props.image} alt={props.name}/>
    <div className="card-body">
      <p className="card-text">{finalSentence}</p>
    </div>
  </div>
  );
}

export default Card