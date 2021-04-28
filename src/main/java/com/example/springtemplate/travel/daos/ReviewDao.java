package com.example.springtemplate.travel.daos;
import com.example.springtemplate.travel.models.Customer;
import com.example.springtemplate.travel.models.Review;
import com.example.springtemplate.travel.repositories.ReviewRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReviewDao {
  @Autowired
  ReviewRepository repository;

  @PostMapping("/api/reviews")
  public Review createReview(@RequestBody Review review) {
    return repository.save(review);
  }

  @GetMapping("/api/reviews")
  public List<Review> findAllReviews() {
    return (List<Review>) repository.findAll();
  }

  @GetMapping("/api/reviews/{reviewId}")
  public Review findReviewById(
          @PathVariable("reviewId") Integer Id) {
    return repository.findReviewById(Id);
  }

  @PutMapping("/api/reviews/{reviewId}")
  public Review updateReview(
          @PathVariable("reviewId") Integer id,
          @RequestBody Review newReview) {
    Review review = repository.findReviewById(id);
    review.setReview(newReview.getReview());
    review.setReviewGrade(newReview.getReviewGrade());
    review.setCustomerId(newReview.getCustomerId());
    review.setHotelId(newReview.getHotelId());
    return repository.save(review);
  }

  @DeleteMapping("/api/reviews/{reviewId}")
  public void deleteReview(
          @PathVariable("reviewId") Integer id) {
    repository.deleteById(id);
  }
}
