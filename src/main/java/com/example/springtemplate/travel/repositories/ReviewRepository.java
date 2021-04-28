package com.example.springtemplate.travel.repositories;

import com.example.springtemplate.travel.models.Review;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository
        extends CrudRepository<Review, Integer> {
  @Query(value = "SELECT * FROM reviews",
          nativeQuery = true)
  public List<Review> findAllReviews();
  @Query(value = "SELECT * FROM reviews WHERE review_id=:reviewId",
          nativeQuery = true)
  public Review findReviewById(@Param("reviewId") Integer id);
}
