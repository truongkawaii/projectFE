import React from 'react'

function About() {
    return ( 
        <div id="offcanvas-about" className="offcanvas offcanvas-rightside offcanvas-mobile-about-section">
        {/* <!-- Start Offcanvas Header --> */}
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="ion-android-close"></i></button>
        {/* </div> <!-- End Offcanvas Header --> */}
        {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
        {/* <!-- Start Mobile contact Info --> */}
        <div className="mobile-contact-info">
            <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo_white.png" alt=""/></a>
            </div>

            <address className="address">
                <span>Address: Your address goes here.</span>
                <span>Call Us: 0123456789, 0123456789</span>
                <span>Email: demo@example.com</span>
            </address>

            <ul className="social-link">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>

            <ul className="user-link">
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
            </ul>
        </div>
        {/* <!-- End Mobile contact Info --> */}
        </div>
    </div> )
  }

export default About
