import { useState } from 'react';
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

  const defaultTime = new Date().toLocaleTimeString('en-US', {
    timeZoneName: 'short',
  });

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const { year, month, date, hours, minutes, timeZone, timeZoneName, hour12 } =
    inputValues;

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

    setUpdatedValues((inputValues.updatedDate = ownDate));
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
    toggleBtn,
    handleChange,
    handleSubmit,
  };
};

export default useSetTime;
