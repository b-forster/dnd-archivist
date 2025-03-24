import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#61429e', // Purple
            light: '#7e57b5',
            dark: '#472e78',
            contrastText: '#fff',
        },
        secondary: {
            main: '#97bcf4', // Light blue
            light: '#4a8fd8',
            dark: '#0e4a8c',
            contrastText: '#fff',
        },
        info: {
            main: '#1867b5', // Medium blue
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
            main: '#fbc411',
            contrastText: '#000',
        },
        success: {
            main: '#40cbc4',
            contrastText: '#000',
        },
        background: {
            default: '#111',
        },
        text: {
            // primary: '#c0c0c0', // Silver
            primary: '#97bcf4', // Light blue
            secondary: '#1867b5', // Medium blue
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Lugrasimo", cursive',
            color: '#61429e', // Purple
        },
        h2: {
            fontFamily: '"Macondo", serif',
            fontWeight: 'normal',
            fontSize: '1.5rem',
            color: '#1867b5', // Medium blue
        },
        h3: {
            fontFamily: '"Lugrasimo", cursive',
            fontSize: '1.5rem',
            color: '#97bcf4', // Light blue
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    textTransform: 'none',
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid #333',
                    borderRadius: 4,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid #333',
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                    '&:hover': {
                        // color: '#ff3083', //pink
                        // backgroundColor: 'rgba(255, 48, 131, 0.08)',
                    },
                },
            },
        },
    },
});

export default theme;
