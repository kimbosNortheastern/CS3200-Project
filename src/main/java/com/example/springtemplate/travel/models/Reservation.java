package com.example.springtemplate.travel.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "reservations")
public class Reservation {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer reservationId;
  private Integer customerId;
  private Integer roomId;
  private Date reservationDate;
  @ManyToOne
  @JsonIgnore
  private Customer customer;
  @ManyToOne
  @JsonIgnore
  private Room room;

  public Integer getReservationId() {
    return reservationId;
  }

  public void setReservationId(Integer reservationId) {
    this.reservationId = reservationId;
  }

  public Integer getCustomerId() {
    return customerId;
  }

  public void setCustomerId(Integer customerId) {
    this.customerId = customerId;
  }

  public Integer getRoomId() {
    return roomId;
  }

  public void setRoomId(Integer roomId) {
    this.roomId = roomId;
  }

  public Date getReservationDate() {
    return reservationDate;
  }

  public void setReservationDate(Date reservationDate) {
    this.reservationDate = reservationDate;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }

  public Room getRoom() {
    return room;
  }

  public void setRoom(Room room) {
    this.room = room;
  }
}
