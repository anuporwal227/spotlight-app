import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SpotlightIcon from '@material-ui/icons/HighlightTwoTone';

import css from './styles.module.scss';

const ApplicationHeader = () => {
    return (
        <AppBar position='fixed' color='primary' style={{zIndex: 1201}}>
            <Toolbar>
                <IconButton edge='start' color='inherit'>
                    <SpotlightIcon />
                </IconButton>
                <Typography variant='h6' className={css['grow']}>
                    Spotlight
                </Typography>
                <div>
                    <Typography variant='h6' style={{display: 'inline-block'}}>
                        BETA
                    </Typography>
                    <IconButton color='inherit'>
                        <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default ApplicationHeader;

