const RESERVATION_URL = "http://localhost:8080/api/reservations";

const findAllReservations = () => {
  return fetch(RESERVATION_URL).then(response => {
    return response.json();
  });
};

const findReservationById = reservationId => {
  return fetch(`${RESERVATION_URL}/${reservationId}`).then(response => {
    return response.json();
  });
};

const deleteReservation = reservationId =>
  fetch(`${RESERVATION_URL}/${reservationId}`, {
    method: "DELETE",
  });

const createReservation = reservation =>
  fetch(RESERVATION_URL, {
    method: "POST",
    body: JSON.stringify(reservation),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

const updateReservation = (reservationId, reservation) =>
  fetch(`${RESERVATION_URL}/${reservationId}`, {
    method: "PUT",
    body: JSON.stringify(reservation),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

export default {
  findAllReservations,
  findReservationById,
  deleteReservation,
  createReservation,
  updateReservation,
};
