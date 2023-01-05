import React ,{useContext}from 'react'
import './../../scss/navbar.css'
import {CgDarkMode } from 'react-icons/cg'
import { AppThemeContext } from '../../Context/ThemeContextProvider'
// import MobileSearch from './MobileSearch'
import ReactSwitch from 'react-switch'
const Search = () => {
  const {darkMode,setDarkMode}=useContext(AppThemeContext);
  return (
    <>
      <div className='mid'>
        <div className='imag'>
          <img src='airbnb.png' alt='logo' />
        </div>
        {/* className='mid1' */}
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
          {/* <div className='dark'>
          <CgDarkMode onClick={()=>setDarkMode('pink')}/>
          </div> */}
        </div>
        <div className='dark'>
          <CgDarkMode className='darkicon' onClick={()=>setDarkMode(curr=>!curr)}/><br></br>
          Dark mode
          </div>
          {/* <div className='dark'>
            <ReactSwitch  onChange={()=>setDarkMode(curr=>!curr)} checked={darkMode==='pink'}/><br></br>
            Dark mode
          </div> */}
      </div>

      {/* <MobileSearch/> */}



    </>
  )
}

export default Search