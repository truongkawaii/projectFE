import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, BrowserRouter as Router } from 'react-router-dom'
import { toastSuccess } from '../../Helper/toastHelper';
import { filterCategory,filterPrice } from '../../state/actions';
import './SideBarProducts.scss'
import { Slider, Switch } from 'antd';

function SideBarProducts() {
  const categories = useSelector(state => state.categories.data);
  // const location = useLocation()
  const dispatch = useDispatch()

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  // console.log(query.get('category'));

  useEffect(() => {
    if (query.get('category')) {
      dispatch(filterCategory(query.get('category')))
      // toastSuccess('Tồn tại ' + query.get('category'))
    }
  }, [query.get("category")])

  return (
    <div className="siderbar-section" data-aos="fade-up" data-aos-delay="0">

      {/* <!-- Start Single Sidebar Widget --> */}
      <div className="sidebar-single-widget">
        <h6 className="sidebar-title">Danh mục</h6>
        <div className="sidebar-content">
          <ul className="sidebar-menu">

            {categories?.map(item =>
              <li className={item.id===parseInt(query.get('category'))?'category-item red':'category-item '} key={item.id}><Link to={location => {
                return `${location.pathname}?category=${item.id}`
              }}><span>{item.name}</span></Link></li>
            )}
            {/* <li><a href="#">Football</a></li>
              <li><a href="#">Football</a></li>
              <li><a href="#"> Men's</a></li>
              <li><a href="#"> Portable Audio</a></li>
              <li><a href="#"> Smart Watches</a></li>
              <li><a href="#">Tennis</a></li>
              <li><a href="#"> Uncategorized</a></li>
              <li><a href="#"> Video Games</a></li>
              <li><a href="#">Women's</a></li> */}
          </ul>
        </div>
      </div>
      {/* <!-- End Single Sidebar Widget --> */}

      {/* <!-- Start Single Sidebar Widget --> */}
      <div className="sidebar-single-widget">
        <h6 className="sidebar-title">Giá tiền</h6>
        <div className="sidebar-content">
          <div id="slider-range"></div>
          <div className="filter-type-price">
            <label for="amount">Theo giá : </label>
            <input type="text" id="amount" />
            <br />
          
          </div>
          <Slider onAfterChange={value=>dispatch(filterPrice(value))} defaultValue={50000} step={10000} max={3000000} min={50000} disabled={false} />
        </div>
      </div>
       
      {/* <!-- End Single Sidebar Widget --> */}

      {/* <!-- Start Single Sidebar Widget --> */}
      <div className="sidebar-single-widget">
        <h6 className="sidebar-title">Thẻ tag</h6>
        <div className="sidebar-content">
          <div className="tag-link">
            <a href="#">asian</a>
            <a href="#">brown</a>
            <a href="#">euro</a>
            <a href="#">fashion</a>
            <a href="#">hat</a>
            <a href="#">t-shirt</a>
            <a href="#">teen</a>
            <a href="#">travel</a>
            <a href="#">white</a>
          </div>
        </div>
        {/* </div> <!-- End Single Sidebar Widget --> */}

        {/* <!-- Start Single Sidebar Widget --> */}
        <div className="sidebar-single-widget">
          <div className="sidebar-content">
            <a href="product-details-default.html" className="sidebar-banner img-hover-zoom">
              <img className="img-fluid" src="assets/images/banner/side-banner.jpg" alt="" />
            </a>
          </div>
          {/*  <!-- End Single Sidebar Widget --> */}
        </div>
      </div>
      {/* <!-- End Sidebar Area --> */}
    </div>

  )
}

export default SideBarProducts
