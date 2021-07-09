
import React from 'react';
import "./Slider.module.scss";
import ButtonMore from './ButtonMore';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import Slide from './Slide';
import slide1 from '../images/1.png';
import slide2 from '../images/2.png';
import slide3 from '../images/3.png';
import slide4 from '../images/4.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slider() {
    
    return <React.Fragment>
        <Swiper id = "main"  pagination={{ clickable: true }} navigation>
        <SwiperSlide>
                <Slide title1 ="Бесплатная парковка" description1="Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах." img = {slide1} button_color = "button_green"/>
        </SwiperSlide>
        <SwiperSlide>
                <Slide title1 = "Страховка" description1 = "Полная страховка автомобиля" img = {slide2} button_color = "button_blue"/>
        </SwiperSlide>
        <SwiperSlide>
                <Slide title1 = "Бензин" description1 = "Полный бак на любой запраке города за наш счет" img = {slide3} button_color = "button_pink"/>
        </SwiperSlide>
        <SwiperSlide>
                <Slide title1 = "Обслуживание" description1 = "Автомобиль проходит еженедельное ТО" img = {slide4} button_color = "button_purple"/>
        </SwiperSlide>
        </Swiper>
    </React.Fragment>
}

export default Slider;