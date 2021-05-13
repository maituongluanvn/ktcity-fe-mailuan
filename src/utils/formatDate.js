import dayjs from 'dayjs';

function formatDate(date) {
  const localizedFormat = require('dayjs/plugin/localizedFormat');
  dayjs.extend(localizedFormat);
  return dayjs(date).format('llll');
}

export { formatDate };
