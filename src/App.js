import React from 'react';
import Landingpage from './pages/LandingPage/Landingpage';
// import Showtotalprices from './Components/Header/Showtotalprices';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Search from './Components/Header/Search';
// import Airbnbyourhome from './Components/Header/Airbnbyourhome';
// import Global from './Components/Header/Global';
// import Login from './Components/Header/Login';
// import { CssBaseline, Box } from '@mui/material';
// import OptionsTab from './Components/OptionsTab/Optionstab';
//  import {Container} from '@mui/material';
// import Locationscards from './Components/CardsDisplay/Locationscards';
function App() {
  
  return (
    // <>
    //   <BrowserRouter >
        
    //     <Showtotalprices />
    //     <Search />
    //     <Airbnbyourhome />
    //     <Global />
    //     <Login />
    //     <CssBaseline />
    //     <Box>
    //       <OptionsTab />
          
    //       <Box sx={{
    //         display:'flex',
    //         flexDirection:'column',
    //         flexGrow:'1',
    //         height:300,
            
    //         overflowY:'scroll'

    //       }}>
    //         <Container maxWidth="xl" sx={{mb:3}}>
    //       <Locationscards  style={{overflow:'scroll'}}/>
    //       </Container>

    //       </Box>
    //       </Box>
        
        
    //   </BrowserRouter>

      

    // </>
    <BrowserRouter >
    <Routes>
    <Route path='/' element={<Landingpage/>}/>
    </Routes>
   
    </BrowserRouter>
    
  )
}

export default App;
