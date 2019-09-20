import React from 'react';
import { Trans } from 'react-i18next';
import css from './styles.css';

const UserInfo = ({name, designation}) => {
    return (
        <div className={'user-details'}>
            <Trans i18nKey="welcome">trans</Trans>
            <h2>{name}</h2>
            <p>{designation}</p>
        </div>
    );
};

export default UserInfo;