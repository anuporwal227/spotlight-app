import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import {Table, TBody, TR, TD} from '../Table';
import { convertDateFormat } from '../../utils/date-utils.js';


const CampaignInfoDialog = ({data = {}, open, onClose}) => {
	const { id, name, date, countries = [] } = data;
	return (
        <Dialog
            open={open}
            onClose={onClose}>
            <DialogTitle>Campaign Details</DialogTitle>
            <DialogContent>
                <Table>
                    <TBody>
                    <TR>
                        <TD className={'title'}>Campaign</TD>
                        <TD>{name}</TD>
                    </TR>
                    <TR>
                        <TD className={'title'}>Date</TD>
                        <TD>{convertDateFormat(date)}</TD>
                    </TR>
                    <TR>
                        <TD className={'title'}>Countries</TD>
                        <TD>{countries.join(', ')}</TD>
                    </TR>
                    </TBody>
                </Table>
            </DialogContent>
        </Dialog>
    )
};

export default CampaignInfoDialog;
