const DisplayClock = ({ title, events, updatedValues, defaultTime }) => {
  return (
    <div>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1"> {title}</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          {' '}
          <span className="text-primary fw-bold">Time: </span>{' '}
          {!updatedValues ? defaultTime : updatedValues}
        </p>
        <strong className="text-muted">
          {' '}
          <span className="text-warning fw-bold">Event: </span> {events}
        </strong>
      </a>
    </div>
  );
};

export default DisplayClock;
