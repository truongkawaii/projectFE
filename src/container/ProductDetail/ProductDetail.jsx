import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Layout from '../../hoc/Layout/Layout';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './ProductDetail.scss';
import { addCart } from '../../state/actions';
import ModalCart from '../../components/ModalCart/ModalCart';
import { axiosClient } from '../../Services/config.service';
import axios from 'axios';

function ProductDetail() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.products.data);
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  let { id } = useParams();
  const [allComments, setAllComment] = useState()
  const [item, setItem] = useState(null);
  const cart = useSelector(state => state.cart.data);

  const [itemCart, setItemCart] = useState({
    img: '',
    itemCount: '',
    price: ''
  })
  useEffect(() => {
    handlerActive();
    data?.forEach(prd => {
      if (prd.id === Number(id)) {
        setItem(prd)
      }
    })
    const fetchAllComment = async () => {
      const listComments = await (await axios.get(`https://60af64bb5b8c300017dec953.mockapi.io/comments`)).data;
      // const dataComments = listComments.filter(i=>i.itemId===parseInt(id))
      const dataComments = listComments.filter(i => i.itemId === parseInt(id))
      setAllComment(dataComments)

    }
    fetchAllComment()
    return () => {

    }
  }, [data])

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

  const handlerActive = () => {
    const btns = document.querySelectorAll('.type-product');
    btns.forEach((item, index) => {
      item.addEventListener('click', () => {
        btns.forEach(i => i.classList.remove('active'))
        btns[index].classList.add('active')
      })
    })
  }
  handlerActive();
  const sendCommet = async () => {
    setComment('')
    setName('')
    try {
      await axiosClient.post('https://60af64bb5b8c300017dec953.mockapi.io/comments', { description: comment, itemId: item?.id, name })
      const listComments = await (await axios.get(`https://60af64bb5b8c300017dec953.mockapi.io/comments`)).data;
      // const dataComments = listComments.filter(i=>i.itemId===parseInt(id))
      const dataComments = listComments.filter(i => i.itemId === parseInt(id))
      setAllComment(dataComments)
    } catch (error) {

    }
    //  await ax 
  }
  return (
    <Layout>
      <ModalCart itemCart={itemCart} />
      <BreadCrumb title="PRODUCT DETAILS" />
      <div class="product-details-section">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-6">
              <div class="product-details-gallery-area" data-aos="fade-up" data-aos-delay="0">
                {/* <!-- Start Large Image --> */}
                <div class="product-large-image product-large-image-horaizontal swiper-container">
                  <div class="swiper-wrapper">
                    <div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                      <img src={item?.image} alt="" />
                    </div>

                  </div>
                </div>
                {/* <!-- End Large Image --> */}
                {/* <!-- Start Thumbnail Image --> */}

                {/* <!-- End Thumbnail Image --> */}
              </div>
            </div>
            <div class="col-xl-7 col-lg-6">
              <div class="product-details-content-area product-details--golden" data-aos="fade-up"
                data-aos-delay="200">
                {/* <!-- Start  Product Details Text Area--> */}
                <div class="product-details-text">
                  <h4 class="title">{item?.name}</h4>
                  <div class="d-flex align-items-center">
                    <ul class="review-star">
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="fill"><i class="ion-android-star"></i></li>
                      <li class="empty"><i class="ion-android-star"></i></li>
                    </ul>
                    <a href="#" class="customer-review ml-2">(khách review )</a>
                  </div>
                  <div class="price">{item?.price}đ</div>
                  <p>{item?.description}</p>
                </div>

                <div class="product-details-variable">
                  <h4 class="title">Tùy chọn có sẵn</h4>
                  {/* <!-- Product Variable Single Item --> */}
                  <div class="variable-single-item">
                    <div class="product-stock"> <span class="product-stock-in"><i
                      class="ion-checkmark-circled"></i></span> {item?.count} SẢN PHẨM CÓ SẴN</div>
                  </div>
                  <div class="variable-single-item">
                    <div class="product-stock">  {item?.types?.map((item, index) => <span className={`type-product ${index === 0 ? `active` : ''}`} key={item}>{item}</span>)} </div>
                  </div>
                  {/* <!-- Product Variable Single Item --> */}
                  <div class="d-flex align-items-center ">


                    <div class="product-add-to-cart-btn">
                      <a href="#" class="btn btn-block btn-lg btn-black-default-hover"
                        onClick={() => handlerAddToCart(item)}
                        data-bs-toggle="modal" data-bs-target="#modalAddcart">+ THÊM GIỎ HÀNG</a>
                    </div>
                  </div>
                  {/* <!-- Start  Product Details Meta Area--> */}

                  {/* <!-- End  Product Details Meta Area--> */}
                </div>
                {/* <!-- End Product Variable Area --> */}

                {/* <!-- Start  Product Details Catagories Area--> */}
                <div class="product-details-catagory mb-2">
                  <span class="title">DANH MỤC:</span>
                  <ul>
                    <li><a href="#">COSMETICS</a></li>
                    {/* <li><a href="#">KITCHEN UTENSILS</a></li>
                    <li><a href="#">TENNIS</a></li> */}
                  </ul>
                </div>
                {/* <!-- End  Product Details Catagories Area--> */}
                {/* <!-- Start  Product Details Social Area--> */}
                <div class="product-details-social">
                  <span class="title">SHARE THIS PRODUCT:</span>
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
                {/* <!-- End  Product Details Social Area--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-details-content-tab-section section-top-gap-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="product-details-content-tab-wrapper" data-aos="fade-up" data-aos-delay="0">

                {/* <!-- Start Product Details Tab Button --> */}
                <ul class="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                  <li><a class="nav-link active" data-bs-toggle="tab" href="#description">
                    Mô tả
                                </a></li>
                  <li><a class="nav-link" data-bs-toggle="tab" href="#specification">
                    Đặc biệt
                                </a></li>
                  <li><a class="nav-link" data-bs-toggle="tab" href="#review">
                    Đánh giá (1)
                                </a></li>
                </ul>
                {/* <!-- End Product Details Tab Button --> */}

                {/* <!-- Start Product Details Tab Content --> */}
                <div class="product-details-content-tab">
                  <div class="tab-content">
                    {/* <!-- Start Product Details Tab Content Singel --> */}
                    <div class="tab-pane active show" id="description">
                      <div class="single-tab-content-item">
                        <p>{item?.description} </p>

                      </div>
                    </div>
                    {/* <!-- End Product Details Tab Content Singel --> */}
                    {/* <!-- Start Product Details Tab Content Singel --> */}
                    <div class="tab-pane" id="specification">
                      <div class="single-tab-content-item">
                        <table class="table table-bordered mb-20">
                          <tbody>
                            <tr>
                              <th scope="row">Sáng tác</th>
                              <td></td>
                            </tr>
                            <tr>
                              <th scope="row">Styles</th>
                              <td>Girly</td>
                            </tr>
                            <tr>
                              <th scope="row">Properties</th>
                              <td>Short Dress</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>Thời trang đã tạo ra những bộ sưu tập được thiết kế đẹp mắt kể từ năm 2010. Thương hiệu
                        mang đến những thiết kế nữ tính mang đến những chiếc váy cúp ngực và váy tuyên bố sành điệu
                        mà từ đó đã phát triển thành một bộ sưu tập may sẵn đầy đủ, trong đó mọi
                        item là một phần quan trọng trong tủ quần áo của phụ nữ. Kết quả? Mát mẻ, dễ dàng, sang trọng
                        với vẻ ngoài sang trọng trẻ trung và phong cách đặc trưng không thể nhầm lẫn. Tất cả
                        những tác phẩm tuyệt đẹp được sản xuất tại Ý và được sản xuất bằng những sản phẩm tốt nhất
                        chú ý. Giờ đây, Thời trang mở rộng sang nhiều loại phụ kiện bao gồm giày,
                                            mũ, thắt lưng và hơn thế nữa!</p>
                      </div>
                    </div>
                    {/* <!-- End Product Details Tab Content Singel --> */}
                    {/* <!-- Start Product Details Tab Content Singel --> */}
                    <div class="tab-pane" id="review">
                      <div class="single-tab-content-item">
                        {/* <!-- Start - Review Comment --> */}
                        <ul class="comment">
                          {/* <!-- Start - Review Comment list--> */}
                          {allComments?.map(item => <li class="comment-list">
                            <div class="comment-wrapper">
                              <div class="comment-img">
                                <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="" />
                              </div>
                              <div class="comment-content">
                                <div class="comment-content-top">
                                  <div class="comment-content-left">
                                    <h6 class="comment-name">{item?.name}</h6>
                                    <ul class="review-star">
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="empty"><i class="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <div class="comment-content-right">
                                    <a href="#"><i class="fa fa-reply"></i>Reply</a>
                                  </div> */}
                                </div>

                                <div class="para-content">
                                  <p>{item.description} </p>
                                </div>
                              </div>
                            </div>

                          </li>
                          )}
                          {/* <!-- End - Review Comment list--> */}
                          {/* <!-- Start - Review Comment list--> */}
                          <li class="comment-list">
                            <div class="comment-wrapper">
                              <div class="comment-img">
                                <img src="http://simpleicon.com/wp-content/uploads/user1.png" alt="" />
                              </div>
                              <div class="comment-content">
                                <div class="comment-content-top">
                                  <div class="comment-content-left">
                                    <h6 class="comment-name">Tiệp ngáo</h6>
                                    <ul class="review-star">
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="fill"><i class="ion-android-star"></i>
                                      </li>
                                      <li class="empty"><i class="ion-android-star"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* <div class="comment-content-right">
                                    <a href="#"><i class="fa fa-reply"></i>Reply</a>
                                  </div> */}
                                </div>

                                <div class="para-content">
                                  <p>Dùng rất ưng ý  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                          {/* <!-- End - Review Comment list--> */}
                        </ul>
                        {/* <!-- End - Review Comment --> */}
                        <div class="review-form">
                          <div class="review-form-text-top">
                            <h5>THÊM MỘT BÌNH LUẬN</h5>
                            <p>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu
                                                    *</p>
                          </div>

                          {/* <form action="#" method="post"> */}
                          <div class="row">
                            <div class="col-md-6">
                              <div class="default-form-box">
                                <label for="comment-name">Tên bạn <span>*</span></label>
                                <input id="comment-name" type="text"
                                  value={name} onChange={e => setName(e.target.value)}
                                  placeholder="Enter your name" required />
                              </div>
                            </div>
                            {/* 
                              <div class="col-md-6">
                                <div class="default-form-box">
                                  <label for="comment-email"> Email <span>*</span></label>
                                  <input id="comment-email" type="email"
                                    placeholder="Enter your email" required />
                                </div>
                              </div> */}
                            <div class="col-12">
                              <div class="default-form-box">
                                <label for="comment-review-text"> Đánh giá của bạn
                                                                <span>*</span></label>
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} id="comment-review-text"
                                  placeholder="Write a review" required></textarea>
                              </div>
                            </div>
                            <div class="col-12">
                              <button class="btn btn-md btn-black-default-hover"
                                onClick={sendCommet} >Gửi</button>
                            </div>
                          </div>
                          {/* </form> */}
                        </div>
                      </div>

                    </div>
                    {/* <!-- End Product Details Tab Content Singel --> */}
                  </div>
                </div>
                {/* <!-- End Product Details Tab Content --> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
