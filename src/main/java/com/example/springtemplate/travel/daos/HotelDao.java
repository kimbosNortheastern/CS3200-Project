package com.example.springtemplate.travel.daos;


import com.example.springtemplate.travel.models.Hotel;
import com.example.springtemplate.travel.repositories.HotelRepository;

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
public class HotelDao {
  @Autowired
  HotelRepository repository;

  @PostMapping("/api/hotels")
  public Hotel createHotel(@RequestBody Hotel hotel) {
    return repository.save(hotel);
  }

  @GetMapping("/api/hotels")
  public List<Hotel> findAllHotels() {
    return (List<Hotel>) repository.findAll();
  }

  @GetMapping("/api/hotels/{hotelId}")
  public Hotel findHotelById(
          @PathVariable("hotelId") Integer Id) {
    return repository.findHotelById(Id);
  }

  @PutMapping("/api/hotels/{hotelId}")
  public Hotel updateHotel(
          @PathVariable("hotelId") Integer id,
          @RequestBody Hotel newHotel) {
    Hotel hotel = repository.findHotelById(id);
    hotel.setName(newHotel.getName());
    hotel.setAddress(newHotel.getAddress());
    hotel.setPhone(newHotel.getPhone());
    hotel.setReviews(newHotel.getReviews());
    hotel.setRooms(newHotel.getRooms());
    return repository.save(hotel);
  }

  @DeleteMapping("/api/hotels/{hotelId}")
  public void deleteHotel(
          @PathVariable("hotelId") Integer id) {
    repository.deleteById(id);
  }
}
