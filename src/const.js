const Path = {
    MAIN: '/carsharing/',
    ORDERPAGE: '/order',
    CHECK: '/order/step5',
    POSITION: '/order/step1',
    CAR: '/order/step2',
    OPTIONS: '/order/step3',
    ORDER: '/order/step4',
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
        name: "pickpoint",     
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
    SET_POSITION: "setPosition",
    SET_CAR: "setCar",
    SET_FILTER: "setFilter",
    SET_COLOR: "setColor",
    SET_DATE: "setDate",
    SET_RATE: "setRate",
    SET_SERVICES: "setServices",
};

const Colors = {
    ALL_COLOR: "all-color",
    RED: "red",
    BLUE: "blue"
}

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
    ServicesInput
}