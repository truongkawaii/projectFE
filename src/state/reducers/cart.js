import { toastSuccess } from '../../Helper/toastHelper';
import { Actions } from '../actions';

const initialState = {
  data: JSON.parse(localStorage.getItem("cart"))  || [],
  total:JSON.parse(localStorage.getItem("cart"))?.length || 0

};

const cart = (state = initialState, action) => {
  switch (action.type) {
   
    case Actions.UPDATE_CART:{
      const data = action.payload;
      console.log(data,'data');
      localStorage.setItem('cart',JSON.stringify( [...data]));
      toastSuccess('Update Cart Success')
      return {...state,data}
    }
    case Actions.CLEAR_CART:{
      localStorage.removeItem('cart');
      return {
        data:[],
        total:0
      }
    }
    case Actions.ADD_CART: {
      
      const item = action.payload;
      let isHave = false;
      
      const data = [...state.data].map(product => {
        if (item.id === product.id) {
          isHave = true;
          product.count += 1;
        }
        return product;
      })
      if (isHave) {
        localStorage.setItem('cart', JSON.stringify( [...data]));
        return {
          ...state,
          data
        };
      }
      else {
        localStorage.setItem('cart',JSON.stringify(  [...state.data, { ...item, count: 1 }]));
        return {
          ...state,
          data: [...state.data, { ...item, count: 1 }],
          total:state.total+1
        };
      }
  
    }

    default:
      return state;
  }
};

export default cart;
