import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";
import "./mixins.scss";
import { createStore, applyMiddleware} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import reducer from './store/reduser';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

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
  