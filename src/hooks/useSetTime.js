import { useState } from 'react';
import shortid from 'shortid';
import { format } from 'date-fns';

const TIME_INIT_DATA = {
  year: '',
  month: '',
  date: '',
  hours: '',
  minutes: '',
  seconds: '',
  title: '',
  events: '',
  timeZone: '',
  hour12: true,
  updatedDate: '',
};

const useSetTime = () => {
  const [inputValues, setInputValues] = useState({ ...TIME_INIT_DATA });
  const [toggle, setToggle] = useState(false);
  const [clockLists, setClockLists] = useState([]);
  const [updatedTime, setUpdatedTime] = useState('');
  const [savedData, setSavedData] = useState({ ...TIME_INIT_DATA });

  const defaultTime = format(
    new Date(),
    '(dd-MM-yyyy) - hh : mm : ss aaa  (zzzz)'
  );

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    setSavedData({ ...savedData, [e.target.name]: e.target.value });
    console.log(savedData);
  };

  const {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    timeZone,
    title,
    events,
  } = inputValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    //Time created
    const ownTime = new Date(
      year,
      month,
      date,
      hours,
      minutes,
      seconds
    ).toLocaleString('en-Us', {
      timeZone: timeZone,
      hour12: true,
      timeZoneName: 'short',
    });

    inputValues.updatedDate = ownTime;
    setUpdatedTime((inputValues.updatedDate = ownTime));

    //create lists of clock
    const singleClock = {
      id: shortid.generate(),
      title: title,
      events: events,
      updatedValues: inputValues.updatedDate,
      createdAt: new Date().toLocaleDateString(),
    };
    //Array of Clock Lists
    setClockLists([singleClock, ...clockLists]);

    //Save Data from input

    //CLEAR DATA
    setInputValues({ ...TIME_INIT_DATA });
  };

  //Button toggler
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
    toggle,
    clockLists,
    updatedTime,
    savedData,
    toggleBtn,
    handleChange,
    handleSubmit,
  };
};

export default useSetTime;
