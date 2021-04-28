package com.example.springtemplate.travel.repositories;


import com.example.springtemplate.travel.models.Reservation;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository
        extends CrudRepository<Reservation, Integer> {
  @Query(value = "SELECT * FROM reservations",
          nativeQuery = true)
  public List<Reservation> findAllReservations();
  @Query(value = "SELECT * FROM reservations WHERE reservation_id=:reservationId",
          nativeQuery = true)
  public Reservation findReservationById(@Param("reservationId") Integer id);
}
