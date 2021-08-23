import {
  Action,
  Tabs,
  Colors,
  CarFilters,
  RateInput,
  ServicesInput,
} from "../const";

const initialState = {
  tab: Tabs.get("POSITION"),
  isActive: false,
  city: "",
  point: "",
  address: "",
  coord: [],
  car: "",
  price: "",
  image: "",
  carNumber: "",
  cities: [],
  points: [],
  cars: [],
  filter: CarFilters[0].label,
  color: Colors.ALL_COLOR,
  rate: RateInput[0].label,
  services: [ServicesInput[0].label],
  startDate: "",
  finishDate: "",
  placemarks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_TAB:
      return {
        ...state,
        tab: action.payload,
      };

      case Action.SET_ACTIVE:
        return {
          ...state,
          isActive: action.payload,
        };
    case Action.SET_POSITION:
      return {
        ...state,
        city: action.payload.city,
        point: action.payload.point,
      };

    case Action.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

      case Action.SET_COORD:
        return {
          ...state,
          coord: action.payload,
        };
  
    case Action.SET_CAR:
      return {
        ...state,
        car: action.payload,
      };

    case Action.SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };

    case Action.SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case Action.SET_NUMBER:
      return {
        ...state,
        carNumber: action.payload,
      };
    case Action.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case Action.SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    case Action.SET_RATE:
      return {
        ...state,
        rate: action.payload,
      };

    case Action.SET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case Action.SET_DATE:
      return {
        ...state,
        startDate: action.payload.startDate,
        finishDate: action.payload.finishDate,
      };

    case Action.GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    case Action.GET_POINTS:
      return {
        ...state,
        points: action.payload,
      };

    case Action.GET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    default: {
      return state;
    }
    
  }
};

export default reducer;
