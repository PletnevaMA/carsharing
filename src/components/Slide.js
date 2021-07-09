import React from 'react';
import './Slide.module.scss';
import ButtonSlider from './ButtonSlider';

class Slide extends React.Component {
    render(){
        return(
            <>
             <img src = {this.props.img}></img><span class="overlayed"></span>
             <div className = "slide">
                 <p className = "slide__title">{this.props.title1}</p>
                 <p className = "slide__description">{this.props.description1}</p>
                 <ButtonSlider color = {this.props.button_color} />
             </div>
            
            </>
        )
    }
}
export default Slide;