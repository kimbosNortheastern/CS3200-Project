package com.example.springtemplate.travel.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "hotels")
public class Hotel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer hotelId;
  private String name;
  private String address;
  private String phone;

  @OneToMany(mappedBy = "reviewId")
  @JsonIgnore
  private List<Review> reviews;

  @OneToMany(mappedBy = "hotelId")
  @JsonIgnore
  private List<Room> rooms;

  public Integer getHotelId() {
    return hotelId;
  }

  public void setHotelId(Integer hotelId) {
    this.hotelId = hotelId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public List<Review> getReviews() {
    return reviews;
  }

  public void setReviews(List<Review> reviews) {
    this.reviews = reviews;
  }

  public List<Room> getRooms() {
    return rooms;
  }

  public void setRooms(List<Room> rooms) {
    this.rooms = rooms;
  }
}
