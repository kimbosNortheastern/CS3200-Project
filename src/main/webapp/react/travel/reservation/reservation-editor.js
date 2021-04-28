import service from "./reservation-service";

const { useEffect, useState } = React;
const { useParams, useHistory } = ReactRouterDOM;

const ReservationEditor = () => {
  const [reservation, setReservation] = useState([]);
  const { reservationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    service.findReservationById(reservationId).then(reservation => {
      setReservation(reservation);
    });
  }, []);

  const deleteReservation = reservationId =>
    service.deleteReservation(reservationId).then(() => history.goBack());

  const createReservation = reservation =>
    service.createReservation(reservation).then(() => history.goBack());

  const updateReservation = (reservationId, newReservation) =>
    service
      .updateReservation(reservationId, newReservation)
      .then(() => history.goBack());

  return (
    <div>
      <h1>Reservation Editor {reservationId} </h1>
      <label>Reservation ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReservation({ ...reservation, reservationId: newValue });
        }}
        value={reservation.reservationId}
        className="form-control"
      />
      <label>Customer ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReservation({ ...reservation, customerId: newValue });
        }}
        value={reservation.customerId}
        className="form-control"
      />
      <label>Room ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReservation({ ...reservation, roomId: newValue });
        }}
        value={reservation.roomId}
        className="form-control"
      />
      <label>Reservation Date</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReservation({ ...reservation, reservationDate: newValue });
        }}
        value={reservation.reservationDate}
        className="form-control"
      />

      <button
        className="btn btn-warning"
        onClick={() => {
          history.goBack();
        }}
      >
        Cancel
      </button>
      <button
        className="btn btn-danger"
        onClick={() => deleteReservation(reservation.reservationId)}
      >
        Delete
      </button>
      <button
        onClick={() =>
          updateReservation(reservation.reservationId, reservation)
        }
        className="btn btn-primary"
      >
        Save
      </button>
      <button
        onClick={() => createReservation(reservation)}
        className="btn btn-success"
      >
        Create
      </button>
    </div>
  );
};

export default ReservationEditor;
