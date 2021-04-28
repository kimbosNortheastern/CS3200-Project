const ROOM_URL = "http://localhost:8080/api/rooms";

const findAllRooms = () => {
  return fetch(ROOM_URL).then(response => {
    return response.json();
  });
};

const findRoomById = roomId => {
  return fetch(`${ROOM_URL}/${roomId}`).then(response => {
    return response.json();
  });
};

const deleteRoom = roomId =>
  fetch(`${ROOM_URL}/${roomId}`, {
    method: "DELETE",
  });

const createRoom = room =>
  fetch(ROOM_URL, {
    method: "POST",
    body: JSON.stringify(room),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

const updateReview = (roomId, room) =>
  fetch(`${ROOM_URL}/${roomId}`, {
    method: "PUT",
    body: JSON.stringify(room),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

export default {
  findAllRooms,
  findRoomById,
  deleteRoom,
  createRoom,
  updateReview,
};
