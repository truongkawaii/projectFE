import { all } from 'redux-saga/effects';
import handlerJobSaga from './handlerJobSaga';
import loginSaga from './loginSaga';
import handlerListUserSaga from './usersSaga';
import feedBackSaga from './feedBackSaga';
import handlerListRecruitmentSaga from './recruitment';
import productSaga from './productSaga';
import categoriesSaga from './categoriesSaga';
export default function* rootSaga() {
  yield all([
    loginSaga(),
    handlerJobSaga(),
    handlerListUserSaga(),
    feedBackSaga(), 
    handlerListRecruitmentSaga(),
    productSaga(),
    categoriesSaga()
  ]);
}