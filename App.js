import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import LandMark from "./navigation/nav";

import roomReducer from "./store/reducers/rooms";
import reservationReducer from './store/reducers/reservations'
import productReducer from './store/reducers/products'
import secondReducer from './store/reducers/secondReservation'
import Entry from './store/reducers/Entry2'
import Entry1 from './store/reducers/Entry1'
const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
  products: productReducer,
  productCart : secondReducer,
  entryCart: Entry,
  entry : Entry1
});

const store = createStore(rootReducer);

export default App = () => {
  return (
    <Provider store={store}>
      <LandMark />
    </Provider>
  );
};
