import React from 'react';
import Landingpage from './pages/LandingPage/Landingpage';
// import Showtotalprices from './Components/Header/Showtotalprices';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Airbnbhome from './pages/Airbnbhome/Airbnbhomepage';
// import Container from './theme/Container';
import {ThemeContextProvider}  from './Context/ThemeContextProvider';

// import Container from './theme/Container'
function App() {
  
  return (
    <ThemeContextProvider>
    
    <BrowserRouter >
    {/* <Container/> */}
    <Routes>
    {/* <Route path='/' element={<Container/>}/>  */}
     <Route path='/' element={<Landingpage/>}/> 
    <Route path='/Airbnbhome' element={<Airbnbhome/>}/>
    </Routes>
   
    </BrowserRouter>
    
    </ThemeContextProvider>
  )
}

export default App;
