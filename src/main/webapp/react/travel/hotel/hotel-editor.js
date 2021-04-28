import service from "./hotel-service";

const { useEffect, useState } = React;
const { useParams, useHistory, Link } = ReactRouterDOM;

const CustomerEditor = () => {
  const [hotel, setHotel] = useState([]);
  const { hotelId } = useParams();
  const history = useHistory();

  useEffect(() => {
    service.findHotelById(hotelId).then(hotel => {
      setHotel(hotel);
    });
  }, []);

  const deleteHotel = hotelId =>
    service.deleteHotel(hotelId).then(() => history.goBack());

  const createHotel = hotel =>
    service.createHotel(hotel).then(() => history.goBack());

  const updateHotel = (hotelId, newHotel) =>
    service.updateHotel(hotelId, newHotel).then(() => history.goBack());

  return (
    <div>
      <h1>Hotel Editor {hotelId} </h1>
      <label>Hotel ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setHotel({ ...hotel, hotelId: newValue });
        }}
        value={hotel.hotelId}
        className="form-control"
      />
      <label>Name</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setHotel({ ...hotel, name: newValue });
        }}
        value={hotel.name}
        className="form-control"
      />
      <label>Address</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setHotel({ ...hotel, address: newValue });
        }}
        value={hotel.address}
        className="form-control"
      />
      <label>Phone</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setHotel({ ...hotel, phone: newValue });
        }}
        value={hotel.phone}
        className="form-control"
      />
      <Link to={`/hotels`}>Hotel List</Link>

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
        onClick={() => deleteHotel(hotel.hotelId)}
      >
        Delete
      </button>
      <button
        onClick={() => updateHotel(hotel.hotelId, hotel)}
        className="btn btn-primary"
      >
        Save
      </button>
      <button onClick={() => createHotel(hotel)} className="btn btn-success">
        Create
      </button>
    </div>
  );
};

export default CustomerEditor;
