import React, { useRef } from "react";
import "./CarItem.scss";

class CarItem extends React.Component {
  render() {
    return (
      <>
        <article className="carlist__item">
          <button className="carlist__button" type="button">
            <h4 className="carlist__title">{this.props.title}</h4>
            <p className="carlist__price">{this.props.price}</p>
            <img
              className="carlist__picture"
              src={this.props.img}
              width="256"
              height="116"
            />
          </button>
        </article>
      </>
    );
  }
}

export default CarItem;
