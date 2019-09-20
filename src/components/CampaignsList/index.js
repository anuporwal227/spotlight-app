import React  from 'react';
import { Table, TBody, TD, TH, THead, TR } from '../Table';
import CalendarIcon from '@material-ui/icons/DateRange';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { diff, convertDateFormat } from '../../utils/date-utils.js';
import { DatePicker } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';

import css from './styles.module.scss';

const TableHeaders = ({showActions}) => (
    <THead>
    <TH><div>Date</div></TH>
    <TH><div>Campaign</div></TH>
    <TH><div>View</div></TH>
    {showActions && <TH><div>Actions</div></TH>}
    </THead>
);

const CampaignRow = ({date, name, countries, id, showActions, updateDateTimeForCampaign}) => {
    const { t } = useTranslation();
    const differenceInDays = diff(date);
    const differenceString = differenceInDays > 0 ? `${differenceInDays} days left` : differenceInDays === 0 ? 'Today' : `${Math.abs(differenceInDays)} days ago`
    return(
        <TR className={css['campaign-row']}>
            <TD>
                <div>
                    <p>{convertDateFormat(date)}</p>
                    <p>{differenceString}</p>
                </div>
            </TD>
            <TD>
                <div>
                    <p>{t(name)}</p>
                    <p>{countries.join(', ')}</p>
                </div>
            </TD>
            <TD>View</TD>
            {showActions &&
            <TD className={css.actions}>
                <div className={css.reschedule}>
                <IconButton onClick={() => document.getElementById(id).click()}>
                    <CalendarIcon/>
                </IconButton>
                <p className={css.message}>SCHEDULE AGAIN</p>
                </div>
                <DatePicker
                    style={{display:'none'}}
                    value={date}
                    onChange={(datetime) => updateDateTimeForCampaign(id, moment(datetime).format('X'))}
                    autoOk
                    minDate={moment()}
                    id={id}
                />
            </TD>
            }
        </TR>
    )
};

const CampaignsList = ({data = [], showActions = false, updateDateTimeForCampaign}) => {
    return (
        <div style={{marginTop: 24}}>
            <Table>
                <TableHeaders showActions={showActions}/>
                <TBody>
                {data.map((data, index) => <CampaignRow {...data} key={index} showActions={showActions} updateDateTimeForCampaign={updateDateTimeForCampaign}/>)}
                </TBody>
            </Table>
        </div>
    )
};

export default CampaignsList;