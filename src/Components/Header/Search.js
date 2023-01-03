import React from 'react'
import './../../scss/navbar.css'
// import MobileSearch from './MobileSearch'
const Search=()=> {
  return (
    <>
    <div className='mid'>
    <div className='imag'>
    <img src='airbnb.jpg' alt='logo'/>
    </div>
    <div className='mid1'>
    <div className='any'>
       <button className='searchbutton'> Anywhere</button>
    </div>
    <div className='line'></div>
    <div className='any1'>
       <button className='searchbutton'> Any Week</button>
    </div>
    <div className='line'></div>
    <div className='any2'>
      <button className='searchbutton'>  Add guests</button>
    </div>
    </div>
   </div> 
   
    {/* <MobileSearch/> */}
    
    
    
    </>
  )
}

export default Search