import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";
import "./mixins.scss";
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'redux-devtools-extension';


import reducer from './store/reduser';

const store = createStore(reducer, compose(applyMiddleware(thunk), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>  
      </Provider>
    </React.StrictMode>,
    document.getElementById('app')
  );
  