import CustomerList from "./customers/customer-list";
import CustomerEditor from "./customers/customer-editor";
import CustomerGradeList from "./customergrade/customerGrade-list";
import CustomerGradeEditor from "./customergrade/customerGrade-editor";
import HotelList from "./hotel/hotel-list";
import HotelEditor from "./hotel/hotel-editor";
import ReservationList from "./reservation/reservation-list";
import ReservationEditor from "./reservation/reservation-editor";
import ReviewList from "./review/review-list";
import ReviewEditor from "./review/review-editor";
import RoomList from "./room/room-list";
import RoomEditor from "./room/room-editor";

const { HashRouter, Route } = window.ReactRouterDOM;
const App = () => {
  return (
    <div className="container-fluid">
      <h1>Travel</h1>
      <HashRouter>
        <Route path={["/customers", "/"]} exact={true}>
          <CustomerList />
        </Route>
        <Route path="/customers/:customerId" exact={true}>
          <CustomerEditor />
        </Route>
        <Route path={["/customerGrades", "/"]} exact={true}>
          <CustomerGradeList />
        </Route>
        <Route path="/customerGrades/:customerGradeId" exact={true}>
          <CustomerGradeEditor />
        </Route>
        <Route path={["/hotels", "/"]} exact={true}>
          <HotelList />
        </Route>
        <Route path="/hotels/:hotelId" exact={true}>
          <HotelEditor />
        </Route>
        <Route path={["/reservations", "/"]} exact={true}>
          <ReservationList />
        </Route>
        <Route path="/reservations/:reservationId" exact={true}>
          <ReservationEditor />
        </Route>
        <Route path={["/reviews", "/"]} exact={true}>
          <ReviewList />
        </Route>
        <Route path="/reviews/:reviewId" exact={true}>
          <ReviewEditor />
        </Route>
        <Route path={["/rooms", "/"]} exact={true}>
          <RoomList />
        </Route>
        <Route path="/rooms/:roomId" exact={true}>
          <RoomEditor />
        </Route>
      </HashRouter>
    </div>
  );
};

export default App;
