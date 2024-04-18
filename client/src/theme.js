import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#479fdf',
            contrastText: '#c0c0c0',
        },
        secondary: {
            main: '#7e40cb',
        },
        error: {
            main: '#981983',
        },
        text: {
            primary: '#c0c0c0',
        },
        info: {
            main: '#40cbc4',
        },
        warning: {
            main: '#fbc411',
        },
    },
});

export default theme;