import React from 'react'

import {createTheme,Themeprovider} from '@mui/material/styles'
// import {textTransform} from '@mui/material/colors'
import {grey,pink } from '@mui/material/colors'
const theme=createTheme({
    typography:{
        allVariants:{
            fontFamily:'Raleway',
            textTransform:'none',
            fontSize:15,
        },
    },
    palette:{
        primary:{
            main:grey[700],
        },
        secondary:{
            main:pink[500],
        },
    },
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    px:1,
                },
                variant:'subtitle2',
                textTransform:'capitalize',
            },
        },
   
    Muistack:{
        defaultProps:{
            xs:{
                px:2,
                py:1,
            }, 
            spacing:2,
            direction:'row',
        },
    },
MuiPaper:{
    defaultProps:{
        elevation:0
    },
},
MuiLink:{
    defaultPaper:{
        sx:{
            color:theme=>theme.palette.primary.main,
        },
        Underline:'none',
    },
},
MuiButton:{
    defaultProps:{
        size:'small',
        p:0,
        disableRipple:true
    },variant:'text',
},
MuiTab:{
    defaultProps:{
        disableRipple:true,
    },
},
    },

});
const Appthemeprovider = (prop) => {
  return (
    <Themeprovider theme={theme}>{prop.children}</Themeprovider>
  )
}

export default Appthemeprovider