import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
function Arrivals() {
  return (
    <>


      <div className="product-default-slider-section section-top-gap-100 section-fluid">

        {/* <!-- Start Section Content Text Area --> */}
        <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">Sản phẩm mới</h3>
                    <p>Đặt hàng trước ngay bây giờ để nhận ưu đãi và quà tặng độc quyền</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Section Content Text Area --> */}
        <div className="product-wrapper" data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-slider-default-1row default-slider-nav-arrow">

                  {/* <!-- Slider main container --> */}
                  <div className="swiper-container product-default-slider-4grid-1row">

                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-9.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-10.jpg" alt="" />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Epicuri per viêm tuyến bã</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$68</span>
                              </div>

                            </div>
                          </div>


                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-11.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-3.jpg" alt="" />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Kaoreet
                                                lobortis sagit</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$95.00</span>
                              </div>

                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-5.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-7.jpg" alt="" />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Condimentum
                                                posuere</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$115.00</span>
                              </div>

                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-6.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-9.jpg" alt="" />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Convallis quam
                                                sit</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$75.00 - $85.00</span>
                              </div>

                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-1.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-2.jpg" alt="" />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Aliquam
                                                lobortis</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$75.00 - $85.00</span>
                              </div>

                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-3.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-4.jpg" alt="" />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Condimentum
                                                posuere</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price"><del>$89.00</del> $80.00</span>
                              </div>

                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-5.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-6.jpg" alt="" />
                              </a>
                              <div className="tag">
                                <span>sale</span>
                              </div>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Cras neque
                                                metus</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price"><del>$70.00</del> $60.00</span>
                              </div>

                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="product-default-single-item product-color--green swiper-slide">
                            <div className="image-box">
                              <a href="product-details-default.html" className="image-link">
                                <img src="assets/images/product/default/home-2/default-7.jpg" alt="" />
                                <img src="assets/images/product/default/home-2/default-8.jpg" alt="" />
                              </a>
                              <div className="action-link">
                                <div className="action-link-left">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                  <a href="#" data-bs-toggle="modal"
                                    data-bs-target="#modalQuickview"><i
                                      className="icon-magnifier"></i></a>
                                  <a href="wishlist.html"><i className="icon-heart"></i></a>
                                  <a href="compare.html"><i className="icon-shuffle"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <div className="content-left">
                                <h6 className="title"><a href="product-details-default.html">Donec eu libero
                                                ac</a></h6>
                                <ul className="review-star">
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="fill"><i className="ion-android-star"></i></li>
                                  <li className="empty"><i className="ion-android-star"></i></li>
                                </ul>
                              </div>
                              <div className="content-right">
                                <span className="price">$74</span>
                              </div>

                            </div>
                          </div>

                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>

                  {/* <!-- If we need navigation buttons --> */}
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Arrivals
