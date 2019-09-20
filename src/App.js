import React from 'react';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import CampaignManager from './views/campaigns';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./globals/theme.js";
import './app.css';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng

function App() {
    const { i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

  return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
          <MuiThemeProvider theme={theme}>
            <div className={'app'}>
                <div className={'language-selector'}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Language</FormLabel>
                        <RadioGroup aria-label="position" name="position" value={getLanguage()} onChange={(e) => changeLanguage(e.target.value)} row>
                            <FormControlLabel
                                value="en"
                                control={<Radio color="primary"/>}
                                label="English"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="jp"
                                control={<Radio color="primary" />}
                                label="Japanese"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
                <CampaignManager/>
            </div>
          </MuiThemeProvider>
      </MuiPickersUtilsProvider>
  );
}

export default App;
