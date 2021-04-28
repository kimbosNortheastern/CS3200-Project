const HOTEL_URL = "http://localhost:8080/api/hotels";

const findAllHotels = () => {
  return fetch(HOTEL_URL).then(response => {
    return response.json();
  });
};

const findHotelById = hotelId => {
  return fetch(`${HOTEL_URL}/${hotelId}`).then(response => {
    return response.json();
  });
};

const deleteHotel = hotelId =>
  fetch(`${HOTEL_URL}/${hotelId}`, {
    method: "DELETE",
  });

const createHotel = hotel =>
  fetch(HOTEL_URL, {
    method: "POST",
    body: JSON.stringify(hotel),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

const updateHotel = (hotelId, hotel) =>
  fetch(`${HOTEL_URL}/${hotelId}`, {
    method: "PUT",
    body: JSON.stringify(hotel),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

export default {
  findAllHotels,
  findHotelById,
  deleteHotel,
  createHotel,
  updateHotel,
};
