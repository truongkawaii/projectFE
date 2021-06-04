import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Layout from '../../hoc/Layout/Layout'
import { removeCart, updateCartItem } from '../../state/actions'
import './Cart.scss'
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.data);
  const [totalCart, setTotalCart] = useState(0);
  const [itemCarts, setItemCarts] = useState(null);
  useEffect(() => {
    const modal = document.querySelector('.modal-backdrop.fade');
    const modal2 = document.querySelector('.modal-open');
    var x = document.getElementsByTagName("BODY")[0];
    if (modal) {
      modal.classList.remove('show');
      modal.classList.remove('modal-backdrop');
      modal.classList.add('noneShow');
    }
    if (modal2) {
      modal2.classList.remove('modal-open')
    } 

    setItemCarts(cart);
    return () => {
    }
  }, [cart])

  const changeQuantity = (id, value) => {
    const data = [...itemCarts].map(item => {
      if (item.id === id) {
        item.count = Number(value);
      }
      return item;
    });

    setItemCarts(data)
  }

  const handlerRemoveItem = (id) => {
    const updateData = itemCarts.filter(item => item.id !== id);
    setItemCarts(updateData)
  }


  const renderCart = () => {
    let totalPrice = 0;
    const itemCart = itemCarts?.map((item, index) => {
      totalPrice += (item.price * item.count);
      let quantity = item.count;
      return <tr>
        <td className="product_remove"><span onClick={() => handlerRemoveItem(item.id)}><i className="fa fa-trash-o"></i></span>
        </td>
        <td className="product_thumb"><a href="product-details-default.html"><img
          src={item.image} alt="" /></a></td>
        <td className="product_name"><Link to={`/products/${item.id}`}>{item.name}</Link></td>
        <td className="product-price">{item.price}đ</td>
        <td className="product_quantity"><label>Quantity</label> <input min="1" max="100" onChange={(e) => changeQuantity(item.id, e.target.value)} placeholder={quantity}
          type="number" /></td>
        <td className="product_total">{item.count * item.price}</td>
        {/* <input type="text" value={data}/> */}
      </tr>
    })
    return { itemCart, totalPrice };
  }
  const updateCart = () => {

    dispatch(updateCartItem(itemCarts))
  }
  return (
    <Layout>
      <BreadCrumb title={'CART'} />
      {/* <!-- ...:::: Start Cart Section:::... --> */}
      <div className="cart-section">
        {/* <!-- Start Cart Table --> */}
        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      {/* <!-- Start Cart Table Head --> */}
                      <thead>
                        <tr>
                          <th className="product_remove">Xóa</th>
                          <th className="product_thumb">Ảnh</th>
                          <th className="product_name">Sản phẩm</th>
                          <th className="product-price">Giá</th>
                          <th className="product_quantity">Số lượng</th>
                          <th className="product_total">Tổng tiền</th>
                        </tr>
                      </thead>
                      {/* <!-- End Cart Table Head --> */}
                      <tbody>
                        {itemCarts?.length === 0 && <h2 className="notice">Không có sản phẩm trong giỏ hàng</h2>}
                        {renderCart().itemCart}
                      </tbody>
                    </table>
                  </div>
                  <div className="cart_submit">
                    <h2 className="btn-add-cart" onClick={updateCart}>Cập nhật giỏ hàng</h2>
                    {/* <button className="btn btn-md btn-golden" ></button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Cart Table --> */}

        {/* <!-- Start Coupon Start --> */}
        <div className="coupon_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="coupon_code left" data-aos="fade-up" data-aos-delay="200">
                  <h3>Coupon</h3>
                  <div className="coupon_inner">
                    <p>Enter your coupon code if you have one.</p>
                    <input className="mb-2" placeholder="Coupon code" type="text" />
                    <button type="submit" className="btn btn-md btn-golden">Apply coupon</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="coupon_code right" data-aos="fade-up" data-aos-delay="400">
                  <h3>Cart Totals</h3>
                  <div className="coupon_inner">
                    <div className="cart_subtotal">
                      <p>Subtotal</p>
                      <p className="cart_amount">{renderCart().totalPrice}đ</p>
                    </div>
                    <div className="cart_subtotal ">
                      <p>Shipping</p>
                      <p className="cart_amount"><span>Flat Rate:</span> $255.00</p>
                    </div>
                    <a href="#">Calculate shipping</a>

                    <div className="cart_subtotal">
                      <p>Total</p>
                      <p className="cart_amount">
                        {renderCart().totalPrice}đ

                        </p>
                    </div>
                    <div className="checkout_btn">
                      <Link to="/checkout" className="btn btn-md btn-golden">Proceed to Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Coupon Start --> */}
      </div>
      {/* <!-- ...:::: End Cart Section:::... --> */}
 {/* code thuần -> thư viện  */}
 {/* HTML , CSS , JS thuần => 1 số thư viện React  */}
    </Layout>
  )
}

export default Cart
