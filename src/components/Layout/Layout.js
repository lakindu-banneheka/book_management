import React from 'react';
import Header from '../Header/Header';


const Layout = (props) => {

    return (
        <>
            <Header searchBar={props.searchBar} />
            { 
                props.children
            }
        </>
    );
};

export default Layout;