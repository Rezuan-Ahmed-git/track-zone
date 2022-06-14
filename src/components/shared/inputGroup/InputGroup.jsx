import InputField from '../../UI/InputField';

const InputGroup = ({
  handleChange,
  date,
  month,
  year,
  hours,
  minutes,
  timeZone,
  seconds,
}) => {
  return (
    <>
      <div className="d-flex">
        <InputField
          label={'Date'}
          name={'date'}
          type={'text'}
          placeholder={'0 - 31'}
          onChange={handleChange}
          value={date}
        />
        <InputField
          label={'Month'}
          name={'month'}
          type={'number'}
          placeholder={'0 - 11'}
          onChange={handleChange}
          value={month}
        />
        <InputField
          label={'Year'}
          onChange={handleChange}
          value={year}
          name={'year'}
          placeholder={'YYYY'}
          type={'number'}
        />
      </div>
      <div className="d-flex">
        <InputField
          label={'Hours'}
          onChange={handleChange}
          value={hours}
          name={'hours'}
          placeholder={'0-23'}
          type={'number'}
        />
        <InputField
          label={'Minutes'}
          name={'minutes'}
          type={'number'}
          placeholder={'0 - 59'}
          onChange={handleChange}
          value={minutes}
        />
        <InputField
          label={'Seconds'}
          name={'seconds'}
          type={'number'}
          placeholder={'0 - 59'}
          onChange={handleChange}
          value={seconds}
        />
      </div>
      <InputField
        label={'Time Zone'}
        name={'timeZone'}
        type={'text'}
        placeholder={'Sample: Asia/Dhaka'}
        onChange={handleChange}
        value={timeZone}
      />

      <br />
    </>
  );
};

export default InputGroup;
