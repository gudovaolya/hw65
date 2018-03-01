import React, {Component, Fragment} from 'react';
import Promo from '../../components/Promo/Promo';
import Testimonials from "../../components/Testimonials/Testimonials";

class Home extends Component {
    render () {
        return (
            <Fragment>
                <Promo />
                <Testimonials />
            </Fragment>

        )
    }
}

export default Home;