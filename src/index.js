import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import {cartReducer} from "./reducers/cartReducer";

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
