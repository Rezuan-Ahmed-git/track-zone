import { useState } from 'react';
import { getMinutes, getHours, getDate, getMonth, getYear } from 'date-fns';
import '../App.css';
import InputField from '../components/UI/InputField';
import Button from '../components/UI/Button';
// import useSetTime from '../hooks/useSetTime';

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

const App = () => {
  // const setTime = useSetTime();
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

  return (
    <div className="App">
      <h1>Track Zone</h1>
      <div>
        <h3>
          Set Your Clock: {!updatedValues ? defaultTime : updatedValues}{' '}
          <Button title={'Edit'} onClick={toggleBtn} />
        </h3>
        {toggle ? (
          <form onSubmit={handleSubmit} className="w-50 mx-auto">
            <InputField
              label={'Hours'}
              onChange={handleChange}
              value={hours}
              name={'hours'}
              placeholder={'Hours'}
              type={'number'}
            />
            <InputField
              label={'Minutes'}
              name={'minutes'}
              type={'number'}
              placeholder={'minutes'}
              onChange={handleChange}
              value={minutes}
            />
            <InputField
              label={'Time Zone'}
              name={'timeZone'}
              type={'text'}
              placeholder={'Sample: Asia/Dhaka'}
              onChange={handleChange}
              value={timeZone}
            />
            <br />
            <br />
            <Button title={'Update'} type={'submit'} />
          </form>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default App;
