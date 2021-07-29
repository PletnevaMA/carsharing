import {Action, Tabs, Colors} from '../const';

const initialState = {
    tab: Tabs.get('POSITION'),
    city: '',
    point: '',
    car: '',
    filter: "all-models",
    color: Colors.ALL_COLOR,
    rate: "by-day",
    services: [],
    startDate: '',
    finishDate: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.SET_TAB:
            return {
                ...state,
                tab: action.payload
            }

        case Action.SET_POSITION:
            return {
                ...state,
                city: action.payload.city,
                point: action.payload.point
            }

        case Action.SET_CAR:
            return {
                ...state,
                car: action.payload
            }

        case Action.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }

        case Action.SET_COLOR:
            return {
                ...state,
                color: action.payload
            }

        case Action.SET_RATE:
            return {
                ...state,
                rate: action.payload
            }

        case Action.SET_SERVICES:
            return {
                ...state,
                services: action.payload
            }

        case Action.SET_DATE:
            return {
                ...state,
                startDate: action.payload.startDate,
                finishDate: action.payload.finishDate
            }       
        default: {
            return state;
        }
    }
}

export default reducer;