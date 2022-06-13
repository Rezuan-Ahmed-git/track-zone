const indianDate = new Date().toLocaleTimeString('en-US', {
  timeZone: 'Indian/Christmas',
});
const bdDate = new Date().toLocaleTimeString('en-US', {
  timeZone: 'Indian/Christmas',
  hour12: false,
  timeZoneName: 'short',
});
// console.log(bdDate);

const d = new Date(0, 0, 0, 12, 30, 40);
// console.log(d);

//Compare
// let text;
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2023, 0, 14);

// if (someday > today) {
//   text = 'Today is before January 14, 2023.';
//   console.log(text);
// } else {
//   text = 'Today is after January 14, 2100.';
//   console.log(text);
// }
const inputValues = {
  year: 2022,
  month: 6,
  date: 13,
  hours: 12,
  minutes: 5,
  seconds: 59,
  title: 'zeroTitle',
  events: 'no events',
  timeZone: 'Asia/Dhaka',
  hour12: true,
  timeZoneName: 'short',
  updatedDate: 'emty',
};

const mapToArray = () => {
  return Object.keys(inputValues).reduce((acc, cur) => {
    // console.log('current key: ', cur);
    acc[cur] = inputValues[cur];
    console.log(acc);

    return acc;
  }, []);
};
mapToArray();
