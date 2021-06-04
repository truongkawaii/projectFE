import { call, put, takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-unresolved
import { toastError, toastSuccess } from '../../Helper/toastHelper';
import { Actions, getListCategoriesSuccess, hideModal, showModal } from '../actions';
import CategoriesServices from '../../Services/categories.services';

// Handler Data JOB
function* getListCategories(action) {
  try {
    // yield put(showModal());
    const res = yield call(CategoriesServices.listCategories);
    console.log(res, 'Categories');
    yield put(getListCategoriesSuccess(res));
    // yield put(hideModal());
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* editListCategories(action) {
  try {
    yield call(CategoriesServices.editCategories, action.payload);
    const res = yield call(CategoriesServices.listCategories);
    console.log(res, 'Categories');
    yield put(getListCategoriesSuccess(res));
    toastSuccess('Edit Category success')
  } catch (error) {
    toastError('Edit Category error');
  }
}

function* addNewCategories(action) {
 
  try {
    yield call(CategoriesServices.addNew, action.payload);
    const res = yield call(CategoriesServices.listCategories);
    console.log(res, 'Categories');
    yield put(getListCategoriesSuccess(res));
    toastSuccess('Add Category success')
  } catch (error) {
    toastError('Add Category error');
  }

}
function* deleteCategory(action) {
  try {
    yield call(CategoriesServices.deleteCategory, action.payload);
    const res = yield call(CategoriesServices.listCategories);
    console.log(res, 'Categories');
    yield put(getListCategoriesSuccess(res));
    toastSuccess('Delete Category success')
  } catch (error) {
    toastError('Delete Category error');
  }

}
export default function* categoriesSaga() {
  yield takeLatest(Actions.GET_LIST_CATEGORIES, getListCategories);
  yield takeLatest(Actions.EDIT_CATEGORIES, editListCategories);
  yield takeLatest(Actions.ADD_NEW_CATEGORY, addNewCategories);
  yield takeLatest(Actions.DELETE_CATEGORY, deleteCategory);

}
