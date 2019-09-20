import moment from 'moment';

export const DATE_FORMAT_STANDARD = 'YYYY-MM-DD';

export const diff = (date) => {
    return moment.unix(date).startOf('day').diff(moment(Date.now()).startOf('day'), 'days');
};

export const convertDateFormat = (date) => {
    return moment.unix(date).format(DATE_FORMAT_STANDARD);
};