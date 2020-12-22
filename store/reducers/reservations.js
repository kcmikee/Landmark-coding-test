import ReservationItem from "../../models/reservations";
import { MAKE_RESERVATION, REMOVE_RESERVATION } from "../actions/reservations";

const initState = {
  rooms: {},
  subTotal: 0,
  vat: 0.075,
  consumption: 0.005,
  totalAmount: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case MAKE_RESERVATION:
      const addRoom = action.room;
      const roomPrice = addRoom.price;
      const roomTitle = addRoom.title;

      let updatedOrNewCartItem;

      if (state.rooms[addRoom.id]) {
        //already exist
        updatedOrNewCartItem = new ReservationItem(
          state.rooms[addRoom.id].quantity + 1,
          roomPrice,
          roomTitle,
          state.rooms[addRoom.id].sum + parseInt(roomPrice)
        );
      } else {
        updatedOrNewCartItem = new ReservationItem(
          1,
          roomPrice,
          roomTitle,
          roomPrice
        );
      }
      return {
        ...state,
        rooms: { ...state.rooms, [addRoom.id]: updatedOrNewCartItem },
        subTotal: parseInt(state.subTotal) + parseInt(roomPrice),
        //   vat: parseInt(state.vat) * parseInt(state.subTotal),
        //   consumption: parseInt(state.consumption) * parseInt(state.subTotal),
        //   totalAmount: (parseInt(state.subTotal) +parseInt(roomPrice)) + (parseInt(state.vat) * parseInt(state.subTotal)) + (parseInt(state.consumption) * parseInt(state.subTotal))
      };
    case REMOVE_RESERVATION:
      const selectedCartItem = state.rooms[action.rid];
      const currentQty = selectedCartItem.quantity;
      let updateCartItems
      if (currentQty > 1) {
        const updateCartItem = new ReservationItem(
          currentQty - 1,
          selectedCartItem.roomPrice,
          selectedCartItem.roomTitle,
          parseInt(selectedCartItem.sum) - parseInt(selectedCartItem.roomPrice)
         );
         updateCartItems = {...state.rooms, [action.rid]:updateCartItem}
      } else {
        updateCartItems = { ...state.rooms };
        delete updateCartItems[action.rid];
      }
      return{
        ...state,
        rooms: updateCartItems,
        subTotal: parseInt(state.subTotal) - parseInt(selectedCartItem.roomPrice), 
      }
  }
//   console.warn(selectedCartItem,currentQty)
  return state;
};
