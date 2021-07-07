import React from "react";
import BurgerMenu from "./components/BurgerMenu";
import Logo from "./components/Logo";
import HeroBlock from "./components/HeroBlock";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BurgerMenu />
        <div className="container__left">
          <div className="container__left__content">
            <Logo />
            <HeroBlock />
            <Button text="Забронировать" />
            <Footer />
          </div>
        </div>
        <div className="container__rigth">
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
