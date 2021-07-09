import React from 'react';
import './ButtonSlider.module.scss';


class ButtonSlider extends React.Component {
    render(){
        return(
            
            <button className = {this.props.color}><p className = "button_text">Подробнее</p></button>
           
        )
    }
}
export default ButtonSlider;