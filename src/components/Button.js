import React from 'react';
import "./Button.module.scss";

class Button extends React.Component {
    render() {
        return(
            <div>
                <button className = "button-standart">
                    <p className = "button-standart__text">{this.props.text}</p>
                </button>
            </div>
        )
    }
}

export default Button;