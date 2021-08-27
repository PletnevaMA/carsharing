const Path = {
    MAIN: '/carsharing/',
    ORDERPAGE: '/order',
    CHECK: '/order/complete',
    POSITION: '/order/position',
    CAR: '/order/car',
    OPTIONS: '/order/options',
    ORDER: '/order/order',
}
const Tabs = new Map([
    ['POSITION', 'position'],
    ['CAR', 'car'],
    ['OPTIONS', 'options'],
    ['ORDER', 'order']
]);

const TitleTabs = {
    position: 'Местоположение',
    car: 'Модель',
    options: 'Дополнительно',
    order: 'Итого'
};


const PositionPosints = [
    {
        name: "city",
        label: "Город"
    },
    {
        name: "point",     
        label: "Пункт выдачи"
    }
  ];


  const CarFilters = [
    {
        name: "all-models",
        label: "Все модели"
    },
    {
        name: "economy",
        label: "Эконом"
    },
    {
        name: "premium",
        label: "Премиум"
    },
  ]

  const DateInput = [
    {
        name: "startDate",
        label: "С"
    },
    {
        name: "finishDate",
        label: "По"
    }
  ];

  const RateInput = [
    {
        name: "by-minute",
        label: "Поминутно, 7₽/мин"
    },
    {
        name: "by-day",
        label: "На сутки, 1999₽/мин"
    }
];
const ServicesInput = [
    {
        name: "full-tank",
        label: "Полный бак, 500₽"
    },
    {
        name: "child-seat",
        label: "Детское кресло, 200₽"
    },
    {
        name:  "right-wheel",
        label: "Правый руль, 1600₽"
    },
]
const Action= {
    SET_TAB: "setTab",
    ADD_VISITED_TAB: "addVisitedTab",
    SET_IS_ORDERED: "setIsOrdered",
    SET_ACTIVE: "isActive",
    SET_POSITION: "setPosition",
    SET_ADDRESS: "setAddress",
    SET_COORD: "setCoord",
    SET_CAR: "setCar",
    SET_PRICE : "setPrice",
    SET_IMAGE: "setImage",
    SET_NUMBER: "setCarNumber",
    SET_FILTER: "setFilter",
    SET_COLOR: "setColor",
    SET_START_DATE : "setStartDate",
    SET_FINISH_DATE : "setFinishDate",    
    SET_RATE: "setRate",
    SET_SERVICES: "setServices",
    GET_CITIES : "getCities",
    GET_POINTS : "getPoints",
    GET_CARS : "getCars",
    GET_RATES: "getRates",
    CREATE_PLACEMARK : "createPlacemark",
    GET_ORDER_ID: "getOrderId",
    ADD_ORDER: "addOrder"
};

const Colors = {
    ALL_COLOR: "Любой цвет",
    RED: "Красный",
    BLUE: "Голубой"
}
const API_URL = "https://api-factory.simbirsoft1.com/api/";

export {
    Path,
    Tabs,
    TitleTabs, 
    DateInput,
    PositionPosints,
    Action,
    CarFilters,
    Colors,
    RateInput,
    ServicesInput,
    API_URL
}