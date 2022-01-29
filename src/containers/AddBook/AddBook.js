import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const AddBook = () => {

    const [newBook,setnewBook] = useState({
        name:'',
        author:'',
        language:'',
        price:0,
        quantity:0,
        publisher:'',
        cover_img:''
    });

    const onClickAddBook = () => {
        // send req to back end 
        if(newBook.name.length > 0){
            console.log(newBook)
        }
    }

    const onClickReset = () => {
        setnewBook({
            name:'',
            author:'',
            language:'',
            price:0,
            quantity:0,
            publisher:'',
            cover_img:''
        })
    }

    const handleChange = (event) => {
        const {value,id} = event.target;
        setnewBook({ ...newBook, [id]:value });
    };


    return (
        <div>
            <Layout>
                <Grid container justifyContent={'center'} >
                    <Grid item xs={11} style={{ backgroundColor:'#f5f5f5', borderRadius:'10px',padding:'20px 50px' ,margin:'30px 0px',width:'100%'}} >
                        <div style={{padding:'0px 0px 30px 0px',textAlign:'center'}} >
                            <Typography fontSize={'25px'} fontWeight={800} color={'#404040'} >ADD NEW BOOK</Typography>
                        </div>
                        <Grid container justifyContent={'center'} spacing={2} >
                            <Grid item xs={12} md={3} sx={{display:'flex',justifyContent:'center'}} >
                                <div style={{border:'1px solid black',width:'170px',minHeight:'220px'}} ></div>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Grid container justifyContent={'center'} spacing={2} >
                                    <Grid item xs={12}  >
                                        <FormControl fullWidth>
                                            <TextField value={newBook.name} onChange={handleChange} label="Book Name" id='name' variant='outlined' fullWidth  />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <FormControl fullWidth>
                                            <TextField value={newBook.price} onChange={handleChange} label="Price (LKRS:)" id='price' variant='outlined' type={'number'} fullWidth  />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <FormControl fullWidth>
                                            <TextField value={newBook.quantity} onChange={handleChange} label="Quantity" id='quantity' variant='outlined' type={'number'} fullWidth  />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <TextField value={newBook.author} onChange={handleChange} label="Author" id='author' variant='outlined' fullWidth  />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <TextField value={newBook.language} onChange={handleChange} label="Language" id='language' variant='outlined' fullWidth  />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <FormControl fullWidth>
                                    <TextField value={newBook.publisher} onChange={handleChange} label="Publisher" id='publisher' variant='outlined' fullWidth  />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div style={{padding:'25px 20px 10px 0px',display:'flex',justifyContent:'end'}} >
                            <Button onClick={onClickReset} variant='outlined' color='secondary' sx={{margin:'8px'}} >Reset</Button>
                            <Button onClick={onClickAddBook} variant='contained' sx={{margin:'8px'}}>Add Book</Button>
                        </div>
                    </Grid>
                </Grid>
            </Layout>
        </div>
    );
};

export default AddBook;