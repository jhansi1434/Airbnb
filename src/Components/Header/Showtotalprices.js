import React, { useState,useContext } from 'react'
// import { Link } from 'react-router-dom'
import { AppThemeContext } from '../../Context/ThemeContextProvider';
import './../../scss/navbar.css'
const Showtotalprices = () => {
  const [Close, setClose] = useState(false);
  
  const handleClose = () => {
    setClose(!Close);
  };
  // onChange={()=>setDarkMode((curr)=>(curr==="white"?"pink":"white"
  // rgb(250, 249, 249)
  const {darkMode}=useContext(AppThemeContext);
  return (
    <>
      <div className='nav' style={{backgroundColor:darkMode?'pink':'#969393'}} >Show total prices up front
        {/* <Link to='/Learnmore' className='link'> */}

          <button style={{backgroundColor:darkMode?'pink':'#969393'}} type="submit" className='link' onClick={handleClose}>Learn more</button>
       
          {Close ? (
             <div className='learn' >
            <div class='text'>
              <button className='closeshowtotal' onClick={handleClose}>❌</button>
              <img src='learn.png' alt="leran" />
              <h1>one total<br></br> price up <br></br>,front</h1>
              <p className='para'> You can now see the total price<br></br> up front,<br></br>
                including all fees, before taxes.</p>
              <button className='tryitbutton'>try it now</button><br></br>
              <p className='para2'> may be later</p>
            </div>
            </div>
          ) : null}
       

      </div>
    </>
  )
}

export default Showtotalprices