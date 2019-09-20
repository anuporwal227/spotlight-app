import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const CampaignInfoDialog = ({data, open, onClose}) => {
	// const { id } = data;
	return (
        <Dialog
            open={open}
            onClose={onClose}>
            <DialogTitle>Campaign Details</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Clicking <b>YES</b> will permanently expire this coupon. Do you wish to proceed?
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
};

export default CampaignInfoDialog;
