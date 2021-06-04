import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import './SideBar.scss'
function SideBar() {
  return (
    <Fragment>
      <nav className="sidebar">
        <div className="sidebar-header">
          <a href="#" className="sidebar-brand">
            Dalamo<span>ADMIN</span>
          </a>
          <div className="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="sidebar-body">
          <ul className="nav">
            <li className="nav-item nav-category">Trang chính</li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <i className="link-icon" data-feather="box"></i>
                <span className="link-title">Quản lý</span>
              </Link>
            </li>
            <li className="nav-item nav-category">web apps</li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
                <i className="link-icon" data-feather="mail"></i>
                <span className="link-title">Email</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="emails">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/email/inbox.html" className="nav-link">Nhắn tin</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/email/read.html" className="nav-link">Đọc</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/email/compose.html" className="nav-link">Compose</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link">
                <i className="link-icon" data-feather="message-square"></i>
                <span className="link-title">Danh mục</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products-admin" className="nav-link">
                <i className="link-icon" data-feather="codepen"></i>
                <span className="link-title">Sản phẩm</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link">
                <i className="link-icon" data-feather="calendar"></i>
                <span className="link-title">Đơn hàng</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stock" className="nav-link">
                <i className="link-icon" data-feather="calendar"></i>
                <span className="link-title">Lô hàng</span>
              </Link>
            </li>
            <li className="nav-item nav-category">Thành phần</li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">
                <i className="link-icon" data-feather="feather"></i>
                <span className="link-title">UI Kit</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="uiComponents">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/ui-components/alerts.html" className="nav-link">Thông báo</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/badges.html" className="nav-link">Badges</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/breadcrumbs.html" className="nav-link">Breadcrumbs</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/buttons.html" className="nav-link">Buttons</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/button-group.html" className="nav-link">Button group</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/cards.html" className="nav-link">Cards</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/carousel.html" className="nav-link">Carousel</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/collapse.html" className="nav-link">Collapse</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/dropdowns.html" className="nav-link">Dropdowns</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/list-group.html" className="nav-link">List group</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/media-object.html" className="nav-link">Media object</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/modal.html" className="nav-link">Modal</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/navs.html" className="nav-link">Navs</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/navbar.html" className="nav-link">Navbar</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/pagination.html" className="nav-link">Pagination</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/popover.html" className="nav-link">Popovers</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/progress.html" className="nav-link">Progress</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/scrollbar.html" className="nav-link">Scrollbar</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/scrollspy.html" className="nav-link">Scrollspy</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/spinners.html" className="nav-link">Spinners</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/ui-components/tooltips.html" className="nav-link">Tooltips</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#advancedUI" role="button" aria-expanded="false" aria-controls="advancedUI">
                <i className="link-icon" data-feather="anchor"></i>
                <span className="link-title">Advanced UI</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="advancedUI">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/advanced-ui/cropper.html" className="nav-link">Cropper</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/advanced-ui/owl-carousel.html" className="nav-link">Owl carousel</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/advanced-ui/sweet-alert.html" className="nav-link">Sweet Alert</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="forms">
                <i className="link-icon" data-feather="inbox"></i>
                <span className="link-title">Forms</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="forms">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/forms/basic-elements.html" className="nav-link">Basic Elements</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/advanced-elements.html" className="nav-link">Advanced Elements</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">Editors</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/wizard.html" className="nav-link">Wizard</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#charts" role="button" aria-expanded="false" aria-controls="charts">
                <i className="link-icon" data-feather="pie-chart"></i>
                <span className="link-title">Charts</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="charts">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/charts/apex.html" className="nav-link">Apex</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">ChartJs</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link">Flot</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/morrisjs.html" className="nav-link">Morris</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/peity.html" className="nav-link">Peity</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/sparkline.html" className="nav-link">Sparkline</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
                <i className="link-icon" data-feather="layout"></i>
                <span className="link-title">Table</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="tables">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/tables/basic-table.html" className="nav-link">Basic Tables</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data-table.html" className="nav-link">Data Table</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#icons" role="button" aria-expanded="false" aria-controls="icons">
                <i className="link-icon" data-feather="smile"></i>
                <span className="link-title">Icons</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/icons/feather-icons.html" className="nav-link">Feather Icons</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/icons/flag-icons.html" className="nav-link">Flag Icons</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/icons/mdi-icons.html" className="nav-link">Mdi Icons</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">Pages</li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">
                <i className="link-icon" data-feather="book"></i>
                <span className="link-title">Special pages</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/general/blank-page.html" className="nav-link">Blank page</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/general/faq.html" className="nav-link">Faq</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/general/invoice.html" className="nav-link">Invoice</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/general/profile.html" className="nav-link">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/general/pricing.html" className="nav-link">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/general/timeline.html" className="nav-link">Timeline</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#authPages" role="button" aria-expanded="false" aria-controls="authPages">
                <i className="link-icon" data-feather="unlock"></i>
                <span className="link-title">Authentication</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="authPages">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/auth/login.html" className="nav-link">Login</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/auth/register.html" className="nav-link">Register</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#errorPages" role="button" aria-expanded="false" aria-controls="errorPages">
                <i className="link-icon" data-feather="cloud-off"></i>
                <span className="link-title">Error</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="errorPages">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="pages/error/404.html" className="nav-link">404</a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/error/500.html" className="nav-link">500</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">Docs</li>
            <li className="nav-item">
              <a href="https://www.nobleui.com/html/documentation/docs.html" target="_blank" className="nav-link">
                <i className="link-icon" data-feather="hash"></i>
                <span className="link-title">Documentation</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="settings-sidebar">
        <div className="sidebar-body">
          <a href="#" className="settings-sidebar-toggler">
            <i data-feather="settings"></i>
          </a>
          <h6 className="text-muted">Sidebar:</h6>
          <div className="form-group border-bottom">
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="sidebarThemeSettings" id="sidebarLight" value="sidebar-light" checked />
              Light
            </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="sidebarThemeSettings" id="sidebarDark" value="sidebar-dark" />
              Dark
            </label>
            </div>
          </div>
          <div className="theme-wrapper">
            <h6 className="text-muted mb-2">Light Theme:</h6>
            <a className="theme-item active" href="dashboard-one.html">
              <img src="../assets/images/screenshots/light.jpg" alt="light theme" />
            </a>
            <h6 className="text-muted mb-2">Dark Theme:</h6>
            <a className="theme-item" href="https://www.nobleui.com/html/template/demo_2/dashboard-one.html">
              <img src="../assets/images/screenshots/dark.jpg" alt="light theme" />
            </a>
          </div>
        </div>
      </nav>

    </Fragment>
  )
}

export default SideBar
