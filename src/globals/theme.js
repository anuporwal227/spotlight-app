import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const SpotlightPrimary = {
    50: '#e6f4ff',
    100: '#b3dfff',
    200: '#66bfff',
    300: '#1a9fff',
    400: '#0086e6',
    500: '#0068b3',
    600: '#005999',
    700: '#004a80',
    800: '#003c66',
    900: '#002d4d',
    A100: '#cceaff',
    A200: '#66bfff',
    A400: '#1a9fff',
    A700: '#004a80'
};


const theme = createMuiTheme({
    palette: {
        primary: {
            light: SpotlightPrimary[300],
            main: SpotlightPrimary[500],
            dark: SpotlightPrimary[700],
            contrastText: '#ffffff',
        },
        secondary: red
    }
});

export default theme;
