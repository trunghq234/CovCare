import moment from 'moment';

const timeConverter = UNIX_timestamp => {
  let tmp = new Date(UNIX_timestamp * 1000);
  const result = moment(tmp).format('MMMM DD, YYYY');
  return `Published on ${result}`;
};

export { timeConverter };
