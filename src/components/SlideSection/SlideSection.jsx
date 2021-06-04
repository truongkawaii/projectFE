import React from 'react'

function SlideSection() {
 
    return (
        <div className="hero-slider-section">
        {/* <!-- Slider main container --> */}
        <div className="hero-slider-active swiper-container">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
                {/* <!-- Start Hero Single Slider Item --> */}
                <div className="hero-single-slider-item swiper-slide">
                    {/* <!-- Hero Slider Image --> */}
                    <div className="hero-slider-bg">
                        <img src="assets/images/hero-slider/home-2/hero-slider-1.jpg" alt=""/>
                    </div>
                    {/* <!-- Hero Slider Content --> */}
                    <div className="hero-slider-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="hero-slider-content">
                                        <h4 className="subtitle">Làm từ các thành phần tươi</h4>
                                        <h1 className="title">Một cách tự nhiên & <br/> chăm sóc da hữu cơ </h1>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div> 
                 {/* <!-- End Hero Single Slider Item --> */} 
                {/* <!-- Start Hero Single Slider Item --> */}
                <div className="hero-single-slider-item swiper-slide">
                    {/* <!-- Hero Slider Image --> */}
                    <div className="hero-slider-bg">
                        <img src="assets/images/hero-slider/home-2/hero-slider-2.jpg" alt=""/>
                    </div>
                    {/* <!-- Hero Slider Content --> */}
                    <div className="hero-slider-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="hero-slider-content">
                                        <h4 className="subtitle">Chăm sóc da mặt cao cấp</h4>
                                        <h1 className="title">Khuôn mặt tươi tắn <br/>Chăm sóc da tự nhiên</h1>
                                        <a href="product-details-default.html" className="btn btn-lg btn-outline-green">Mua sắm ngay </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>  {/* <!-- End Hero Single Slider Item --> */}
            </div>

            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination active-color-green"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-button-prev d-none d-lg-block"></div>
            <div className="swiper-button-next d-none d-lg-block"></div>
        </div>
    </div> )
}

export default SlideSection
