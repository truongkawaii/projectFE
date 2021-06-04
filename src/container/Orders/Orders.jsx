import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin/LayoutAdmin'
import { axiosClient } from '../../Services/config.service';
import './Orders.scss'

function Orders() {
    const [orders, setOrders] = useState(null);
    useEffect(() => {
        let mounted = true;
        const fetchData = async () => {
            const data = await axiosClient.get('/orders');
            console.log(data);
            setOrders(data);
        }
        if (mounted) {
            fetchData()
        }


        return () => mounted = false
    }, [])

    return (
        <LayoutAdmin>
            <h1>Orders</h1>
            <div className="all-orders">
                <ul className="list-orders table">
                    <li className="id id-title">Id</li>
                    <li className="name name-title">Khách hàng</li>
                    <li className="product product-title">Tên sản phẩm</li>
                    <li className="note note-title">Ghi chú</li>
                    <li className="type type-title">Kiểu thanh toán</li>
                    <li className="phone phone-title">Số điện thoại</li>
                    <li className="status status-title">Trạng thái</li>
                    <li className="total total-title">Tổng tiền</li>
                   
                </ul>
                {orders?.map(item => <ul className="list-orders item-order">
                    <li className="id ">{item.id}</li>
                    <li className="name ">{`${item.firstName} ${item.lastName}`}</li>
                    <li className="product ">
                        {item.items?.map(i => <p>{i.name}  <span>x {i.count}</span>,</p>)}
                    </li>
                    <li className="note ">{item.note}</li>
                    <li className={item.paymentMethod === 'OFFLINE' ? 'type off' : 'type on'}>{item.paymentMethod === 'OFFLINE' ? 'Thanh toán khi nhận hàng' : 'Thanh toán online'}</li>
                    <li className="phone">{item.phone}</li>
                    <li className="status greenStatus">Đang vận chuyển</li>
                    <li className="total"><span>{item.total}đ</span></li>
                </ul>
                )}
            </div>

        </LayoutAdmin>
    )
}

export default Orders
