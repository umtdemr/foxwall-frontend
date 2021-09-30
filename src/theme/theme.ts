import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
          main: '#FF6600',
          contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
          main: '#f50057',
        },
        text: {
          primary: 'rgba(0,0,0,0.87)',
          secondary: 'rgba(0,0,0,0.54)',
        },
      },
})

export default theme;

