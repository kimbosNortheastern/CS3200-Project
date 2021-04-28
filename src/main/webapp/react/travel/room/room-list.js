import service from "./room-service";

const { useEffect, useState } = React;
const { Link } = ReactRouterDOM;

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    service.findAllRooms().then(rooms => {
      setRooms(rooms);
    });
  }, []);
  return (
    <div>
      <h1>Rooms List</h1>
      <ul className="list-group">
        {rooms.map(rooms => {
          return (
            <li class="list-group-item">
              <Link to={`/rooms/${rooms.roomId}`}>{rooms.roomId}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoomList;
