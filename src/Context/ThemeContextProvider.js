import { ClassNames } from '@emotion/react';
import React,{useState,createContext, useContext} from 'react'
import './../css/dark.css'
const AppThemeContext=createContext({});

const ThemeContextProvider = ({children}) => {
    const [darkMode,setDarkMode]=useState(false);
    // const togglefunction=()=>{
    //   setDarkMode(darkMode=>!darkMode);
    // }
  return (
    <AppThemeContext.Provider value={{darkMode,setDarkMode}}>
   
    {children}

 </AppThemeContext.Provider>

  )
}

export {AppThemeContext,ThemeContextProvider}