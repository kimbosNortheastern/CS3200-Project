package com.example.springtemplate.travel.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="customers")
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer customerId;
  private String firstName;
  private String lastName;
  private String userName;
  private String password;
  private String email;
  private Date dateOfBirth;
  private Integer mileage;
  private Integer customerGrade;

  @OneToMany(mappedBy = "reservationId")
  @JsonIgnore
  private List<Reservation> reservations;

  @OneToMany(mappedBy = "reviewId")
  @JsonIgnore
  private List<Review> reviews;

  @ManyToOne
  @JsonIgnore
  private CustomerGrade customerGrades;

  public Integer getCustomerId() {
    return customerId;
  }

  public void setCustomerId(Integer customerId) {
    this.customerId = customerId;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Date getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public Integer getMileage() {
    return mileage;
  }

  public void setMileage(Integer mileage) {
    this.mileage = mileage;
  }

  public Integer getCustomerGrade() {
    return customerGrade;
  }

  public void setCustomerGrade(Integer customerGrade) {
    this.customerGrade = customerGrade;
  }

  public List<Reservation> getReservations() {
    return reservations;
  }

  public void setReservations(List<Reservation> reservations) {
    this.reservations = reservations;
  }

  public List<Review> getReviews() {
    return reviews;
  }

  public void setReviews(List<Review> reviews) {
    this.reviews = reviews;
  }

  public CustomerGrade getCustomerGrades() {
    return customerGrades;
  }

  public void setCustomerGrades(CustomerGrade customerGrades) {
    this.customerGrades = customerGrades;
  }
}
