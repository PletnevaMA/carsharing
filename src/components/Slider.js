
import React from 'react';
import "./Slider.module.scss";
import ButtonMore from './ButtonMore';

class Slider extends React.Component {
    render() {
        return(
            <div className = "slider">
                <div className = "slider__text">
                    <div className = "slider__parking">Бесплатная парковка</div>
                    <div className = "slider__description">Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</div>
                    <ButtonMore text= "Подробнее"/>
                </div>
            </div>
        )
    }
}
    
export default Slider;