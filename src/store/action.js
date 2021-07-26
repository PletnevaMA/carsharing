import { Action } from "../const";

const setTab = (tab) => ({
    type: Action.SET_TAB,
    payload: tab
});

const setPosition = (position) => ({
    type: Action.SET_POSITION,
    payload: position
});

const setCar = (car) => ({
    type: Action.SET_CAR,
    payload: car
});

const setFilter = (filter) => ({
    type: Action.SET_FILTER,
    payload: filter
})

const setColor = (color) => ({
    type: Action.SET_COLOR,
    payload: color
});

const setRate = (rate) => ({
    type: Action.SET_RATE,
    payload: rate
});

const setServices = (services) => ({
    type: Action.SET_SERVICES,
    payload: services
});

const setDate = (date) => ({
    type: Action.SET_DATE,
    payload: date
});


export {
    setTab,
    setPosition,
    setCar,
    setFilter,
    setColor,
    setRate,
    setServices,
    setDate
}