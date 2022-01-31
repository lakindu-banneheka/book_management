import { Button, Card, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { additem } from '../../actions/cart.actions';

const BookCard = (props) => {
    const dispatch = useDispatch();

    const [qty,setqty] = useState(1);
    const [isQtyAvailable,setisQtyAvailable] = useState(false);
    const [item,setitem] = useState({
        id:props.book._id,
        name:props.book.name,
        quantity:props.book.quantity,
        qty:qty,
        unit:props.book.price
    });

    useEffect(()=>{
        setitem({
            id:props.book._id,
            name:props.book.name,
            quantity:props.book.quantity,
            qty:qty,
            unit:props.book.price
        })
    },[props.book,qty])

    useEffect(()=>{
        if(props.book.quantity !== 0 && props.book.quantity > 0 ){
            setisQtyAvailable(false);
        } else {
            setisQtyAvailable(true);
            setqty(0);
        }
    },[props.book.quantity])

    const onChangeQty = (e) => {
        const value = e.target.value;
        if(!(value < 0) ){
            if(props.book.quantity < value){
                setqty(props.book.quantity)
            } else {
                setqty(value)
            }
        } else {
            setqty(0)
        }
    }
    const addToCart = () => {
        if(item){
            dispatch(additem(item));
        }
    }
    const routeStyle = {
        color:'#fff',
        textDecorationLine:'none',
    };

    return (
            <Card sx={{minHeight:'180px',background:'#e5e5e5',minWidth:'455px'}} >
                {/* <img src='' /> */}
                <div style={{display:'flex',justifyContent:'space-between',minWidth:'465px'}} >
                    <div style={{display:'flex'}} >
                        <div style={{border:'1px solid black',width:'150px',height:'180px',margin:'0px 10px 0px 0px'}} >

                        </div>
                        <div style={{padding:'8px 0px'}} >
                            <div>
                                <Typography sx={{fontSize:'18px',fontWeight:'600',color:'#202020',display:'inline-block'}} >{props.book.name}</Typography>
                            </div>
                            <div>
                                <Typography sx={{fontSize:'14px',fontWeight:'500',display:'inline-block',padding:'0px 5px 0px 0px',color:'#707070'}} >{props.book.author}</Typography>
                                <Typography sx={{fontSize:'15px',fontWeight:'500',display:'inline-block',padding:'0px 5px 0px 0px',color:'#707070'}} >{" | "}</Typography>
                                <Typography sx={{fontSize:'14px',fontWeight:'500',display:'inline-block',color:'#707070'}} >{props.book.lanuage}</Typography>
                            </div>
                            <div style={{margin:'5px 0px 0px 15px'}} >
                                <Typography sx={{fontSize:'16px',fontWeight:'600',display:'inline-block',padding:'0px 5px 0px 0px',color:'#757575'}} >{"Rs. "} </Typography>
                                <Typography sx={{fontSize:'16px',fontWeight:'600',display:'inline-block',color:'#757575'}} >{props.book.price}</Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'stretch',justifyItems:'center'}} >
                                <div style={{margin:'10px 10px 5px 0px',padding:'3px'}} >

                                    <Typography display={'inline-block'} >Qty :</Typography>
                                
                                    <input value={qty} id='qty' onChange={onChangeQty} style={{width:'50px',borderRadius:'10%',margin:'0px 15px 0px 5px'}} type='number' />
                                
                                    { props.book.quantity > 0 ? <Tooltip title='Available(In Stock)' arrow ><Typography sx={{cursor:'default',fontSize:'10px',fontWeight:'800',color:'green',display:'inline-block',background:'yellow'}} >{"AV"}</Typography></Tooltip>
                                        : <Tooltip title='Not Available (Out of Stock)' arrow ><Typography sx={{cursor:'default',fontSize:'10px',fontWeight:'800',color:'red',display:'inline-block',background:'yellow'}} >{"N/A"}</Typography></Tooltip>
                                    }
                                
                                </div>
                                <div style={{margin:'10px 15px 5px 10px'}}  >
                                    <Tooltip title='ADD TO CART' arrow >
                                        <span>
                                            <Button onClick={addToCart} color='warning' variant='contained' disabled={isQtyAvailable}
                                                sx={{height:'100%',textAlign:'start',padding:'8px',width:'34',boxShadow:'none',margin:'0px'}} 
                                            >
                                                <AddShoppingCartIcon fontSize='small' />
                                            </Button>
                                        </span>
                                    </Tooltip>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style={{width:'56px',height:'182px',margin:'0px 0px 0px 10px',textAlign:'center'}}>
                        <Link to={`/book/${props.book._id}`} style={routeStyle}>
                            <Tooltip title='MORE DETAILS' arrow followCursor >
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