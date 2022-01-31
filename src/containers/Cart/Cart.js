import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { changeQty } from '../../actions/cart.actions';

const Cart = () => {
    // const [qty,setqty] = useState(1);
    const [isQtyAvailable,setisQtyAvailable] = useState(false);

    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items);
    const [sum_price,setsum_price] = useState({
        sub_total:[],
        total:0
    }); 
    let dollarUSLocale = Intl.NumberFormat('en-US');

    useEffect(()=>{
        let sum = 0;
        let subTotal = 0;
        subTotal = items.map(i => (i.unit*i.qty));
        for (let i = 0; i < subTotal.length; i++) {
            sum += subTotal[i];
        }
        setsum_price({sub_total : subTotal , total : sum })
    },[items])    

    useEffect(()=>{
        items.map(item => (
            (item.quantity !== 0 && item.quantity > 0 ) 
                ?setisQtyAvailable(false)
                :setisQtyAvailable(true)
        )
    )},[items])

    const onChangeQty = (e,i) => {
        const value = e.target.value
        console.log(value,i)

        items.map(item => (
        (!(value < 0) )?
            ((i.quantity < value)
                ? dispatch(changeQty({qty:i.quantity,id:item.id}))
                : dispatch(changeQty({qty:value,id:item.id})))
            : dispatch(changeQty({qty:0,id:item.id}))
        ))
        ;
    }

    const onClickDelete = () => {

    };


    return (
        <div>
            <Layout>
                <div style={{padding:'0px 0px 30px 0px'}} >
                    <Grid container justifyContent={'center'} >
                        <Grid item xs={11} style={{ backgroundColor:'#f5f5f5', borderRadius:'10px',padding:'20px 50px' ,margin:'30px 0px',width:'100%'}} >
                            <div style={{padding:'0px 0px 30px 0px',textAlign:'center'}} >
                                <Typography fontSize={'25px'} fontWeight={800} color={'#404040'} >BOOK CART</Typography>
                            </div>
                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 450 }}>
                                <TableHead sx={{ background:'#606060' }} >
                                    <TableRow  >
                                        <TableCell sx={{color:'#fff',fontWeight:'500'}} >Name</TableCell>
                                        <TableCell align="center" sx={{color:'#fff',fontWeight:'500'}} >Qty.</TableCell>
                                        <TableCell align="right" sx={{color:'#fff',fontWeight:'500'}} >Unit(Rs.)</TableCell>
                                        <TableCell align="right" sx={{color:'#fff',fontWeight:'500'}} >Sum(Rs.)</TableCell>
                                        <TableCell align="center" sx={{color:'#fff',fontWeight:'500'}} >Remove</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { items.map((item,i)=>(
                                        <TableRow key={i} >
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell align="center">
                                                <input value={item.qty} id='qty' onChange={(e) => onChangeQty(e,i)} style={{width:'50px',borderRadius:'5px',margin:'0px 15px 0px 5px'}} type={'number'} />
                                            </TableCell>
                                            <TableCell align="right">{dollarUSLocale.format(item.unit)}</TableCell>
                                            <TableCell align="right">{dollarUSLocale.format(sum_price.sub_total[i])}</TableCell>
                                            <TableCell align="center">
                                                <IconButton onClick={onClickDelete} ><DeleteIcon /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow sx={{ background:'#' }}  >
                                        <TableCell align="right" colSpan={3} sx={{fontWeight:'550'}} >Total</TableCell>
                                        <TableCell align="right">{dollarUSLocale.format(sum_price.total)}</TableCell>
                                        <TableCell align="center" ></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        </div>
    );
};

export default Cart;