import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Products from './Catalogo';
import Searchbar from './Searchbar';
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Searchbar />
      <Products/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


