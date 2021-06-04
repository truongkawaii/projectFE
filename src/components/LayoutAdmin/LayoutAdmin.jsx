import React, { useEffect } from 'react'
import Cloud from '../../components/Cloud/Cloud'
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin'
import Header from '../../components/Header/Header'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Inbox from '../../components/Inbox/Inbox'
import IntroAdmin from '../../components/IntroAdmin/IntroAdmin'
import Revenue from '../../components/Revenue/Revenue' 
import SideBar from '../../components/SideBar/SideBar'
import { Route, Redirect } from 'react-router-dom';
function LayoutAdmin(props) {
  return (
    <div className="main-wrapper">
      <SideBar />
      <div className="page-wrapper">
        {/* <!-- partial:partials/_navbar.html --> */}
        <HeaderAdmin />
        {/* <!-- partial --> */}
        <div className="page-content">
             {props.children}
        </div>
        {/* <!-- partial:partials/_footer.html --> */}
        <FooterAdmin />
        {/* <!-- partial --> */}

      </div>
    </div>
  )
}

export default LayoutAdmin
