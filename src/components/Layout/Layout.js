import React, {Fragment} from 'react';
import Header from '../Header/Header';

const Layout = (props) => (
    <Fragment>
        <Header />
        <main>
            {props.children}
        </main>
        <footer>
            Footer
        </footer>
    </Fragment>
);

export default Layout;