// Book description page
import { Button, Dialog, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const View = (props) => {
    const [openDelete,setopenDelete] = useState(false);
    const [openAddStock,setopenAddStock] = useState(false); 
    const [newQty,setnewQty] = useState(0);
    const [book,setbook] = useState({
        bookId:'',
        name:'',
        author:'',
        lang:'',
        price:0,
        qty:0,
    });

    const onChangeNewQty = (e) => {
        setnewQty(e.target.value);
    }

    const onClose = () => {
        setopenAddStock(false);
        setopenDelete(false);
    }
    const onDelete = () => {
        // set a req to back end to delete
        setopenDelete(false);
    }

    const onClickQtyUpdate = () => {
        // set a update req (qty)
        setopenAddStock(false); 
        setnewQty(0);
    }

    const routeStyle = {
        color:'#fff',
        textDecorationLine:'none',
    };


    return (
        <div>
            <Layout>
                <div style={{padding:'30px 0px'}} >
                    <Grid container justifyContent={'center'} >
                        <Grid item xs={11} style={{ backgroundColor:'#f5f5f5', borderRadius:'10px',padding:'20px 50px' ,margin:'30px 0px',width:'100%'}} >
                            <Grid container spacing={2} justifyContent={'start'}>
                                <Grid item xl={3} md={4} xs={10}>
                                    <div style={{border:'1px solid',width:'250px',height:'300px',margin:'11px'}} >

                                    </div>
                                </Grid>
                                <Grid item xl={6} md={8} xs={10} >
                                    <div style = {{padding:'10px', margin:'0px 0px 0px 30px'}} >
                                        <div className='book name' >
                                            {/* <Typography display={'inline-block'} sx={{fontWeight:'600',color:'#101010'}}>Book Name : </Typography> */}
                                            <Typography display={'inline-block'} sx={{fontWeight:'700',color:'#404040',fontSize:'30px'}}>{"The Sun Also Rises by Ernest Hemingway"}</Typography>
                                        </div>
                                        <div style = {{margin:'0px 3px 3px 15px',}} >

                                        { props.available ? <Typography sx={{fontSize:'14px',fontWeight:'800',color:'green',display:'inline-block',background:''}} >{"In Stock"}</Typography>
                                            : <Typography sx={{fontSize:'14px',fontWeight:'800',color:'red',display:'inline-block',background:''}} >{"Out of Stock"}</Typography>
                                        }
                                        
                                        </div>
                                        <div style = {{margin:'10px 0px'}} >
                                            <Typography sx = {{fontSize:'18px',fontWeight:'700',color:'#707070',display:'inline-block',padding:'0px 5px 0px 0px'}} >{"LKRS :"}</Typography>
                                            <Typography sx = {{fontSize:'18px',fontWeight:'700',color:'#707070',display:'inline-block'}} >{"1500.00"}</Typography>
                                        </div>
                                        <div style = {{margin:'10px 0px',display:'flex',alignItems:'center'}} >
                                            <div>
                                                <Typography sx = {{fontSize:'16px',fontWeight:'550',color:'#101010',display:'inline-block',padding:'0px 5px 0px 0px'}} >{"Quantity :"}</Typography>
                                                <Typography 
                                                    sx = {{fontSize:'16px',fontWeight:'550',color:'#505050',display:'inline-block',padding:'2px',border:'2px solid black',borderRadius:'5px',
                                                            minWidth:'50px',textAlign:'center',background:'#fff'
                                                        }} 
                                                >
                                                    {"0"}
                                                </Typography>
                                            </div>
                                            <div style={{margin:'0px 20px'}} >
                                                <Button onClick={() => {setopenAddStock(true)}} variant='contained' >Add New Stock</Button>
                                            </div>
                                            
                                        </div>
                                        <div style = {{margin:'10px 0px'}} >
                                            <div>
                                                <Typography sx = {{fontSize:'16px',fontWeight:'550',color:'#101010',display:'inline-block',padding:'0px 0px 5px 0px'}}>Info,</Typography>
                                            </div>
                                            <div style={{padding:'0px 0px 0px 10px'}} >
                                                <div>
                                                    <Typography sx = {{fontSize:'16px',fontWeight:'500',color:'#101010',display:'inline-block',padding:'0px 5px 3px 0px'}} >{"Author :"}</Typography>
                                                    <Typography sx = {{fontSize:'16px',fontWeight:'500',color:'#505050',display:'inline-block',padding:'0px 0px 3px 0px'}} >{"Ernest Hemingway"}</Typography>
                                                </div>
                                                <div>
                                                    <Typography sx = {{fontSize:'16px',fontWeight:'500',color:'#101010',display:'inline-block',padding:'0px 5px 3px 0px'}} >{"Language :"}</Typography>
                                                    <Typography sx = {{fontSize:'16px',fontWeight:'500',color:'#505050',display:'inline-block',padding:'0px 0px 3px 0px'}} >{"English"}</Typography>
                                                </div>
                                                <div>
                                                    <Typography sx = {{fontSize:'16px',fontWeight:'500',color:'#101010',display:'inline-block',padding:'0px 5px 3px 0px'}} >{"Publisher :"}</Typography>
                                                    <Typography sx = {{fontSize:'16px',fontWeight:'500',color:'#505050',display:'inline-block',padding:'0px 0px 3px 0px'}} >{""}</Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'end'}} >
                                            <div style={{margin:'10px'}} >
                                                <Link to='/editbook' style={routeStyle} ><Button variant='contained' startIcon={<EditIcon />} >{"Edit"}</Button></Link>
                                            </div>
                                            <div style={{margin:'10px'}} >
                                                <Button onClick={() => {setopenDelete(true)}} variant='contained' color='secondary' startIcon={<DeleteIcon />} >{"Delete"}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Layout>

            {/* Delete popup */}
            <Dialog
                open={openDelete}
                onClose={onClose}
            >
                <div style={{maxWidth:'450px'}} >
                    <div style={{padding:'20px 20px 20px 20px'}} >
                        <div style={{padding:'5px 10px 0px 0px'}} >
                            <Typography sx={{fontSize:'16px',fontWeight:'550'}} >{`Do you want to delete this book ?`}</Typography>
                            <div style={{display:'flex',paddingTop:'20px',alignItems:'center',justifyContent:'end'}} >
                                <Button onClick={onClose} color='secondary' variant='outlined' sx={{margin:'0px 5px'}} >{"No"}</Button>
                                <Button onClick={onDelete} color='secondary' variant='contained' sx={{margin:'0px 5px'}} >{"Yes"}</Button>
                            </div>    
                        </div>             
                    </div>
                </div>
                
            </Dialog>

            {/* Add new stock */}
            <Dialog
                open={openAddStock}
                onClose={onClose}
            >
                <div style={{maxWidth:'450px'}} >
                    <div style={{padding:'20px 20px 20px 20px'}} >
                        <div style={{padding:'5px 10px 0px 0px'}} >
                            <div>
                                <div style={{margin:'5px'}} >
                                    <Typography fontWeight={'600'} >{"Add new stock quantity,"}</Typography>

                                </div>
                                <div style={{marginTop:'15px',marginLeft:'10px'}} >
                                    <TextField type={'number'} value={newQty} onChange={onChangeNewQty} label='Quantity' />
                                </div>
                            </div>
                            <div style={{display:'flex',paddingTop:'20px',alignItems:'center',justifyContent:'end'}} >
                                <Button onClick={onClose} color='primary' variant='outlined' sx={{margin:'0px 5px'}} >{"cancel"}</Button>
                                <Button onClick={onClickQtyUpdate} color='primary' variant='contained' sx={{margin:'0px 5px'}} >{"Update"}</Button>
                            </div>    
                        </div>             
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default View;