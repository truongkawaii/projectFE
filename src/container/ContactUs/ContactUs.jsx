import React from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Layout from '../../hoc/Layout/Layout'

function ContactUs() {
  return (
    <Layout>
      <BreadCrumb title="LIÊN HỆ VỚI CHÚNG TÔI" />
      <div className="map-section" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe id="gmap_canvas"
                    src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* <!-- Start Contact Details --> */}
              <div className="contact-details-wrapper section-top-gap-100" data-aos="fade-up" data-aos-delay="0">
                <div className="contact-details">
                  {/* <!-- Start Contact Details Single Item --> */}
                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <a href="tel:+0123456789">0123456789</a>
                      <a href="tel:+0123456789">0123456789</a>
                    </div>
                  </div>
                  {/* <!-- End Contact Details Single Item --> */}
                  {/* <!-- Start Contact Details Single Item --> */}
                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <a href="mailto:demo@example.com">demo@example.com</a>
                      <a href="http://www.example.com/">www.example.com</a>
                    </div>
                  </div>
                  {/* <!-- End Contact Details Single Item --> */}
                  {/* <!-- Start Contact Details Single Item --> */}
                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <span>Địa chỉ của bạn ở đây.</span>
                    </div>
                  </div>
                  {/* <!-- End Contact Details Single Item --> */}
                </div>
                {/* <!-- Start Contact Social Link --> */}
                <div className="contact-social">
                  <h4>Theo dõi chúng tôi</h4>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
                {/* <!-- End Contact Social Link --> */}
              </div>
              {/* <!-- End Contact Details --> */}
            </div>
            <div className="col-lg-8">
              <div className="contact-form section-top-gap-100" data-aos="fade-up" data-aos-delay="200">
                <h3>Liên lạc</h3>
                <form id="contact-form" action="https://htmlmail.hasthemes.com/nazmul/mail.php" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="default-form-box mb-20">
                        <label for="contact-name">Tên bạn</label>
                        <input name="name" type="text" id="contact-name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="default-form-box mb-20">
                        <label for="contact-email">Email</label>
                        <input name="email" type="email" id="contact-email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="default-form-box mb-20">
                        <label for="contact-subject">Chủ đề</label>
                        <input name="subject" type="text" id="contact-subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="default-form-box mb-20">
                        <label for="contact-message">Tin nhắn của bạn</label>
                        <textarea name="message" id="contact-message" cols="30" rows="10"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="btn btn-lg btn-black-default-hover" type="submit">Gửi</button>
                    </div>
                    <p className="form-messege"></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
