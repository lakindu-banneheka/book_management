import { Button, Card, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
// Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const BookCard = () => {

    const [state,setstate] = useState({
        bookId:'',
        name:'',
        author:'',
        lang:'',
        price:0,
        avQty:0,
        qty:1,
        available:false,
    });
    useEffect(() => {
     if(state.avQty > 0){
        setstate({...state,available:true})
     }
    }, [state]);
    
    const onChangeQty = (e) => {
        const value = e.target.value;
        setstate({...state, qty:value})
    }
    const addToCart = () => {
        // adding to cart prosses
    }
    const routeStyle = {
        color:'#fff',
        textDecorationLine:'none',
    };

    return (
            <Card sx={{minHeight:'180px',background:'#e5e5e5',minWidth:'450px'}} >
                {/* <img src='' /> */}
                <div style={{display:'flex',justifyContent:'space-between'}} >
                    <div style={{display:'flex'}} >
                        <div style={{border:'1px solid black',width:'150px',height:'180px',margin:'0px 10px 0px 0px'}} >

                        </div>
                        <div style={{padding:'8px 0px'}} >
                            <div>
                                <Typography sx={{fontSize:'18px',fontWeight:'600',color:'#202020',display:'inline-block'}} >{"The Sun Also Rises by Ernest Hemingway"}</Typography>
                            </div>
                            <div>
                                <Typography sx={{fontSize:'14px',fontWeight:'500',display:'inline-block',padding:'0px 5px 0px 0px',color:'#707070'}} >{"Ernest Hemingway"}</Typography>
                                <Typography sx={{fontSize:'15px',fontWeight:'500',display:'inline-block',padding:'0px 5px 0px 0px',color:'#707070'}} >{" | "}</Typography>
                                <Typography sx={{fontSize:'14px',fontWeight:'500',display:'inline-block',color:'#707070'}} >{"English"}</Typography>
                            </div>
                            <div style={{margin:'5px 0px 0px 15px'}} >
                                <Typography sx={{fontSize:'16px',fontWeight:'600',display:'inline-block',padding:'0px 5px 0px 0px',color:'#757575'}} >{"LKRS"} </Typography>
                                <Typography sx={{fontSize:'16px',fontWeight:'600',display:'inline-block',color:'#757575'}} >{"1500.00"}</Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',justifyItems:'center'}} >
                                <div style={{margin:'10px 10px 5px 0px',padding:'3px'}} >
                                    <Typography display={'inline-block'} >Qty :</Typography>
                                    <input value={state.qty} id='qty' onChange={onChangeQty} style={{width:'50px',borderRadius:'10%',margin:'0px 15px 0px 5px'}} type={'number'} />
                                    { state.available ? <Typography sx={{fontSize:'10px',fontWeight:'800',color:'green',display:'inline-block',background:'yellow'}} >{"AV"}</Typography>
                                        : <Typography sx={{fontSize:'10px',fontWeight:'800',color:'red',display:'inline-block',background:'yellow'}} >{"N/A"}</Typography>
                                    }
                                </div>
                                <div style={{margin:'10px 15px 5px 10px'}}  >
                                <Tooltip title='ADD TO CART' arrow >
                                    <Button onClick={addToCart()} color='warning' variant='contained' focusRipple sx={{height:'100%',textAlign:'start',padding:'8px',width:'34',boxShadow:'none',margin:'0px'}} >
                                        <AddShoppingCartIcon fontSize='small' />
                                    </Button>
                                </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'56px',height:'182px',margin:'0px 0px 0px 10px',textAlign:'center'}}>
                        <Link to='/view' style={routeStyle}>
                            <Tooltip title='MORE DETAILS' arrow >
                                <Button color='primary' variant='contained' focusRipple sx={{height:'100%',textAlign:'start',padding:'8px',width:'34',boxShadow:'none',margin:'0px'}} >
                                        <ChevronRightIcon fontSize='large' />
                                </Button>
                            </Tooltip>
                        </Link>    
                    </div>
                </div>
                
            </Card>
    );
};

export default BookCard;

// padding:'15px 20px',