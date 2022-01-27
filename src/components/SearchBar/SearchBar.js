import { Divider, IconButton, InputBase } from '@mui/material';
import React from 'react';
// Icons
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
    const styles = {
        search: {
            display:'flex',
            borderRadius:24,
            boxShadow:'none',
            zIndex:3,
            width:'100%',
            height:39,
            border:'1px solid #dfe1e5',
          },
          searchFieldOutline:{
              flex:1,
              display:'flex',
              padding: '0px 4px 0px 13px',
          },
          searchicon: {
            height:39,
            width:44,
            cursor:'pointer',
    
          },
          inputRoot: {
            color: '#fff',
            lineHeight:'34px',
            background: 'transparent',
            display:'flex',
            flex:'100%',
            marginLeft:5,
            fontSize:18,
            fontWeight:500,
            padding:'1px 1px 1px 0px'
          },
        //   divider:{
        //     display:'flex',
        //     backgroundColor:'#dfe1e5',
        //     cursor:'pointer',
        //     height:'65%',
        //     alignItems:'center',
        //     flexDirection:'row',
        //   },
        //   CloseIcon:{
        //     marginRight:'10px',
        //     fontWeight:100,
        //     color:'#fff'
            
        //   },
        //   closeAndDividerWrap:{
        //     display:'flex',
        //     padding:'0px 1px',
        //     background:'transparent',
        //     cursor:'pointer',
        //     flex:'1 0 auto',
        //     alignItems:'center',
        //   },
    }
    return (
        <div>
            <div style={styles.search} >
                <div style={styles.searchFieldOutline}>
                    <InputBase 
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        value={props.searchTermValue}
                        style={styles.inputRoot}
                    />
                    {/* { props.searchTermValue.length > 0 ? 
                        <div className={styles.closeAndDividerWrap}>
                        <CloseIcon onClick={props.onClear} className={styles.CloseIcon}  />
                            <Divider orientation="vertical" className={styles.divider}  />
                        </div>
                        :<div></div>
                    } */}
                </div>
                <IconButton 
                    color='inherit' 
                    style={{padding:8,marginRight:5,color:'#fff'}}
                    onClick={props.onButtonSubmit}
                  >
                      <SearchIcon  className={styles.searchIcon}/>
                  </IconButton>
            </div>
        </div>
    );
};

export default SearchBar;