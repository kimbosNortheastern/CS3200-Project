const REVIEW_URL = "http://localhost:8080/api/reviews";

const findAllReviews = () => {
  return fetch(REVIEW_URL).then(response => {
    return response.json();
  });
};

const findReviewById = reviewId => {
  return fetch(`${REVIEW_URL}/${reviewId}`).then(response => {
    return response.json();
  });
};

const deleteReview = reviewId =>
  fetch(`${REVIEW_URL}/${reviewId}`, {
    method: "DELETE",
  });

const createReview = review =>
  fetch(REVIEW_URL, {
    method: "POST",
    body: JSON.stringify(review),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

const updateReview = (reviewId, review) =>
  fetch(`${REVIEW_URL}/${reviewId}`, {
    method: "PUT",
    body: JSON.stringify(review),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

export default {
  findAllReviews,
  findReviewById,
  deleteReview,
  createReview,
  updateReview,
};
