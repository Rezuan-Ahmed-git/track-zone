import { useState } from 'react';
import { getMinutes, getHours, getDate, getMonth, getYear } from 'date-fns';

const date = new Date();

const ownTimeInit = {
  year: getYear(date),
  month: getMonth(date),
  date: getDate(date),
  hours: getHours(date),
  minutes: getMinutes(date),
  timeZone: 'Asia/Dhaka',
  hour12: true,
  timeZoneName: 'short',
  updatedDate: '',
};

const useSetTime = () => {
  const [inputValues, setInputValues] = useState({ ...ownTimeInit });
  const [toggle, setToggle] = useState(false);
  const [updatedTime, setUpdatedTime] = useState('');

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
    updatedDate,
  } = inputValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    const ownDate = new Date(
      year,
      month,
      date,
      hours,
      minutes
    ).toLocaleTimeString('en-Us', {
      timeZone: timeZone,
      hour12,
      timeZoneName,
    });
    inputValues.updatedDate = ownDate;
    setUpdatedTime((inputValues.updatedDate = ownDate));
    // console.log(updatedTime);
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
    defaultTime,
    updatedTime,
    toggleBtn,
    handleChange,
    handleSubmit,
  };
};

export default useSetTime;
