import React, {Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => (
    <Fragment>
        <div className="wrapper">
            <Header />
            <main className="content">
                {props.children}
            </main>
            <div className="h-footer"/>
        </div>
        <Footer />
    </Fragment>
);

export default Layout;