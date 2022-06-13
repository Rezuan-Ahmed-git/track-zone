import InputField from '../components/UI/InputField';
import Button from '../components/UI/Button';
import CreateClock from '../pages/createClock/CreateClock';
import useSetTime from '../hooks/useSetTime';

const App = () => {
  const {
    toggle,
    toggleBtn,
    handleChange,
    inputValues,
    defaultTime,
    handleSubmit,
    updatedValues,
  } = useSetTime();
  const { hours, minutes, timeZone } = inputValues;

  return (
    <div className=" text-center">
      <h1>Track Zone</h1>
      <div>
        <h3>
          LOCALE TIME: {!updatedValues ? defaultTime : updatedValues}{' '}
          <Button
            title={'Set'}
            customStyle={{ padding: '.1rem 1rem' }}
            onClick={toggleBtn}
          />
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
