import React,{useState}from 'react'
import {IoMdContact} from 'react-icons/io'
import {FiMenu} from 'react-icons/fi'
const Login = () => {
  const [open,setOpen]=useState(false);
   const handleOpen=()=>{
    setOpen(!open);
   };
  // const handleMenuOne=()=>{
  //   setOpen(false);
  // };
  // const handleMenuTwo=()=>{
  //   setOpen(false);
  // };
  return (
    <>
    <div className='loginbox'>
      
    <IoMdContact onClick={handleOpen} className='login'/>
   
    <FiMenu onClick={handleOpen}className='login1'/>
     {open?(
      <div className='main'>
      <ul className='menu'>
        <li className='menu-item'>sign up</li>
        <li className='menu-item'>login</li>
        <li className='menu-item'>Air bnb your home</li>
        <li className='menu-item'>Host an experience</li>
        <li className='menu-item'>Help</li>
      </ul>
      </div>
    ):null}
   {/* {open ? <div>Is Open</div>:<div>Is Closed</div>}  */}
    </div>
    <hr></hr>
   
    </>
  )
}

export default Login