import React, {Fragment} from 'react';
import loader from '../../../assets/images/loader.gif';
import './Loader.css';

const Loader = () => (
    <Fragment>
        <div className="loader">
            <img src={loader} alt=""/>
        </div>
    </Fragment>
);

export default Loader;
