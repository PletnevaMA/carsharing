import React from "react";
import Logo from "./components/Logo/Logo";
import HeroBlock from "./components//MainPage/HeroBlock/HeroBlock";
import Button from "./components/MainPage/Button/Button";
import Footer from "./components/Footer/Footer";
import Slider from "./components/MainPage/Slider/Slider";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <div className="container__left">
          <div className="container__left__content">
            <Logo />
            <HeroBlock />
            <Button text="Забронировать" />
            <Footer />
          </div>
        </div>
        <div className="container__slider">
          <Slider />
        </div>
      </>
    );
  }
}

export default MainPage;
