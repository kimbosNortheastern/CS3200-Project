package com.example.springtemplate.travel.daos;

import com.example.springtemplate.travel.models.Reservation;
import com.example.springtemplate.travel.repositories.ReservationRepository;

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
public class ReservationDao {
  @Autowired
  ReservationRepository repository;

  @PostMapping("/api/reservations")
  public Reservation createReservation(@RequestBody Reservation reservation) {
    return repository.save(reservation);
  }

  @GetMapping("/api/reservations")
  public List<Reservation> findAllReservations() {

    return (List<Reservation>) repository.findAll();
  }

  @GetMapping("/api/reservations/{reservationId}")
  public Reservation findReservationById(
          @PathVariable("reservationId") Integer Id) {
    return repository.findReservationById(Id);
  }

  @PutMapping("/api/reservations/{reservationId}")
  public Reservation updateReservation(
          @PathVariable("reservationId") Integer id,
          @RequestBody Reservation newReservation) {
    Reservation reservation = repository.findReservationById(id);
    reservation.setCustomerId(newReservation.getCustomerId());
    reservation.setRoomId(newReservation.getRoomId());
    reservation.setReservationDate(newReservation.getReservationDate());
    return repository.save(reservation);
  }

  @DeleteMapping("/api/reservations/{reservationId}")
  public void deleteReservation(
          @PathVariable("reservationId") Integer id) {
    repository.deleteById(id);
  }
}
