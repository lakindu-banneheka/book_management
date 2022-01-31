import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link, useParams , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getABook, updateBook } from '../../actions/book.actions';

const EditBook = () => {

    let navigate = useNavigate();
    const params = useParams();
    const book = useSelector(state => state.book.book);

    const [bookState,setbookState] = useState({
        name:'', 
        author:'' , 
        quantity:0 , 
        price:0 ,
        lanuage:'' , 
        publisher:''
    })

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getABook(params.id)) // send book_id 
    },[dispatch,params.id])

    useEffect(() => {
        setbookState(book)
    },[book]);

    const onClickEditBook = () => {
        if(bookState.name.length > 0){
            dispatch(updateBook(bookState,params.id))
            navigate(`/book/${bookState._id}`)
        }
    }

    const onClickReset = () => {
        setbookState(book);
    }

    const handleChange = (event) => {
        const {value,id} = event.target;
        setbookState({ ...bookState, [id]:value });
    };

    const routeStyle = {
        color:'#fff',
        textDecorationLine:'none',
    };


    return (
        <div>
            <Layout>
                <Grid container justifyContent={'center'} >
                    <Grid item xs={11} style={{ backgroundColor:'#f5f5f5', borderRadius:'10px',padding:'20px 50px' ,margin:'30px 0px',width:'100%'}} >
                        <div style={{padding:'0px 0px 30px 0px',textAlign:'center'}} >
                            <Typography fontSize={'25px'} fontWeight={800} color={'#404040'} >EDIT BOOK DETAILS</Typography>
                        </div>
                        <Grid container justifyContent={'center'} spacing={2} >
                            <Grid item xs={12} md={3} sx={{display:'flex',justifyContent:'center'}} >
                                <div style={{border:'1px solid black',width:'170px',minHeight:'220px'}} ></div>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Grid container justifyContent={'center'} spacing={2} >
                                    <Grid item xs={12}  >
                                        <FormControl fullWidth>
                                            <TextField value={bookState.name} onChange={handleChange} label="Book Name" id='name' variant='outlined' fullWidth  />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <FormControl fullWidth>
                                            <TextField value={bookState.price} onChange={handleChange} label="Price (LKRS:)" id='price' variant='outlined' type={'number'} fullWidth  />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <FormControl fullWidth>
                                            <TextField value={bookState.quantity} onChange={handleChange} label="Quantity" id='quantity' variant='outlined' type={'number'} fullWidth  />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <TextField value={bookState.author} onChange={handleChange} label="Author" id='author' variant='outlined' fullWidth  />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <TextField value={bookState.lanuage} onChange={handleChange} label="Language" id='lanuage' variant='outlined' fullWidth  />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <FormControl fullWidth>
                                    <TextField value={bookState.publisher} onChange={handleChange} label="Publisher" id='publisher' variant='outlined' fullWidth  />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div style={{padding:'25px 20px 10px 0px',display:'flex',justifyContent:'end'}} >
                            <Link to={`/book/${bookState._id}`} style={routeStyle} ><Button variant='outlined' sx={{margin:'8px'}}>cancel</Button></Link>
                            <Button onClick={onClickReset} variant='outlined' color='secondary' sx={{margin:'8px'}} >Reset</Button>
                            <Button onClick={onClickEditBook} variant='contained' sx={{margin:'8px'}}>Edit Book</Button>
                        </div>
                    </Grid>
                </Grid>
            </Layout>
        </div>
    );
};

export default EditBook;