import React from 'react'
import './airbnbhome.scss'
import Box from '@mui/material/Box'
import { BiHomeHeart } from 'react-icons/bi'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { FaRupeeSign } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im'

const Airbnbhome = () => {
  return (
    <>
      
      <Box className="maindiv" sx={{
        height: 510,

        overflowY: 'scroll'
      }}>

      <Box className='maindiv__back'>
        <img className="maindiv__image1" src='logo.jpg' alt="logo" />
        <Box className='maindiv__ready'>Ready to airbnb it?
        </Box>
        <Box className='maindiv__setup'>
          <Button sx={{ backgroundColor: 'rgb(237, 9, 47)', color: 'white' }}> <BiHomeHeart />Airbnb Setup</Button>
        </Box>
        </Box>
        <Box className='maindiv__map' >
        <img className='imagemap' src='airbnbmap.jpg' alt='map' />
      </Box>

        <Box className='maindiv__earn'>
          Air bnb it.<br></br>
          <p className='maindiv__para'>you cloud earn</p>
        </Box>
        <Box className='maindiv__number'>
          <FaRupeeSign /> 3,145
        </Box>
        <Box className='maindiv__estimation'>
          1 night at an estimated ₹3,147 a night
        </Box>
        <Box width={400} >
          <Slider className="maindiv__slider" sx={{ color: 'black' }} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
        {/* <Box  className='maindiv__map' >
     <img  className='imagemap'src='airbnbmap.jpg' alt='map'/>
     </Box> */}
        <Box className='maindiv__estimate'>
          Learn how to estimate your earnings
        </Box>
        <Box className='maindiv__search'>
          <ImSearch className='maindiv__searchicon' />
          Hyderbad .entire place .4guests
        </Box>
        {/* <ImSearch className='searchicon' /> */}
        <Box >
     <h1> Airbnb it easily with Airbnb Setup</h1>
      </Box>
      <Box>
        <img  className='maindiv__setupimage' src='setupimage.webp' alt='set'/>
      </Box>
      <Box className='maindiv__text'>
      <Box >
      <h4>One-to-one guidance from a Superhost</h4>
      We’ll match you with a Superhost in your area, <br></br>
      who’ll guide you from your first question to your<br></br>
       first guest – by phone, video call or chat.
       </Box>
      
       <Box>
      <h4>An experienced guest for your first booking</h4> 
      For your first booking, you can choose to welcome<br></br>
       an experienced guest who has at least three stays<br></br>
        and a good track record on Airbnb
       </Box>
       <Box>
      <h4> Specialised support from Airbnb</h4>
       New Hosts get one-tap access to specially<br></br>
        trained Community Support agents who can<br></br> 
        help with everything from account issues to billing support.
       </Box>
       </Box>
      </Box>
     

    </>
  )
}

export default Airbnbhome;