import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
// Icons
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = (props) => {

    const [row,setrow] = useState([
        {

        }
    ]);

    const onChangeQty = () => {

    };
    
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
                                <TableRow>
                                    <TableCell sx={{color:'#fff',fontWeight:'500'}} >Name</TableCell>
                                    <TableCell align="center" sx={{color:'#fff',fontWeight:'500'}} >Qty.</TableCell>
                                    <TableCell align="right" sx={{color:'#fff',fontWeight:'500'}} >Unit</TableCell>
                                    <TableCell align="right" sx={{color:'#fff',fontWeight:'500'}} >Sum</TableCell>
                                    <TableCell align="center" sx={{color:'#fff',fontWeight:'500'}} >Remove</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>The Sun Also Rises by Ernest Hemingway</TableCell>
                                        <TableCell align="center">
                                            <input value={props.qty} id='qty' onChange={onChangeQty} style={{width:'50px',borderRadius:'10%',margin:'0px 15px 0px 5px'}} type={'number'} />
                                        </TableCell>
                                        <TableCell align="right">500.00</TableCell>
                                        <TableCell align="right">10,000.00</TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={onClickDelete} ><DeleteIcon /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                {/* {rows.map((row) => (
                                    <TableRow key={row.desc}>
                                    <TableCell>{row.desc}</TableCell>
                                    <TableCell align="right">{row.qty}</TableCell>
                                    <TableCell align="right">{row.unit}</TableCell>
                                    <TableCell align="right">{""}</TableCell>
                                    </TableRow>
                                ))} */}
                                    <TableRow sx={{ background:'#' }}  >
                                        <TableCell align="right" colSpan={3} sx={{fontWeight:'550'}} >Total</TableCell>
                                        <TableCell align="right">10,000.00</TableCell>
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