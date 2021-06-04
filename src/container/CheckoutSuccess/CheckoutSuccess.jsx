import React from 'react'
import Layout from '../../hoc/Layout/Layout'
import {Link} from 'react-router-dom';
import './CheckoutSuccess.scss'
// import { fromPairs } from 'lodash'

function CheckoutSuccess() {
    return (
        <Layout>
             <div className="checkout-notice">
                 <span><i class="fa fa-check-circle"></i></span>
                 <h1>Your order is complete!</h1>
                 <p>Stay in touch so we can get back to you</p>

                 <Link class="returnHome" to={'/'}>Kepping shopping</Link>
             </div>
        </Layout>
    )
}

export default CheckoutSuccess
