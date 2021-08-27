import { Action} from "../const";

const setTab = (tab) => ({
    type: Action.SET_TAB,
    payload: tab
});

const addVisitedTab = (tab) => ({
  type: Action.ADD_VISITED_TAB,
  payload: tab
});

const setIsOrdered = (bool) => ({
  type: Action.SET_IS_ORDERED,
  payload: bool
});

const setActive = (active) => ({
  type: Action.SET_ACTIVE,
  payload: active
});

const setPosition = (position) => ({
    type: Action.SET_POSITION,
    payload: position
});

const setAddress = (address) => ({
  type: Action.SET_ADDRESS,
  payload: address
});
const setCoord = (coord) => ({
  type: Action.SET_COORD,
  payload: coord
});

const setCar = (car) => ({
    type: Action.SET_CAR,
    payload: car
});

const setPrice = (price) => ({
  type: Action.SET_PRICE,
  payload: price
});
const setImage = (image) => ({
  type: Action.SET_IMAGE,
  payload: image
});

const setNumber = (number) => ({
  type: Action.SET_NUMBER,
  payload: number
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

const setStartDate = (date) => ({
    type: Action.SET_START_DATE,
    payload: date
});

const setFinishDate = (date) => ({
  type: Action.SET_FINISH_DATE,
  payload: date
});

const getCities = (response) => ({
  type: Action.GET_CITIES,
  payload: response
})

const getPoints = (response) => ({
  type: Action.GET_POINTS,
  payload: response
})

const getCars = (response) => ({
  type: Action.GET_CARS, 
  payload: response
})

const getRates = (response) => ({
  type: Action.GET_RATES, 
  payload: response
})

const getOrderId = (id) => ({
  type: Action.GET_ORDER_ID, 
  payload: id
})




  
export {
    setTab,
    addVisitedTab,
    setIsOrdered,
    setActive,
    setPosition,
    setAddress,
    setCoord,
    setCar,
    setPrice,
    setImage,
    setNumber,
    setFilter,
    setColor,
    setRate,
    setServices,
    setStartDate, 
    setFinishDate,
    getCities,
    getPoints,
    getCars,
    getRates,
    getOrderId
}