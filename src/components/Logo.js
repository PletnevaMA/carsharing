import React from "react";
import "./Logo.module.scss";
import map from "../images/map.svg";
import { ReactSVG } from 'react-svg';
class Logo extends React.Component {
  render() {
   
    return (
        <>
         <div className = "logo">
             <div className = "logo__text">Need for drive</div>
            
           <div className = "logo__map"><ReactSVG src = {map}/> Ульяновск</div>
        </div>

        </>
    )
  }
}

export default Logo;