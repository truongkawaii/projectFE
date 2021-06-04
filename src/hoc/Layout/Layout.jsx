import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'

function Layout(props) {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
