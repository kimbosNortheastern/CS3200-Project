import service from "./room-service";

const { useEffect, useState } = React;
const { useParams, useHistory, Link } = ReactRouterDOM;

const RoomEditor = () => {
  const [room, setRoom] = useState([]);
  const { roomId } = useParams();
  const history = useHistory();

  useEffect(() => {
    service.findRoomById(roomId).then(room => {
      setRoom(room);
    });
  }, []);

  const deleteRoom = roomId =>
    service.deleteRoom(roomId).then(() => history.goBack());

  const createRoom = room =>
    service.createRoom(room).then(() => history.goBack());

  const updateRoom = (roomId, newRoom) =>
    service.updateRoom(roomId, newRoom).then(() => history.goBack());

  return (
    <div>
      <h1>Room Editor {roomId} </h1>
      <label>Room ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setRoom({ ...room, roomId: newValue });
        }}
        value={room.roomId}
        className="form-control"
      />
      <label>Room Number</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setRoom({ ...room, roomNumber: newValue });
        }}
        value={room.roomNumber}
        className="form-control"
      />
      <label>Price</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setRoom({ ...room, price: newValue });
        }}
        value={room.price}
        className="form-control"
      />
      <label>Room Grade</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setRoom({ ...room, roomGrade: newValue });
        }}
        value={room.roomGrade}
        className="form-control"
      />
      <Link to={`/hotels/${room.hotelId}`}>
        <label>Hotel ID</label>
      </Link>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setRoom({ ...room, hotelId: newValue });
        }}
        value={room.hotelId}
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
        onClick={() => deleteRoom(room.roomId)}
      >
        Delete
      </button>
      <button
        onClick={() => updateRoom(room.roomId, room)}
        className="btn btn-primary"
      >
        Save
      </button>
      <button onClick={() => createRoom(room)} className="btn btn-success">
        Create
      </button>
    </div>
  );
};

export default RoomEditor;
