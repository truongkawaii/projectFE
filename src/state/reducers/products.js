import { Actions } from "../actions";

const initialState = {
  data: null,
  dataProductSort: null,
  total: 0,
  perPage: 6,
  showModal: false,
};
function products(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ALL_PRODUCT_SUCCESS:
      {
        const products = action.payload;
        const pagiData = products.slice(0, 6);
        return {
          ...state,
          data: action.payload,
          dataProductSort: pagiData,
          total: action.payload.length,
        };
      }
      case Actions.FILTER_PRICE_PRODUCT:{
        const value = action.payload;
        const filterProduct =[...state.data]?.filter(item=>item.price>=parseInt(value))||[]
        const pagiData = filterProduct.slice(0, 6);
        return {
          ...state,
          dataProductSort: pagiData,
        };
      }
    case Actions.SEARCH_NAME_PRODUCT: {
      const name = action.payload;
      const filterProduct = [...state.data].filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
      const pagiData = filterProduct.slice(0, 6);
      return {
        ...state,
        dataProductSort: pagiData,
      };
    }
    case Actions.FILTER_CATEGORY: {
      const id = action.payload;
      const filterProduct = [...state.data].filter(item => item.category.id === parseInt(id));
      const pagiData = filterProduct.slice(0, 6);
      return {
        ...state,
        dataProductSort: pagiData,
      };
    }

    case Actions.SHOW_MODAL: {

      return {
        ...state,
        showModal: true,
      };
    }
    case Actions.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
      };
    }
    case Actions.PAGINATION_DATA: {
      const { payload: orderPage = 1 } = action;
      const newData = [...state.data];
      const begin = (orderPage - 1) * state.perPage;
      const end = orderPage * state.perPage;
      const newDataUpdate = newData.slice(begin, end);
      return {
        ...state,
        dataProductSort: newDataUpdate,
        showModal: false
      };
    }
    default:
      return state;
  }


}
export default products;
