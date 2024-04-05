import React from "react";

function Highlight(props) {
  const { highLight } = props;


  return (
    <div>
        <div><img src={highLight.icon} alt="" /></div>
        <div>{highLight.content}</div>
        <div><img src={highLight.profile} alt="" /></div>
        <div>{highLight.username}</div>
        <div>{highLight.position}</div>
        <div>{highLight.company}</div>


        
      
    </div>
  );
}

export default Highlight;
