package com.example.springtemplate.travel.repositories;


import com.example.springtemplate.travel.models.Hotel;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HotelRepository
        extends CrudRepository<Hotel, Integer> {
  @Query(value = "SELECT * FROM hotels",
          nativeQuery = true)
  public List<Hotel> findAllHotels();
  @Query(value = "SELECT * FROM hotels WHERE hotel_id=:hotelId",
          nativeQuery = true)
  public Hotel findHotelById(@Param("hotelId") Integer id);
}
