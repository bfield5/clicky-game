// import React from "react";
// import "./FriendCard.css";

// const FriendCard = props => (
//   <div className="friendCard img-container">
  
//      <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div> 
    
     
  
//     <span className="remove" onClick={() => props.deleteFriend(props.id)}></span>
//   </div>
// );

// export default FriendCard;


import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div
        role="img"
        aria-label="click item" 
        className="friendCard"
        style={{ backgroundImage: `url("${props.image}")` }}
        value={props.id}
        onClick={() => props.handleClick(props.id)}
    /> 
);

export default FriendCard;