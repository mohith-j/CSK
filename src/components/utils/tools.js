import React from "react";
import { Link } from "react-router-dom";

import LionCskLogo from "../../Resources/images/logos/Chennai_Super_Kings_Logo.svg.png";

export const LionCsk = (props) => {
  const template = <div 
        className="img_cover"
        style={{
            width:props.width,
            height:props.height,
            background: `url(${LionCskLogo}) no-repeat`

        }}
    >


  </div>
  if(props.link){
    return(
        <Link className="link_logo" to={props.linkTo}>
            {template}
        </Link>
    )
  }else{
    return template
  }
};
