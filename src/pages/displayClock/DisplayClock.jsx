import InputGroup from '../../components/shared/inputGroup/InputGroup';
import Button from '../../components/UI/Button';
import InputField from '../../components/UI/InputField';
import useSetTime from '../../hooks/useSetTime';
const DisplayClock = ({
  title,
  events,
  updatedValues,
  createdAt,
  id,
  getAndRemoveId,
  getAndEdit,
}) => {
  const { handleSubmit, handleChange, savedData } = useSetTime();
  return (
    <div>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1"> {title}</h5>
          <small className="text-muted">Created At: {createdAt}</small>
        </div>
        <p className="mb-1">
          {' '}
          <span className="text-primary fw-bold">Time: </span> {updatedValues}
        </p>
        <strong className="text-muted">
          {' '}
          <span className="text-warning fw-bold">Event: </span> {events}
        </strong>
        <div className="d-flex justify-content-end gap-2">
          <div>
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#edit"
            >
              Edit
            </button>
          </div>

          <Button
            title={'Delete'}
            customStyle={{ background: '#eb4d4b', border: 'none' }}
            onClick={() => {
              getAndRemoveId(id);
            }}
          />
        </div>
      </a>
    </div>
  );
};

export default DisplayClock;
{
  /* <form onSubmit={handleSubmit} className="text-start">
  <InputField
    label={'Title'}
    onChange={handleChange}
    value={title}
    name={'title'}
    placeholder={'clock title'}
    type={'text'}
  />
  <div className="border p-3 ">
    <label htmlFor="event" className="fw-bold">
      Notes about event:
    </label>
    <textarea
      id={'event'}
      className="w-100 form-control"
      placeholder="Important notes"
      name={'events'}
      cols="40"
      rows="4"
      onChange={handleChange}
      value={events}
    ></textarea>
  </div>
  <InputGroup
    year={savedData.year}
    month={savedData.month}
    date={savedData.date}
    hours={savedData.hours}
    minutes={savedData.minutes}
    seconds={savedData.seconds}
    timeZone={savedData.timeZone}
    handleChange={handleChange}
  />
  <Button
    title={'Update Clock'}
    customStyle={{
      background: '#6ab04c',
      color: 'white',
      marginTop: '10px',
      border: 'none',
    }}
    type={'submit'}
  />
</form>; */
}
