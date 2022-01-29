import React from 'react';
import Header from '../Header/Header';


const Layout = (props) => {

    return (
        <>
            <Header searchBar={props.searchBar} />
            <div style={{marginTop:'80px',background:'#fff',minHeight:'88vh',minWidth:'600px'}} >
                {props.children}
            </div>
                
            
        </>
    );
};

export default Layout;