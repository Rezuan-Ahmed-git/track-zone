import { useState } from 'react';
import shortid from 'shortid';
import {
  getMinutes,
  getHours,
  getDate,
  getMonth,
  getYear,
  getSeconds,
} from 'date-fns';

const date = new Date();

const ownTimeInit = {
  year: getYear(date),
  month: getMonth(date),
  date: getDate(date),
  hours: getHours(date),
  minutes: getMinutes(date),
  seconds: getSeconds(date),
  title: '',
  events: '',
  timeZone: 'Asia/Dhaka',
  hour12: true,
  timeZoneName: 'short',
  updatedDate: '',
};

const useSetTime = () => {
  const [inputValues, setInputValues] = useState({ ...ownTimeInit });
  const [toggle, setToggle] = useState(false);
  const [updatedValues, setUpdatedValues] = useState('');
  const [clockLists, setClockLists] = useState([]);

  const defaultTime = new Date().toLocaleTimeString('en-US', {
    timeZoneName: 'short',
  });

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const {
    year,
    month,
    date,
    hours,
    minutes,
    timeZone,
    timeZoneName,
    hour12,
    title,
    events,
  } = inputValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    const ownTime = new Date(year, month, date, hours, minutes).toLocaleString(
      'en-Us',
      {
        timeZone: timeZone,
        hour12,
        timeZoneName,
      }
    );
    console.log('ownTime', ownTime);
    inputValues.updatedDate = ownTime;
    setUpdatedValues(inputValues.updatedDate);

    //create lists of clock
    const singleClock = {
      id: shortid.generate(),
      title: title,
      events: events,
      updatedValues: inputValues.updatedDate,
      createdAt: new Date().toLocaleDateString(),
      defaultTime: defaultTime,
    };

    setClockLists([singleClock, ...clockLists]);
    console.log(clockLists);
  };

  const toggleBtn = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    return toggle;
  };

  return {
    inputValues,
    defaultTime,
    updatedValues,
    toggle,
    clockLists,
    toggleBtn,
    handleChange,
    handleSubmit,
  };
};

export default useSetTime;
