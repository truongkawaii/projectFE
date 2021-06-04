import React from 'react'
import About from '../../components/About/About';
import Arrivals from '../../components/Arrivals/Arrivals';
import Banner from '../../components/Banner/Banner';
import BannerPro from '../../components/BannerPro/BannerPro';
import BestSeller from '../../components/BestSeller/BestSeller';
import Header from '../../components/Header/Header';
import Latest from '../../components/Latest/Latest';
import LogoCompany from '../../components/LogoCompany/LogoCompany';
import Search from '../../components/Search/Search';
import Services from '../../components/Services/Services';
import ShowNow from '../../components/ShowNow/ShowNow';
import SlideSection from '../../components/SlideSection/SlideSection';
import Layout from '../../hoc/Layout/Layout';
import './Home.scss';
function Home() {
    return (
     
      <Layout>
        <div className="home">
          <SlideSection/>
          <About/>
          <LogoCompany/>
          <Banner/>
          <Arrivals/>
          <Services/>
          <BannerPro/>
          <BestSeller/>
          <ShowNow/>
          <Latest/>
          {/* <Search/> */}
          <div className="offcanvas-overlay"></div>
          </div>
      </Layout>
    )
}

export default Home
