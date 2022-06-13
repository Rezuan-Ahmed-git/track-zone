import useSetTime from '../../hooks/useSetTime';
import DisplayClock from '../displayClock/DisplayClock';
import Button from '../UI/Button';
import InputField from '../UI/InputField';

const CreateClock = () => {
  const {
    inputValues,
    defaultTime,
    updatedValues,
    toggle,
    toggleBtn,
    handleChange,
    handleSubmit,
  } = useSetTime();

  const { hours, minutes, timeZone, seconds, title, events } = inputValues;
  return (
    <div className="w-50 mx-auto">
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Create a Clock </h5>
          <p className="card-text">
            You can create event lists using this button.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Click to Create
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Your Clock
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit} className="text-start">
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
                    label={'Seconds'}
                    name={'seconds'}
                    type={'number'}
                    placeholder={'seconds'}
                    onChange={handleChange}
                    value={seconds}
                  />
                  <InputField
                    label={'Time Zone'}
                    name={'timeZone'}
                    type={'text'}
                    placeholder={'Sample: Asia/Dhaka'}
                    onChange={handleChange}
                    value={timeZone}
                  />
                  <Button
                    title={'Create Clock'}
                    customStyle={{
                      background: '#0B5ED7',
                      color: 'white',
                      marginTop: '10px',
                      border: 'none',
                    }}
                    type={'submit'}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <h3 className="mt-5">My List</h3>
      <DisplayClock
        title={title}
        events={events}
        timeZone={timeZone}
        updatedValues={updatedValues}
        defaultTime={defaultTime}
      />
    </div>
  );
};

export default CreateClock;
