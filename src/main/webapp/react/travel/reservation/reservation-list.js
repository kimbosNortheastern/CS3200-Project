import service from "./reservation-service";

const { useEffect, useState } = React;
const { Link } = ReactRouterDOM;

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    service.findAllReservations().then(reservations => {
      setReservations(reservations);
    });
  }, []);
  return (
    <div>
      <h1>Reservations List</h1>
      <ul className="list-group">
        {reservations.map(reservations => {
          return (
            <li class="list-group-item">
              <Link to={`/reservations/${reservations.reservationId}`}>
                {reservations.reservationId}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReservationList;
