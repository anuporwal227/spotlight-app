import React, {useState}  from 'react';
import { Table, TBody, TD, TH, THead, TR } from '../Table';
import CalendarIcon from '@material-ui/icons/DateRange';
import ViewIcon from '@material-ui/icons/OfflineBolt';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { diff, convertDateFormat } from '../../utils/date-utils.js';
import { DatePicker } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import CampaignInfoDialog from '../CampaignInfoDialog';

import css from './styles.module.scss';

const TableHeaders = ({showActions}) => (
    <THead>
    <TH><div>Date</div></TH>
    <TH><div>Campaign</div></TH>
    <TH><div>View</div></TH>
    {showActions && <TH><div>Actions</div></TH>}
    </THead>
);

const CampaignRow = ({date, name, countries, id, showActions, updateDateTimeForCampaign, onItemClick}) => {
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
            <TD className={css.actions}>
                <div className={css.action}>
                    <IconButton onClick={onItemClick}>
                        <ViewIcon/>
                    </IconButton>
                    <p className={css.message}>View pricing</p>
                </div>
            </TD>
            {showActions &&
            <TD className={css.actions}>
                <div className={css.action}>
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
    const [showDialog, setshowDialog] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const onModalClose = () => {
        setshowDialog(false);
        setSelectedIndex(null);
    };

    const onItemClick = (index) => {
        setshowDialog(true);
        setSelectedIndex(index);
    };


    return (
        <div style={{marginTop: 24}}>
            <Table>
                <TableHeaders showActions={showActions}/>
                <TBody>
                {data.map((data, index) => <CampaignRow {...data} key={index} showActions={showActions} updateDateTimeForCampaign={updateDateTimeForCampaign} onItemClick={() => onItemClick(index)}/>)}
                </TBody>
            </Table>
            <CampaignInfoDialog data={data[selectedIndex]} open={showDialog} onClose={onModalClose}/>
        </div>
    )
};

export default CampaignsList;