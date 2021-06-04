import { combineReducers } from 'redux';
import loginReducer from './login';
import JobReducer from './jobs';
import userReducer from './user';
import dataUsersReducer from './dataUser';
import dataRecruitment from './recruitment';
import dataUserRec from './dataUserRec';
import productReducer from './products';
import categoriesReducer from './categories';
import cartReducer from './cart';
// Combine reducer 

const rootReducer = combineReducers({
  loginUser : loginReducer,
  jobs : JobReducer,
  infoUser:userReducer,
  listUser:dataUsersReducer,
  listRecruitment:dataRecruitment,
  listUserSeedRec:dataUserRec,
  products:productReducer,
  categories:categoriesReducer,
  cart:cartReducer
});
 
export default rootReducer;