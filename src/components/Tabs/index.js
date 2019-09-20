import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const CampaignTabs = ({tabs, selectedTab, changeTab}) => {

    return (
        <Tabs
            value={selectedTab}
            onChange={changeTab}
            indicatorColor='primary'
            textColor='primary'
            centered>
            {tabs.map(tab => <Tab label={`${tab} CAMPAIGNS`} key={tab}/>)}
        </Tabs>
    )
};

export default CampaignTabs;