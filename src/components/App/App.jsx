import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
// import Login from '../../container/Login';
import 'react-circular-progressbar/dist/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import 'swiper/swiper.scss';




import Home from '../../container/Home/Home';
import Admin from '../../container/Admin';
import Login from '../../container/Login/Login';
import PrivateRoute from '../../hoc/PrivateRoute';
import LayoutAdmin from '../LayoutAdmin/LayoutAdmin';
import Products from '../../container/Products/Products';
import CatetgoriesAdmin from '../../container/CatetgoriesAdmin/CatetgoriesAdmin';
import { getAllProduct, getListCategories } from '../../state/actions';
import { useDispatch } from 'react-redux';
import Cart from '../../container/Cart/Cart';
import Checkout from '../../container/Checkout/Checkout';
import ContactUs from '../../container/ContactUs/ContactUs';
import ProductDetail from '../../container/ProductDetail/ProductDetail';
import ProductAdmin from '../../container/ProductAdmin/ProductAdmin';
import AboutUs from '../../container/AboutUs/AboutUs';
import { addBrandDemo, addCategoriesDemo, addFakeData } from '../../Services/fakeData';
import CheckoutSuccess from '../../container/CheckoutSuccess/CheckoutSuccess';
import Orders from '../../container/Orders/Orders';
import Stock from '../../container/Stock/Stock';



function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     dispatch(getProfileUser());
  //   }
  // }, [dispatch])
  useEffect(() => {
    // addCategoriesDemo()
    // addBrandDemo()
    // addFakeData()
    dispatch(getAllProduct())
    dispatch(getListCategories())
    return () => {
    }
  }, [])
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" exact="true" component={Home} />
          <Route path="/products" exact component={Products} />
          {/* <Route path="/admin" exact={true} component={Admin}/> */}
          <Route path="/login" exact={true} component={Login} />
          <PrivateRoute path="/admin" exact={true} component={Admin} />
          <PrivateRoute path="/categories" exact={true} component={CatetgoriesAdmin} />
          <Route path="/cart" exact={true} component={Cart} />
          <Route path="/checkout" exact={true} component={Checkout} />
          <Route path="/contact" exact={true} component={ContactUs} />
          <Route path="/products/:id" exact component={ProductDetail} />
          <Route path="/checkoutSuccess" exact component={CheckoutSuccess} />
          <PrivateRoute path="/products-admin" exact component={ProductAdmin} />
          <PrivateRoute path="/orders" exact component={Orders} />
          <PrivateRoute path="/stock" exact component={Stock} />
          <Route path="/about-us" exact component={AboutUs} />
        </Switch>


        {/* <Route path="/dashboard" exact="true">
            <Admin>
              <Dashboard/>
            </Admin>
          </Route>
          <Route path="/login" exact="true" component={Login}/> */}
        {/* <Redirect from="/"  to="/admin"/> */}
      </Router>

    </React.Fragment>
  );
}

export default React.memo(App);
