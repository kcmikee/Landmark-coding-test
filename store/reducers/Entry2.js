import Entry from '../../models/entry2'
import { BOOK_ENTRY, REMOVE_ENTRY } from "../actions/Entry";

const initState = {
  entry: {},
  subTotal: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case BOOK_ENTRY:
      const addEntry = action.entry;
      const entryPrice = addEntry.price;
      const entryTitle = addEntry.title;

      let updatedOrNewCartItem;

      if (state.entry[addEntry.id]) {
        //already exist
        updatedOrNewCartItem = new Entry(
          state.entry[addEntry.id].quantity + 1,
          entryPrice,
          entryTitle,
          parseInt(state.entry[addEntry.id].sum) + parseInt(entryPrice)
        );
      } else {
        updatedOrNewCartItem = new Entry(
          1,
          entryPrice,
          entryTitle,
          entryPrice
        );
      }
      return {
        ...state,
        entry: { ...state.entry, [addEntry.id]: updatedOrNewCartItem },
        subTotal: parseInt(state.subTotal) + parseInt(entryPrice),
      };

      
    case REMOVE_ENTRY:
      const selectedCartItem = state.entry[action.eid];
      const currentQty = selectedCartItem.quantity;
      let updateCartItems
      if (currentQty > 1) {
        const updateCartItem = new Entry(
          currentQty - 1,
          selectedCartItem.entryPrice,
          selectedCartItem.entryTitle,
          parseInt(selectedCartItem.sum) - parseInt(selectedCartItem.entryPrice)
         );
         updateCartItems = {...state.entry, [action.eid]:updateCartItem}
      } else {
        updateCartItems = { ...state.entry };
        delete updateCartItems[action.eid];
      }
      return{
        ...state,
        entry: updateCartItems,
        subTotal: parseInt(state.subTotal) - parseInt(selectedCartItem.entryPrice), 
      }
  }
//   console.warn(selectedCartItem,currentQty)
  return state;
};
