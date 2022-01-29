import React, { useState } from 'react';
import {AppBar, Toolbar,Typography,Box, Grid, IconButton, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import SaerchBar from '../SearchBar/SearchBar';
//Icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = (props) => {

    const [searchTermValue,setsearchTermValue] = useState('');

    const onChange = (e) => {
        setsearchTermValue(e.target.value);
        // back end on time search 

    }
    const onButtonSubmit = () => {
        // to the back end -- on click 

    }

    const routeStyle = {
        color:'#fff',
        textDecorationLine:'none',
    };

    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='fixed' sx = {{backgroundColor:'#424242', minHeight:'65px',boxShadow:'none'}} >
                    <Toolbar>
                        <Grid container justifyContent='space-between' alignItems='center' >
                            <Grid item xs={2}>
                                <Typography variant="h6" component="div">
                                    <Link to = '/' style={routeStyle} >
                                        Book Manager
                                    </Link>
                                </Typography>  
                            </Grid>
                            { props.searchBar ? 
                                    <Grid item xs={4}>
                                        <SaerchBar 
                                            searchTermValue={searchTermValue}
                                            placeholder='Search'
                                            onChange={onChange}
                                            onButtonSubmit={onButtonSubmit}
                                        />
                                    </Grid>
                                :
                                    <div></div>
                                }
                            <Grid item xs={2} sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}} >
                                <div style={{padding:'0px 5px'}} >
                                    <Link to='/' style={routeStyle}><Button color="inherit">{"Add a Book"}</Button></Link>
                                </div>
                                <div style={{padding:'0px 5px'}}  >
                                    <Link to='/' style={routeStyle}><IconButton color='warning' style={{padding:'10px'}} ><ShoppingCartIcon /></IconButton></Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;