import ProductItem from '../../models/productCart'
import { MAKE_PURCHASE, REMOVE_PURCHASE } from "../actions/products";

const initState = {
  products: {},
  subTotal:0,
  totalAmount:0 
};

export default (state = initState, action) => {
  switch (action.type) {
    case MAKE_PURCHASE:
      const addProduct = action.product;
      const productPrice = addProduct.price;
      const productTitle = addProduct.title;
      
      let updatedOrNewCartItem;

      if (state.products[addProduct.id]) {
        //already exist
        updatedOrNewCartItem = new ProductItem(
          state.products[addProduct.id].quantity + 1,
          productPrice,
          productTitle,
          parseInt(state.products[addProduct.id].sum) + parseInt(productPrice)
        );
      } else {
        updatedOrNewCartItem = new ProductItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
      }
      return {
          ...state,
          products: { ...state.products, [addProduct.id]: updatedOrNewCartItem },
          subTotal: parseInt(state.subTotal) + parseInt(productPrice),
        //   vat: parseInt(state.vat) * parseInt(state.subTotal),
        //   consumption: parseInt(state.consumption) * parseInt(state.subTotal),
        //   totalAmount: (parseInt(state.subTotal) +parseInt(roomPrice)) + (parseInt(state.vat) * parseInt(state.subTotal)) + (parseInt(state.consumption) * parseInt(state.subTotal))
        };
        case REMOVE_PURCHASE:
      const selectedCartItem = state.products[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updateCartItems
    //   console.warn(selectedCartItem,currentQty)
      if (currentQty > 1) {
        const updateCartItem = new ProductItem(
          currentQty -1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - parseInt(selectedCartItem.productPrice)
         );
         updateCartItems = {...state.products, [action.rid]:updateCartItem}
      } else {
        updateCartItems = { ...state.products };
        delete updateCartItems[action.pid];
      }
      return{
        ...state,
        products: updateCartItems,
        subTotal: parseInt(state.subTotal) - parseInt(selectedCartItem.productPrice),        
      }
  
  }
  return state;
};
