import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getAllProductSuccess, getListRecruitmentSuccess, getListUserRecSuccess, getListUserSuccess } from '../actions';
import UserService from '../../Services/user.service';
import CandidateService from '../../Services/cadidate.service';
import UpfileService from '../../Services/upfile.service';
import { toastError, toastSuccess } from '../../Helper/toastHelper';
import ProductsService from '../../Services/product.service';
import { BASE_URL } from '../../constant/constant';



function* getListProducts() {

  try {

    const res = yield call(ProductsService.listProducts);
    yield put(getAllProductSuccess(res));

  } catch (error) { }
}
function* handlerRemoveProduct(action) {
  try {
    yield call(ProductsService.removeProduct, action.payload)
    const res = yield call(ProductsService.listProducts);
    yield put(getAllProductSuccess(res));
    toastSuccess('Xóa sản phẩm thành công!!')

  } catch (error) { }
}

function* handlerAddProduct(action) {
  const { image } = action.payload;
  const product = action.payload;
  const data = new FormData()
  data.append('file', image)
  try {
    const img = yield call(UpfileService.upfile, data);
    console.log({ ...product, image: `${BASE_URL}/${img.path}` });
    yield call(ProductsService.addProduct, { ...product, image: `${BASE_URL}/${img.path}` });
    yield toastSuccess('Thêm sản phẩm mới thành công!');
    const res = yield call(ProductsService.listProducts);
    yield put(getAllProductSuccess(res));
  } catch (error) {
    yield toastError('Thêm sản phẩm mới ko thành công!');
   }
}
function* handlerEditProduct(action) {
 
  const {item, editImg } = action.payload;
  console.log(item,'item');
  if (editImg) {
    const { image } = item;
    // const product = action.payload;
    const data = new FormData()
    data.append('file', image)
    try {
      const img = yield call(UpfileService.upfile, data);
      yield call(ProductsService.editProduct, { ...item, image: `${BASE_URL}/${img.path}` });
      yield toastSuccess('Sửa sản phẩm mới thành công!');
      const res = yield call(ProductsService.listProducts);
      yield put(getAllProductSuccess(res));
    } catch (error) {
      yield toastError('Sửa sản thất bại!');
    }
  }
  else {
    try {
      yield call(ProductsService.editProduct, { ...item });
      yield toastSuccess('Sửa sản phẩm mới thành công!');
      const res = yield call(ProductsService.listProducts);
      yield put(getAllProductSuccess(res));
    } catch (error) {
      yield toastError('Sửa sản thất bại!');

    }
  }

}




export default function* productSaga() {
  yield takeLatest(Actions.GET_ALL_PRODUCT, getListProducts);
  yield takeLatest(Actions.ADD_PRODUCT, handlerAddProduct);
  yield takeLatest(Actions.REMOVE_PRODUCT, handlerRemoveProduct);
  yield takeLatest(Actions.EDIT_PRODUCT, handlerEditProduct);


}
