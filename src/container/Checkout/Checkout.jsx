import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Layout from '../../hoc/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory } from 'react-router-dom'
import './Checkout.scss'
import { Select } from 'antd';
import { toastError, toastSuccess } from '../../Helper/toastHelper';
import { axiosClient } from '../../Services/config.service';
import {clearAllCart} from '../../state/actions'

const { Option } = Select;
function Checkout() {
  const cart = useSelector(state => state.cart.data);
  const dispatch = useDispatch()
  const history = useHistory();
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    note: "",
    paymentMethod: "ONLINE",
    items: []
  })

  useEffect(() => {
    const listCart = cart?.map(item => ({
      itemId: item.id,
      count: item.count,
    }));
    setInputState({ ...inputState, items: [...listCart] })
    // return () => {

    // }
  }, [])
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const renderItems = () => {
    let totalPrice = 0;
    const data = cart?.map(item => {
      totalPrice += (item.count * item.price);
      return <tr>
        <td> {item.name} <strong> × {item.count}</strong></td>
        <td> {item.price * item.count}đ</td>
      </tr>
    })

    return { data, totalPrice }
  }

  const handlerInputValue = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value })
    console.log(inputState);
  }

    const handlerCheckout =async ()=>{
      try {
       await axiosClient.post('/orders',inputState);
       toastSuccess('Đặt hàng thành công')
       dispatch(clearAllCart())
       history.push('/checkoutSuccess');
      } catch (error) {
        toastError('Thanh toán thất bại')
      }

    }
  return (
    <Layout>
      <BreadCrumb title={'Thanh toán'} />
      <div className="checkout-section">
        <div className="container">
          <div className="row">
          </div>
          {/* <!-- Start User Details Checkout Form --> */}
          <div className="checkout_form" data-aos="fade-up" data-aos-delay="400">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <form action="#">
                  <h3>Chi tiết hóa đơn</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label>Tên <span>*</span></label>
                        <input name="firstName" onChange={handlerInputValue} type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label>Tên đệm <span>*</span></label>
                        <input name="lastName" onChange={handlerInputValue} type="text" />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="default-form-box">
                        <label>Địa chỉ <span>*</span></label>
                        <input name="address" onChange={handlerInputValue} placeholder="House number and street name" type="text" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label>Số điện thoại<span>*</span></label>
                        <input type="number" name="phone" onChange={handlerInputValue} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="default-form-box">
                        <label> Email <span>*</span></label>
                        <input type="text" name="email" onChange={handlerInputValue} />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="order-notes">
                        <label for="order_note">Order Notes</label>
                        <textarea id="order_note"
                          name="note" onChange={handlerInputValue}
                          placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-6">
                <form action="#">
                  <h3>Sản phẩm bạn mua</h3>
                  <div className="order_table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sản phẩm</th>
                          <th>Tổng tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {renderItems().data}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Tổng tiền giỏ hàng</th>
                          <td>{renderItems().totalPrice}đ</td>
                        </tr>
                        <tr>
                          <th>Giá ship</th>
                          <td><strong>30000đ</strong></td>
                        </tr>
                        <tr className="order_total">
                          <th>Tổng tiền</th>
                          <td><strong>{renderItems().totalPrice + 30000}đ</strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment_method">
                    <div className="panel-default">
                      <label className="checkbox-default" for="currencyCod" data-bs-toggle="collapse"
                        data-bs-target="#methodCod">
                        <input type="checkbox" id="currencyCod" onChange={e=>setInputState({...inputState,paymentMethod:e.target.checked?'OFFLINE':'ONLINE'})}/>
                        <span>Thanh toán khi nhận hàng</span>
                      </label>

                      <div id="methodCod" className="collapse" data-parent="#methodCod">
                        <div className="card-body1">
                          <p>Thanh toán online.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel-default">
                      <p>Bạn có thể chuyển tiền online dựa vào stk dưới đây</p>
                      <p>Chủ tk :<span className="tk-name"> Bùi Minh Thảo</span></p>
                      <p>Viettelpay sdt: <span className="phone-number">0972801796</span> </p>
                      <p>MB bank stk:  <span className="phone-number">9704229287525591</span></p>
                      <p>VP bank stk:  <span className="phone-number">179531305</span></p>
                    </div>
                    <div onClick={handlerCheckout} className="order_button pt-3">
                      <span className="btn btn-md btn-black-default-hover btn-pay" >Đặt hàng</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- Start User Details Checkout Form --> */}
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
