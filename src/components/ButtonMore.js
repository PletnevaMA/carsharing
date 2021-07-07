import React from 'react';
import "./ButtonMore.module.scss";

class ButtonMore extends React.Component {
    render() {
        return(
            <div>
                <button className = "button-more">
                    <p className = "button-more__text">{this.props.text}</p>
                </button>
            </div>
        )
    }
}

export default ButtonMore;