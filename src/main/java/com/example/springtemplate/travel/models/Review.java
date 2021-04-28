package com.example.springtemplate.travel.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer reviewId;
  private String review;
  private Integer reviewGrade;
  private Integer customerId;
  private Integer hotelId;

  @ManyToOne
  @JsonIgnore
  private Customer customer;

  @ManyToOne
  @JsonIgnore
  private Hotel hotel;

  public Integer getReviewId() {
    return reviewId;
  }

  public void setReviewId(Integer reviewId) {
    this.reviewId = reviewId;
  }

  public String getReview() {
    return review;
  }

  public void setReview(String review) {
    this.review = review;
  }

  public Integer getReviewGrade() {
    return reviewGrade;
  }

  public void setReviewGrade(Integer reviewGrade) {
    this.reviewGrade = reviewGrade;
  }

  public Integer getCustomerId() {
    return customerId;
  }

  public void setCustomerId(Integer customerId) {
    this.customerId = customerId;
  }

  public Integer getHotelId() {
    return hotelId;
  }

  public void setHotelId(Integer hotelId) {
    this.hotelId = hotelId;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }

  public Hotel getHotel() {
    return hotel;
  }

  public void setHotel(Hotel hotel) {
    this.hotel = hotel;
  }
}
