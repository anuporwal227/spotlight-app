import React, { useState } from 'react';
import { CAMPAIGN_TABS } from '../../globals/constants.js';
import { campaignDataTotal } from '../../data/data';
import CampaignTabs from '../../components/Tabs';
import CampaignsList from '../../components/CampaignsList';
import Header from '../../components/Header';
import { diff } from '../../utils/date-utils';
import css from './styles.module.scss';

const CampaignManager = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [data, setData] = useState(campaignDataTotal);

    const updateDateTimeForCampaign = (id, updatedDateTime) => {
        const updatedCampaignData = data.map(campaign => {
            if(id === campaign.id){
                return {
                    ...campaign,
                    date: updatedDateTime
                }
            }
            return campaign;
        });
        setData(updatedCampaignData);
    };

    const getDataForCurrentTab = () => {
      const updatedData = [];
      data.forEach(data => {
          const difference = diff(data.date);
          if(selectedTab === 0 && difference > 0){
              updatedData.push(data);
          }
          if(selectedTab === 1 && difference === 0){
              updatedData.push(data);
          }
          if(selectedTab === 2 && difference < 0){
              updatedData.push(data);
          }
      });
      return updatedData;
    };

    return (
        <div>
            <Header/>
            <div className={css.container}>
                <h1>Manage <span>Campaigns</span></h1>
                <CampaignTabs tabs={CAMPAIGN_TABS} selectedTab={selectedTab} changeTab={(e, newValue) => setSelectedTab(newValue)}/>
                <CampaignsList data={getDataForCurrentTab()} showActions={selectedTab === 2} updateDateTimeForCampaign={updateDateTimeForCampaign}/>
            </div>
        </div>
    )
};

export default CampaignManager;
