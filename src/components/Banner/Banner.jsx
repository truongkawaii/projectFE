import React from 'react'

function Banner() {
    return (
        <div className="banner-section section-top-gap-100 section-fluid">
        <div className="banner-wrapper">
            <div className="container">
                <div className="row mb-n6">
                    <div className="col-md-4 col-12 mb-6">
                        {/* <!-- Start Banner Single Item --> */}
                        <div className="banner-single-item banner-style-5 img-responsive" data-aos="fade-up"
                            data-aos-delay="0">
                            <a href="product-details-default.html" className="image banner-animation">
                                <img src="assets/images/banner/banner-style-5-img-1.jpg" alt=""/>
                            </a>
                        </div>
                        {/* <!-- End Banner Single Item --> */}
                    </div>
                    <div className="col-md-4 col-12 mb-6">
                        {/* <!-- Start Banner Single Item --> */}
                        <div className="banner-single-item banner-style-5 img-responsive" data-aos="fade-up"
                            data-aos-delay="200">
                            <a href="product-details-default.html" className="image banner-animation">
                                <img src="assets/images/banner/banner-style-5-img-2.jpg" alt=""/>
                            </a>
                        </div>
                        {/* <!-- End Banner Single Item --> */}
                    </div>
                    <div className="col-md-4 col-12 mb-6">
                        {/* <!-- Start Banner Single Item --> */}
                        <div className="banner-single-item banner-style-5 img-responsive" data-aos="fade-up"
                            data-aos-delay="400">
                            <a href="product-details-default.html" className="image banner-animation">
                                <img src="assets/images/banner/banner-style-5-img-3.jpg" alt=""/>
                            </a>
                        </div>
                        {/* <!-- End Banner Single Item --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner
