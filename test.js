// import { format } from 'date-fns';

// const indianDate = new Date().toLocaleTimeString('en-US', {
//   timeZone: 'Indian/Christmas',
// });
// const bdDate = new Date().toLocaleTimeString('en-US', {
//   timeZone: 'Indian/Christmas',
//   hour12: false,
//   timeZoneName: 'short',
// });
// console.log(bdDate);

// const d = new Date();
// const formatted = format(d, 'MM/dd/yyyy');

// console.log(formatted);

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

const arrOfObj = [
  {
    id: 1,
    title: 'Ridwan',
  },
  {
    id: 2,
    title: 'Ahmed',
  },
  {
    id: 3,
    title: 'Shourav',
  },
];
const id = 3;
const search = arrOfObj.find((item) => item.id === id);
// const r = arrOfObj.filter((item) => item.id !== id);
console.log(search.id);

if (id === search.id) {
  (search.title = 'Akib'), (search.id = id + 1);
}

console.log(arrOfObj);

// console.log(r);

// const deleteList = (id, arrOfObj) => {
//   arrOfObj.splice(
//     arrOfObj.findIndex((item) => item.id === id),
//     1
//   );
//   console.log(arrOfObj);
// };

// deleteList(id, arrOfObj);
