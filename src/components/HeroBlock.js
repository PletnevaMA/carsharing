import React from 'react';
import "./HeroBlock.module.scss";

class HeroBlock extends React.Component {
   render() {
       return(
        <>
        <div className = "hero-block">
            <div className = "hero-block__carsharing">Каршеринг</div>
            <div className = "hero-block__drive">Need for drive</div>
            <div className = "hero-block__arenda">Поминутная аренда авто твоего города</div>
        </div>
        </>
       )
   }
}

export default HeroBlock;