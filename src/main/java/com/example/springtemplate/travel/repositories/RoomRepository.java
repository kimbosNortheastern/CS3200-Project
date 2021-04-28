package com.example.springtemplate.travel.repositories;


import com.example.springtemplate.travel.models.Room;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoomRepository
        extends CrudRepository<Room, Integer> {
  @Query(value = "SELECT * FROM rooms",
          nativeQuery = true)
  public List<Room> findAllRooms();
  @Query(value = "SELECT * FROM rooms WHERE room_id=:roomId",
          nativeQuery = true)
  public Room findRoomById(@Param("roomId") Integer id);
}
