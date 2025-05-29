import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6f54af', // Purple
            light: '#7e57b5',
            dark: '#472e78',
            contrastText: '#fff',
        },
        secondary: {
            main: '#2f63b8', // Medium blue
            light: '#4a8fd8',
            dark: '#0e4a8c',
            contrastText: '#fff',
        },
        info: {
            main: '#183768', // Dark blue-gray
            light: '#b5d1ff',
            dark: '#6a8ac0',
            contrastText: '#000',
        },
        error: {
            main: '#ff3083', // Pink
            light: '#ff6aa6',
            dark: '#c80055',
            contrastText: '#fff',
        },
        warning: {
            main: '#fbc411', // Gold
            contrastText: '#000',
        },
        success: {
            main: '#40cbc4', // Aqua
            contrastText: '#000',
        },
        background: {
            default: '#111',
            paper: '#f7f7ff',
        },
        text: {
            primary: '#5f9eeb', // Medium blue
            secondary: '#234d90', // Dark blue-gray
            disabled: '#97bcf4', // Light blue
        },
    },
    typography: {
        fontFamily: '"Asul", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Lugrasimo", cursive',
            color: '#6247aa', // Purple
        },
        h2: {
            fontFamily: '"Asul", serif',
            fontWeight: 'normal',
            fontSize: '1.5rem',
            color: '#183768', // Dark blue-gray

        },
        h3: {
            fontFamily: '"Asul", "Helvetica", "Arial", sans-serif',
            fontSize: '2rem',
            color: '#2f63b8', // Medium blue
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2f63b8', // Medium blue
                    color: 'black',
                    borderRadius: 4,
                    textTransform: 'none',
                    '&.Mui-disabled': {
                        color: '#97bcf4', // Light blue
                        backgroundColor: 'transparent',
                        border: '1px dashed #97bcf4', // Light blue
                        opacity: 0.7, // Add some opacity to indicate it's disabled
                    },
                    '&:hover': {
                        backgroundColor: '#61429e', // Purple
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    border: '1px solid #333',
                    borderRadius: 4,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid #333',
                    textAlign: 'center',
                    '&:last-child': {
                        borderBottom: 'none',
                    }
                },
            },
        },
    },
});

export default theme;
