import service from "./review-service";

const { useEffect, useState } = React;
const { Link } = ReactRouterDOM;

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    service.findAllReviews().then(reviews => {
      setReviews(reviews);
    });
  }, []);
  return (
    <div>
      <h1>Reviews List</h1>
      <ul className="list-group">
        {reviews.map(reviews => {
          return (
            <li class="list-group-item">
              <Link to={`/reviews/${reviews.reviewId}`}>{reviews.review}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewList;
