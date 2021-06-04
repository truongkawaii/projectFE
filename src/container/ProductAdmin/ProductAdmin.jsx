import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Pagination, Spin, Space, Button, Modal, Select, DatePicker } from 'antd';
import { addNewProduct, removeProduct, paginationProduct, editProduct, removeCart, updateCartItem } from '../../state/actions'
import './ProductAdmin.scss'
import LayoutAdmin from '../../components/LayoutAdmin/LayoutAdmin';
import UpfileService from '../../Services/upfile.service';
import { axiosClient } from '../../Services/config.service';
import { split } from 'lodash';




function ProductAdmin() {
  const { Option } = Select;
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.dataProductSort);
  const totalSize = useSelector(state => state.products.total);
  const categories = useSelector(state => state.categories.data);
  const perPage = useSelector(state => state.products.perPage);
  const [totalCart, setTotalCart] = useState(0);
  const [editing, setEditing] = useState(false)
  const [editImg, setEditImg] = useState(false)
  const [productInput, setProductInput] = useState({
    name: "",
    description: "",
    image: "",
    count: 0,
    price: 0,
    prePrice: 0,
    branchId: 0,
    categoryId: 0,
    types: "",
    expiry: new Date(),
    discountPrice:0
  })
  const [date, setDate] = useState('')

  const [brand, setBrand] = useState(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let mounted = true;
    const fetchBrand = async () => {
      const data = await axiosClient.get('/branches');
      setBrand(data)
    }
    if (mounted) {
      fetchBrand();
    }

    // setItemCarts(products);
    return () => mounted = false;
  }, [])
  const onChangeProductIpnput = (e) => {
    // const { types } = productInput;
    // const arr = types.split(",");
    // console.log(arr,'arr');
    const val = e.target.value;
    setProductInput({ ...productInput, [e.target.name]: parseInt(val) ? parseInt(val) : val })
    console.log(productInput);
  }
  const onChangeTextType = (e) => {
    const val = e.target.value;

    setProductInput({ ...productInput, types: val.split(',') })


  }
  function handleChangeBrand(value) {
    setProductInput({ ...productInput, branchId: parseInt(value) })
    console.log(productInput);
  }

  function handleChangeCategory(value) {
    console.log(`categories ${value}`);
    setProductInput({ ...productInput, categoryId: parseInt(value) })
    console.log(productInput);
  }
  console.log(brand);

  const handlerUpFile = async (e) => {
    let file = e.target.files[0];
    setProductInput({ ...productInput, image: file })
    setEditImg(true);
  }
  const handlerAddProduct = () => {
    setVisible(false)

    setProductInput({ ...productInput })
    dispatch(addNewProduct(productInput))
  }
  const handlerEditProduct = () => {

    dispatch(editProduct({ item: {...productInput,types:productInput.types.join(',').split(',')}, editImg }))
    setVisible(false)
  }
  const handlerRemoveItem = (id) => {
    dispatch(removeProduct(id))
  }

  const handlerInputType = (e) => {

  }

  const renderCart = () => {
    let totalPrice = 0;
    const itemCart = products?.map((item, index) => {
      totalPrice += (item.price * item.count);
      let quantity = item.count;
      return <tr>
        <td className="product_remove"><span onClick={() => handlerRemoveItem(item.id)}><i className="fa fa-trash-o"></i></span>
        </td>
        <td className="product_thumb"><a href="product-details-default.html"><img
          src={item.image} alt="" /></a></td>
        <td className="product_name"><Link to={`/products/${item.id}`}>{item.name}</Link></td>
        <td className="product-price">{item.prePrice}đ</td>
        <td className="product-price">{item.price}đ</td>
        <td className="product-price">{item.discountPrice}đ</td>
        <td className="product_quantity">{item.branch?.name || 'Bath Body'}</td>
        {/* <td className="product_quantity">{item.branch?.name || 'Bath Body'}</td> */}
        {/* <td>{item.expiry}</td> */}
        {/* <th className="product-price">Quantity</th> */}
        <td className="product-price"> {item.count<=5?`${item.count} (sắp hết hàng)`:`${item.count}`} </td>
        <td className="product_total">
          <span className="btn-edit" onClick={() => openModalEdit(item)}><i className="fa fa-edit"></i></span>
        </td>
      </tr>
    })
    return { itemCart };
  }

  const handlerProductList = (page) => {
    dispatch(paginationProduct(page));
  }
  const openModalEdit = (item) => {

    setProductInput({
      id: item.id,
      name: item.name,
      branchId: item.branch.id,
      categoryId: item.category.id,
      count: item.count,
      description: item.description,
      price: item.price,
      image: item.image,
      prePrice: item.prePrice,
      discountPrice:item.discountPrice,
      expiry:new Date(), types: item.types.join(",")
    });

    setEditing(true);
    setVisible(true)
  }
  const openModal = () => {
    setEditing(false);
    setProductInput({
      name: "",
      description: "",
      image: "",
      count: 0,
      price: 0,
      branchId: 0,
      categoryId: 0,
      expiry: new Date(),
      prePrice: 0,
      types: "",
      discountPrice:0
    })
    setVisible(true)
  }

 
  return (
    <LayoutAdmin>

      <Modal
        title="Thêm mới sản phẩm"
        // centered

        visible={visible}
        onOk={() => {
          editing ? handlerEditProduct() : handlerAddProduct();
          setEditImg(false)
        }}
        onCancel={() => { setVisible(false); setEditing(false); setEditImg(false) }}
        width={1000}
      >
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="exampleInputUsername1">Tên sản phẩm</label>
                    <input type="text" name="name" className="form-control" onChange={onChangeProductIpnput} id="exampleInputUsername1" value={productInput.name} autocomplete="off" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Giá nhập</label>
                    <input type="number" name="prePrice" onChange={onChangeProductIpnput} className="form-control" id="exampleInputEmail1" value={productInput.prePrice} placeholder="Price input" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Giá bán</label>
                    <input type="number" name="price" onChange={onChangeProductIpnput} className="form-control" id="exampleInputEmail1" value={productInput.price} placeholder="Price sale" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Giá khuyến mại</label>
                    <input type="number"  name="discountPrice" onChange={onChangeProductIpnput} className="form-control" id="exampleInputEmail1" value={productInput.discountPrice} placeholder="Price discount" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Thêm loại sản phẩm ( ngăn cách bằng dấu phẩy ) </label>
                    <input type="text" name="types" onChange={onChangeTextType} className="form-control" id="exampleInputEmail1" value={productInput.types} placeholder="Các loại" />
                  </div>
                  {/* <div className="form-group">
                    <label for="exampleInputEmail1">Số lượng</label>
                    <input type="number" name="count" onChange={onChangeProductIpnput} className="form-control" id="exampleInputEmail1" value={productInput.count} placeholder="Number" />
                  </div> */}
                  <div className="form-group">
                    <label for="exampleInputEmail1">Mô tả</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="description" onChange={onChangeProductIpnput} value={productInput.description} placeholder="Description" ></textarea>

                  </div>
                  {/* <div className="form-group">
                    <label for="exampleInputEmail1">Ngày hết hạn</label> <br />
                    <DatePicker onChange={onChange} />

                  </div> */}
                  <div className="form-group">
                    <label for="exampleInputPassword1">Chọn danh mục</label> <br />
                    {categories && <Select placeholder="Select categories" defaultValue={editing ? productInput.categoryId : categories[0]?.id} style={{ width: 300 }} onChange={handleChangeBrand}>
                      {categories?.map(item => <Option value={item.id} >{item.name}</Option>)}

                    </Select>}
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Chọn thương hiệu</label> <br />
                    {brand && <Select placeholder="Select brand" defaultValue={editing ? productInput.branchId : brand[0]?.id} style={{ width: 300 }} onChange={handleChangeCategory}>
                      {brand?.map(item => <Option value={item.id}>{item.name}</Option>)}

                    </Select>
                    }
                  </div>
                  <div className="form-group">
                    <input type="file" onChange={handlerUpFile} />
                  </div>
                  {editing ? <img src={productInput.image} width="90" height="90" /> : null}

                </form>
              </div>
            </div>

          </div>
        </div>
      </Modal>
      {/* <!-- ...:::: Start Cart Section:::... --> */}
      <div className="cart-section product-admin">


        {/* <!-- Start Cart Table --> */}
        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <Button type="primary" className="btn-add-product" onClick={openModal}>Add New Product</Button>
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      {/* <!-- Start Cart Table Head --> */}
                      <thead>
                        <tr>
                          <th className="product_remove">Xóa</th>
                          <th className="product_thumb">Ảnh sản phẩm</th>
                          <th className="product_name">Tên sản phẩm</th>
                          <th className="product-price">Giá nhập</th>
                          <th className="product-price">Giá bán</th>
                          <th className="product-price">Giá khuyến mại</th>
                          <th className="product_quantity">Thương hiệu</th>
                          {/* <th>Hạn sử dụng</th> */}
                          <th className="product-price">Số lượng</th>
                          <th className="product_total">Hành động</th>
                        </tr>
                      </thead>
                      {/* <!-- End Cart Table Head --> */}
                      <tbody>
                        {products?.length === 0 && <h2 className="notice">No have items in cart</h2>}
                        {renderCart().itemCart}


                      </tbody>
                    </table>

                    <Pagination
                      defaultCurrent={1}
                      showSizeChanger={false}
                      pageSize={perPage}
                      total={totalSize}
                      onChange={handlerProductList}
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Cart Table --> */}

        {/* <!-- Start Coupon Start --> */}
        {/* <!-- End Coupon Start --> */}
      </div>
      {/* <!-- ...:::: End Cart Section:::... --> */}
      {/* code thuần -> thư viện  */}
      {/* HTML , CSS , JS thuần => 1 số thư viện React  */}
    </LayoutAdmin>
  )
}

export default ProductAdmin
