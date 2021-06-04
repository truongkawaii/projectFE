import { Actions } from '../actions';

const initialState = {
  data : null,
  dataJobsSort: null,
 
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_LIST_CATEGORIES_SUCCESS: {
      // eslint-disable-next-line camelcase
    //   const { data, total, per_page } = action.payload;
      // const pagiData = data.slice(0, state.initialNews);
      return {
        ...state,
        data : action.payload,
       
        // paginationData: pagiData,
      };
    }
    
    default:
      return state;
  }
};

export default categories;
