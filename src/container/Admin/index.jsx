import React, { Fragment, useEffect } from 'react'
import Cloud from '../../components/Cloud/Cloud'
import FooterAdmin from '../../components/FooterAdmin/FooterAdmin'
import Header from '../../components/Header/Header'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Inbox from '../../components/Inbox/Inbox'
import IntroAdmin from '../../components/IntroAdmin/IntroAdmin'
import LayoutAdmin from '../../components/LayoutAdmin/LayoutAdmin'
import Revenue from '../../components/Revenue/Revenue'
import SideBar from '../../components/SideBar/SideBar'
import Statistical from '../../components/Statistical/Statistical'
import { addFakeData } from '../../Services/fakeData'
// import Sidebar from '../../components/Sidebar/Sidebar'
import './Admin.scss'

function Admin(props) {
  useEffect(() => {
    //  addFakeData();
    return () => {
       
    }
  }, [ ])
  return (
    <LayoutAdmin>

      <IntroAdmin />
      <Statistical />
      {/* <!-- row --> */}
      <Revenue />
      {/* <!-- row --> */}
      <Cloud />
      {/* <!-- row --> */}
      <Inbox />
      {/* <!-- row --> */}

    </LayoutAdmin>
  )
}

export default Admin
