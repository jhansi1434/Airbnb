import React, { useContext } from 'react'
import Showtotalprices from '../../Components/Header/Showtotalprices';
// import { BrowserRouter } from 'react-router-dom';
import Search from '../../Components/Header/Search';
import Airbnbyourhome from '../../Components/Header/Airbnbyourhome';
import Global from '../../Components/Header/Global';
import Login from '../../Components/Header/Login';
import { CssBaseline, Box } from '@mui/material';
import OptionsTab from '../../Components/OptionsTab/Optionstab';
 import {Container} from '@mui/material';
import Locationscards from '../../Components/CardsDisplay/Locationscards';
import { AppThemeContext } from '../../Context/ThemeContextProvider';


const Landingpage = () => {
  const {darkMode}=useContext(AppThemeContext);
  return (
    <>
      {/* <BrowserRouter > */}
      <div  style={{backgroundColor:darkMode?'pink':'white'}}> 
    
        <Showtotalprices />
        <Search />
        <Airbnbyourhome />
        <Global />
        <Login />
        <CssBaseline />
        <Box>
          <OptionsTab />
          
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            flexGrow:'1',
            height:300,
            
            overflowY:'scroll'

          }}>
            <Container maxWidth="xl" sx={{mb:3}}>
          <Locationscards  style={{overflow:'scroll'}}/>
          </Container>

          </Box>
          </Box>
        
          </div> 
      {/* </BrowserRouter> */}

      

    </>
  )
}

export default Landingpage