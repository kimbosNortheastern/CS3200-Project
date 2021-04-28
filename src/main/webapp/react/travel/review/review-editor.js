import service from "./review-service";

const { useEffect, useState } = React;
const { useParams, useHistory, Link } = ReactRouterDOM;

const ReviewEditor = () => {
  const [review, setReview] = useState([]);
  const { reviewId } = useParams();
  const history = useHistory();

  useEffect(() => {
    service.findReviewById(reviewId).then(review => {
      setReview(review);
    });
  }, []);

  const deleteReview = reviewId =>
    service.deleteReview(reviewId).then(() => history.goBack());

  const createReview = review =>
    service.createReview(review).then(() => history.goBack());

  const updateReview = (reviewId, newReview) =>
    service.updateReview(reviewId, newReview).then(() => history.goBack());

  return (
    <div>
      <h1>Review Editor {reviewId} </h1>
      <label>Review ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReview({ ...review, reviewId: newValue });
        }}
        value={review.reviewId}
        className="form-control"
      />
      <Link to={`/customers/${review.customerId}`}>
        <label>Customer ID</label>
      </Link>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReview({ ...review, customerId: newValue });
        }}
        value={review.customerId}
        className="form-control"
      />
      <Link to={`/hotels/${review.hotelId}`}>
        <label>Hotel ID</label>
      </Link>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReview({ ...review, hotelId: newValue });
        }}
        value={review.hotelId}
        className="form-control"
      />
      <label>Review</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReview({ ...review, review: newValue });
        }}
        value={review.review}
        className="form-control"
      />
      <label>Review Grade</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setReview({ ...review, reviewGrade: newValue });
        }}
        value={review.reviewGrade}
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
        onClick={() => deleteReview(review.reviewId)}
      >
        Delete
      </button>
      <button
        onClick={() => updateReview(review.reviewId, review)}
        className="btn btn-primary"
      >
        Save
      </button>
      <button onClick={() => createReview(review)} className="btn btn-success">
        Create
      </button>
    </div>
  );
};

export default ReviewEditor;
