import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../../hoc/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { addCart, paginationProduct, showModal } from '../../state/actions';
import { Pagination, Spin, Space } from 'antd';
import './Product.scss';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import SideBarProducts from '../../components/SideBarProducts/SideBarProducts';
import ModalCart from '../../components/ModalCart/ModalCart';

function Products() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.products.dataProductSort);
  const data2 = useSelector(state => state.products.data);
  const totalSize = useSelector(state => state.products.total);
  const modalState = useSelector(state => state.products.showModal);
  const perPage = useSelector(state => state.products.perPage);
  const cart = useSelector(state => state.cart.data);
 
  const [itemCart, setItemCart] = useState({
    img: '',
    itemCount: '',
    price: ''
  })
  // console.log(data, 'items');
  console.log(cart, 'cart');
  const handlerProductList = (page) => {
    dispatch(showModal())
    dispatch(paginationProduct(page));
  }
  const handlerAddToCart = (item) => {
    console.log(item);
    const productItem = cart?.find(prd => prd.id === item.id);

    if (productItem) {
      setItemCart({ img: item.image, price: item.price, itemCount: productItem.count + 1 })

    } else {
      setItemCart({ img: item.image, price: item.price, itemCount: 1 })

    }
    dispatch(addCart(item))
 
  }
 
  return (
    <Layout>
      <ModalCart itemCart={itemCart} />
      <BreadCrumb title={'Sản phẩm mỹ phẩm'} />
      <div className="shop-section shopee">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-3">
              {/* <!-- Start Sidebar Area --> */}
              <SideBarProducts />
            </div>
            <div className="col-lg-9">
              {/* <!-- Start Shop Product Sorting Section --> */}
              <div className="shop-sort-section">
                <div className="container">
                  <div className="row">
                    {/* <!-- Start Sort Wrapper Box --> */}
                    <div className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column"
                      data-aos="fade-up" data-aos-delay="0">
                      {/* <!-- Start Sort tab Button --> */}
                      <div className="sort-tablist d-flex align-items-center">
                        <ul className="tablist nav sort-tab-btn">
                          <li><a className="nav-link" data-bs-toggle="tab" href="#layout-3-grid"><img
                            src="assets/images/icons/bkg_grid.png" alt="" /></a></li>
                          <li><a className="nav-link active" data-bs-toggle="tab" href="#layout-list"><img
                            src="assets/images/icons/bkg_list.png" alt="" /></a></li>
                        </ul>

                        {/* <!-- Start Page Amount --> */}
                        <div className="page-amount ml-2">
                          <span >hiển thị 1–6 của {data2?.length} kết quả</span>
                        </div>
                        {/* <!-- End Page Amount --> */}
                      </div>
                      {/* <!-- End Sort tab Button --> */}

                      {/* <!-- Start Sort Select Option --> */}
                       {/* <!-- End Sort Select Option --> */}
                    </div>
                    {/* <!-- Start Sort Wrapper Box --> */}
                  </div>
                </div>
              </div>
              {/* <!-- End Section Content --> */}

              {/* <!-- Start Tab Wrapper --> */}
              <div className="sort-product-tab-wrapper shopee">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content tab-animate-zoom">
                        {/* <!-- Start Grid View Product --> */}
                        <div className="tab-pane sort-layout-single" id="layout-3-grid">
                          <div className="row">
                            {data?.map(item => <div className="col-xl-4 col-sm-6 col-12">
                              {/* <!-- Start Product Default Single Item --> */}
                              <div className="product-default-single-item product-color--golden">
                                <div className="image-box">
                                  <a href="product-details-default.html" className="image-link">
                                    <img src={item.image} className="img-prd"
                                      alt="" />
                                    {/* <img src="assets/images/product/default/home-1/default-10.jpg"
                                        alt="" /> */}
                                  </a>
                                  <div className="action-link">
                                    <div className="action-link-left">
                                      <a href="#" data-bs-toggle="modal"
                                      >Thêm vào giỏ hàng</a>
                                    </div>
                                    <div className="action-link-right">
                                      <a href="#" data-bs-toggle="modal"
                                        data-bs-target="#modalQuickview"><i
                                          className="icon-magnifier"></i></a>
                                      <a href="wishlist.html"><i
                                        className="icon-heart"></i></a>
                                      <a href="compare.html"><i
                                        className="icon-shuffle"></i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="content-left">
                                    <h6 className="title"><a
                                      href="product-details-default.html">{item.name.length>40?`${item.name.slice(0,40)}...`:item.name}</a></h6>
                                    <ul className="review-star">
                                      <li className="fill"><i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill"><i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill"><i className="ion-android-star"></i>
                                      </li>
                                      <li className="fill"><i className="ion-android-star"></i>
                                      </li>
                                      <li className="empty"><i className="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="content-right">
                                    <span className="price">{item.price}đ</span>
                                  </div>

                                </div>
                              </div>
                              {/* <!-- End Product Default Single Item --> */}
                            </div>
                            )
                            }
                          </div>
                        </div>
                        {/* <!-- End Grid View Product --> */}
                        {/* <!-- Start List View Product --> */}
                        <div className="tab-pane active show sort-layout-single" id="layout-list">
                          {modalState && <Space size="middle">
                            <Spin size="large" />
                          </Space>}

                          <div className="row">
                            {data?.map(item => <div className="col-12">
                              {/* <!-- Start Product Defautlt Single --> */}
                              <div className="product-list-single product-color--golden"
                                data-aos="fade-up" data-aos-delay="0">
                                <Link  to={`/products/${item.id}`} 
                                  className="product-list-img-link">
                                  <img className="img-fluid"
                                    src={item.image}
                                    alt="" />
                                  {/* <img className="img-fluid"
                                      src="assets/images/product/default/home-1/default-2.jpg"
                                      alt="" /> */}
                                </Link>
                                <div className="product-list-content">
                                  <h5 className="product-list-link"><Link
                                    to={`/products/${item.id}`}>{item.name}</Link></h5>
                                  <ul className="review-star">
                                    <li className="fill"><i className="ion-android-star"></i></li>
                                    <li className="fill"><i className="ion-android-star"></i></li>
                                    <li className="fill"><i className="ion-android-star"></i></li>
                                    <li className="fill"><i className="ion-android-star"></i></li>
                                    <li className="empty"><i className="ion-android-star"></i></li>
                                  </ul>
                                  <span className="product-list-price"><del>{item.price}đ</del>
                                    {item.discountPrice}đ</span>
                                  <p>{item.description}</p>
                                  <div className="product-action-icon-link-list">
                                    <a href="#" data-bs-toggle="modal"
                                      data-bs-target="#modalAddcart"
                                      onClick={() => handlerAddToCart(item)}
                                      className="btn btn-lg btn-black-default-hover">Thêm vào giỏ hàng</a>
                                    <a href="#" data-bs-toggle="modal"
                                      data-bs-target="#modalQuickview"
                                      className="btn btn-lg btn-black-default-hover"><i
                                        className="icon-magnifier"></i></a>
                                    <a href="wishlist.html"
                                      className="btn btn-lg btn-black-default-hover"><i
                                        className="icon-heart"></i></a>
                                    <a href="compare.html"
                                      className="btn btn-lg btn-black-default-hover"><i
                                        className="icon-shuffle"></i></a>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- End Product Defautlt Single --> */}
                            </div>
                            )}
                          </div>
                        </div>
                        {/* <!-- End List View Product --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Tab Wrapper --> */}

              {/* <!-- Start Pagination --> */}
              <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay="0">
                <Pagination
                  defaultCurrent={1}
                  showSizeChanger={false}
                  pageSize={perPage}
                  total={totalSize}
                  onChange={handlerProductList}
                />
              </div>
              {/* <!-- End Pagination --> */}
            </div>
            {/* <!-- End Shop Product Sorting Section  --> */}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Products
