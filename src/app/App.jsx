import Button from '../components/UI/Button';
import CreateClock from '../pages/createClock/CreateClock';
import useSetTime from '../hooks/useSetTime';
import InputGroup from '../components/shared/inputGroup/InputGroup';

const App = () => {
  const {
    toggle,
    inputValues,
    defaultTime,
    updatedTime,
    toggleBtn,
    handleChange,
    handleSubmit,
  } = useSetTime();
  const { year, month, date, hours, minutes, seconds, timeZone } = inputValues;

  return (
    <div className="text-center mt-4">
      <h1>TRACK ZONE</h1>
      <div>
        <h3>
          LOCALE TIME:
          <span> {updatedTime ? updatedTime : defaultTime} </span>
          <Button
            title={'Set'}
            customStyle={{ padding: '.1rem 1rem' }}
            onClick={toggleBtn}
          />
        </h3>
        {toggle ? (
          <form onSubmit={handleSubmit} className="w-50 mx-auto">
            <InputGroup
              year={year}
              month={month}
              date={date}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              timeZone={timeZone}
              handleChange={handleChange}
            />
            <Button
              title={'Update'}
              customStyle={{
                background: '#198754',
                color: 'white',
                border: 'none',
              }}
              type={'submit'}
            />
          </form>
        ) : (
          ''
        )}
      </div>
      <hr />
      <div>
        <CreateClock />
      </div>
    </div>
  );
};

export default App;
