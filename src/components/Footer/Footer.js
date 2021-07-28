import React from 'react';
import "./Footer.module.scss";

class Footer extends React.Component {
    render() {
        return(
            <footer className = "footer">
                 <div className = "footer__year">© 2016-2019 «Need for drive»</div>
                <div className = "footer__tel">8 (495) 234-22-44</div>
               
                
            </footer>
        )
    }
}

export default Footer;