import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin/LayoutAdmin'
import { Button, Modal, DatePicker, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import './Stock.scss';
import { axiosClient } from '../../Services/config.service'
import { toastError, toastSuccess } from '../../Helper/toastHelper';

function Stock() {
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [stocks, setStocks] = useState();
  const products = useSelector(state => state.products.dataProductSort);
  const [img, setImg] = useState()
  const [stock, setStock] = useState({
    name: "",
    address: "",
    phone: "",
    manufacturing: "2021-06-03",
    expiry: "2021-06-03",
    count: 0,
    price: 0,
    itemId: 0
  })
  useEffect(() => {
    let mounted = true;
    const fetchStocks = async () => {
      const data = await axiosClient.get('/stocks');
      setStocks(data);

    }
    if (mounted) {
      fetchStocks()
    }


    return () => mounted = false;
  }, [])
  const onChangeProductIpnput = (e) => {
    // const { types } = stock;
    // const arr = types.split(",");
    // console.log(arr,'arr');
    const val = e.target.value;
    if (e.target.name === "phone") {
      setStock({ ...stock, [e.target.name]: val })
    } else {
      setStock({ ...stock, [e.target.name]: parseInt(val) ? parseInt(val) : val })
    }

    // console.log(stock);
  }
  const onChange = (date, dateString) => {
    setStock({ ...stock, expiry: dateString })
  }
  const handleChangeProduct = (value) => {
    setStock({ ...stock, itemId: value })
    const item = products.filter(i => i.id === +value)[0];

    setImg(item.image);
  }

  const addStock = async () => {



    try {
      await axiosClient.post('/stocks', stock);
      toastSuccess('Nhập lô mới thành công')
      const data = await axiosClient.get('/stocks');
      setStocks(data);
    } catch (error) {
      toastError('Nhập lô mới thất bại')
    }
  }
  const renderCart = () => {
    let totalPrice = 0;
    const itemCart = stocks?.map((item, index) => {
      // totalPrice += (item.price * item.count);
      // let quantity = item.count;
      const itemPd = products?.filter(i => i.id === item.lot.itemId)[0];
      return <tr>
        <th className="product_thumb">{item.name}</th>
        <th className="product_name">{item.address}</th>
        <th className="product-price">{item.phone}</th>
        <th className="product-price">{itemPd?.name}</th>
        <th className="product-price">{item.price}đ</th>
        <th className="product_quantity">{item.lot.expiry}</th>
        <th className="product-price">{item.count}</th>
      </tr>
    })

    return { itemCart }
  };
  return (
    <LayoutAdmin>
      <Modal
        title="Thêm mới sản phẩm"
        // centered

        visible={visible}
        onOk={() => {
          console.log(stock);
          addStock();
          // setEditImg(false)
          setVisible(false)
        }}
        onCancel={() => {
          setVisible(false);
          setStock(({
            name: "",
            address: "",
            phone: "",
            manufacturing: "2021-06-03",
            expiry: "",
            count: 0,
            price: 0,
            itemId: 0
          }))
        }}
        width={1000}
      >
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="exampleInputUsername1">Tên người nhập</label>
                    <input type="text" name="name" className="form-control" onChange={onChangeProductIpnput} id="exampleInputUsername1" value={stock.name} autocomplete="off" placeholder="name" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputUsername1">Số điện thoại</label>
                    <input type="text" name="phone" className="form-control" onChange={onChangeProductIpnput} id="exampleInputUsername1" value={stock.phone} autocomplete="off" placeholder="phone" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputUsername1">Địa chỉ</label>
                    <input type="text" name="address" className="form-control" onChange={onChangeProductIpnput} id="exampleInputUsername1" value={stock.address} autocomplete="off" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Giá nhập</label>
                    <input type="number" name="price" onChange={onChangeProductIpnput} className="form-control" id="exampleInputEmail1" value={stock.price} placeholder="Price input" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Số lượng</label>
                    <input type="number" name="count" onChange={onChangeProductIpnput} className="form-control" id="exampleInputEmail1" value={stock.count} placeholder="Number" />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputEmail1">Ngày hết hạn</label> <br />
                    <DatePicker onChange={onChange} />

                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Sản phẩm nhập</label> <br />
                    {products && <Select placeholder="Select categories"
                      // defaultValue={editing ? stock.categoryId : categories[0]?.id} 
                      style={{ width: 300 }}
                      onChange={handleChangeProduct}
                    >
                      {products?.map(item => <Option value={item.id} >{item.name}</Option>)}
                    </Select>}
                  </div>
                  <img src={img} width="100" />

                  {/* {editing ? <img src={stock.image} width="90" height="90" /> : null} */}

                </form>
              </div>
            </div>

          </div>
        </div>
      </Modal>

      <div className="cart-section product-admin stock">


        {/* <!-- Start Cart Table --> */}
        <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <Button type="primary" className="btn-add-product" onClick={() => setVisible(true)} >Tạo lô mới</Button>
            <div className="row">
              <div className="col-12">
                <div className="table_desc">
                  <div className="table_page table-responsive">
                    <table>
                      {/* <!-- Start Cart Table Head --> */}
                      <thead>
                        <tr>
                          {/* <th className="product_remove">Xóa</th> */}
                          <th className="product_thumb">Tên người</th>
                          <th className="product_name">Địa chỉ</th>
                          <th className="product-price">Số điện thoại</th>
                          <th className="product-price">Tên sản phẩm nhập</th>
                          <th className="product-price">Giá nhập</th>
                          <th className="product_quantity">Hạn sử dụng</th>
                          <th className="product-price">Số lượng</th>
                        </tr>
                      </thead>
                      {/* <!-- End Cart Table Head --> */}
                      <tbody>
                        {/* {products?.length === 0 && <h2 className="notice">No have items in cart</h2>}
                {renderCart().itemCart} */}
                        {renderCart().itemCart}
                      </tbody>
                    </table>

                    {/* <Pagination
              defaultCurrent={1}
              showSizeChanger={false}
              pageSize={perPage}
              total={totalSize}
              onChange={handlerProductList}
            /> */}
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

    </LayoutAdmin>
  )
}

export default Stock
