
import {API_URL} from '../const';
import { getCities, getPoints, getCars, getRates, getOrderId} from "./action.js";

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

const getRateFetch = () => async (dispatch) => {
  try {
    await fetch(`${API_URL}db/rate` , {
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      },
    })
    .then((res) => res.json())      
    .then((res) => dispatch(getRates(res.data)));
  } catch (e) {
    console.error(e);
  }
}

const postOrderFetch = (order) => async (dispatch) => {
  try {
    await fetch("https://api-factory.simbirsoft1.com/api/db/order", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((res) => dispatch(getOrderId(res.data.id)));
  } catch (e) {
    console.error(e);
  }
};


export {
  getCitiesFetch, 
  getPointsFetch,
  getCarsFetch,
  getRateFetch,
  postOrderFetch
}