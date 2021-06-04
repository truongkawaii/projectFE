import React from 'react'
import './BreadCrumb.scss'
function BreadCrumb({title}) {
  return (
    <div className="breadcrumb-section breadcrumb-bg-color--golden">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="breadcrumb-title">Shop - List {title}</h3>
              <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                <nav aria-label="breadcrumb">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop-grid-sidebar-left.html">{title}</a></li>
                    <li className="active" aria-current="page">Shop List Left Sidebar</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BreadCrumb
