
import {API_URL} from '../const';
import { getCities, getPoints, getCars} from "./action.js";

const getCitiesFetch = () => async (dispatch) => {
  try{
    await fetch(`${API_URL}db/city`, {
      headers: {
        'X-Api-Factory-Application-Id' : '5e25c641099b810b946c5d5b',
      }
    })
      .then((res) => res.json())
      .then((res) => dispatch(getCities(res.data)))     
           
  } catch (e) {
    console.error(e);
  }
};
  
const getPointsFetch = () => async (dispatch) => {
  try {
   await fetch(`${API_URL}db/point`, {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
      .then((res) => res.json())      
      .then((res) => dispatch(getPoints(res.data)));
  } catch (e) {
    console.error(e);
  }
}

const getCarsFetch = () => async (dispatch) => {
  try {
    await fetch(`${API_URL}db/car?&limit=8` , {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
    .then((res) => res.json())      
    .then((res) => dispatch(getCars(res.data)));
  } catch (e) {
    console.error(e);
  }
}
export {
  getCitiesFetch, 
  getPointsFetch,
  getCarsFetch
}