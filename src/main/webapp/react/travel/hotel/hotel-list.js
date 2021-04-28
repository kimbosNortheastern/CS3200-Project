import service from "./hotel-service";

const { useEffect, useState } = React;
const { Link } = ReactRouterDOM;

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    service.findAllHotels().then(hotels => {
      setHotels(hotels);
    });
  }, []);
  return (
    <div>
      <h1>Hotels List</h1>
      <ul className="list-group">
        {hotels.map(hotels => {
          return (
            <li class="list-group-item">
              <Link to={`/hotels/${hotels.hotelId}`}>{hotels.name}</Link>
            </li>
          );
        })}
        <Link to={`/rooms`}>Room List</Link>
        <Link to={`/reviews`}>Review List</Link>
      </ul>
    </div>
  );
};

export default HotelList;
