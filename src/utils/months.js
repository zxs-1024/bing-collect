import dayjs from 'dayjs';

const monthArray = new Array(12).fill('bing');
const startYear = 2009;
const startMonth = 7;
const endYear = new Date().getFullYear();
const endMonth = new Date().getMonth() + 1;
const times = [];
let year = endYear;

const fillZero = number => {
  return number < 10 ? `0${number}` : number;
};

const collect = arr => {
  arr.forEach((item, i) => {
    const month = 12 - i;
    const date = `${year}-${fillZero(month)}`;
    if (
      !(year === startYear && month < startMonth) &&
      !(year === endYear && month > endMonth)
    ) {
      times.push(dayjs(date).format('MMM YYYY'));
    }
  });
};

do {
  collect(monthArray);
  year--;
} while (year >= startYear);

export default times;
