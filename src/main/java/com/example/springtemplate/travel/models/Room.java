package com.example.springtemplate.travel.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "rooms")
public class Room {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer roomId;
  private Integer roomNumber;
  private Integer price;
  @Enumerated(EnumType.STRING)
  private RoomGrade roomGrade;
  private Integer hotelId;

  @ManyToOne
  @JsonIgnore
  private Hotel hotel;

  @OneToMany(mappedBy = "reservationId")
  @JsonIgnore
  private List<Reservation> reservations;

  public Integer getRoomId() {
    return roomId;
  }

  public void setRoomId(Integer roomId) {
    this.roomId = roomId;
  }

  public Integer getRoomNumber() {
    return roomNumber;
  }

  public void setRoomNumber(Integer roomNumber) {
    this.roomNumber = roomNumber;
  }

  public Integer getPrice() {
    return price;
  }

  public void setPrice(Integer price) {
    this.price = price;
  }

  public RoomGrade getRoomGrade() {
    return roomGrade;
  }

  public void setRoomGrade(RoomGrade roomGrade) {
    this.roomGrade = roomGrade;
  }

  public Integer getHotelId() {
    return hotelId;
  }

  public void setHotelId(Integer hotelId) {
    this.hotelId = hotelId;
  }

  public Hotel getHotel() {
    return hotel;
  }

  public void setHotel(Hotel hotel) {
    this.hotel = hotel;
  }

  public List<Reservation> getReservations() {
    return reservations;
  }

  public void setReservations(List<Reservation> reservations) {
    this.reservations = reservations;
  }
}
