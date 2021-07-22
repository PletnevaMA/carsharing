import React from "react";
import CarItem from "../CarItem/CarItem";
import "./CarsList.scss";
import elantra from "../../../../images/elantra.png";
import i30 from "../../../../images/i30n.png";
import creta from "../../../../images/creta.png";
import sonata from "../../../../images/sonata.png";
class CarsList extends React.Component {
  render() {
    return (
      <div className = "step__content">
        <div className="carslist">
        <CarItem title="ELANTRA" price="12 000 - 25 000 ₽" img={elantra} />
        <CarItem title="i30 N" price="10 000 - 32 000 ₽" img={i30} />
        <CarItem title="CRETA" price="12 000 - 25 000 ₽" img={creta} />
        <CarItem title="sonata" price="12 000 - 32 000 ₽" img={sonata} />
        <CarItem title="ELANTRA" price="12 000 - 25 000 ₽" img={elantra} />
        <CarItem title="i30 N" price="10 000 - 32 000 ₽" img={i30} />
        <CarItem title="CRETA" price="12 000 - 25 000 ₽" img={creta} />
        <CarItem title="sonata" price="12 000 - 32 000 ₽" img={sonata} />
      </div>
      </div>
      
    );
  }
}
export default CarsList;
