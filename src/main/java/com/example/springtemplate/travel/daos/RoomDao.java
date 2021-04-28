package com.example.springtemplate.travel.daos;
import com.example.springtemplate.travel.models.Customer;
import com.example.springtemplate.travel.models.Room;
import com.example.springtemplate.travel.repositories.RoomRepository;

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
public class RoomDao {
  @Autowired
  RoomRepository repository;

  @PostMapping("/api/rooms")
  public Room createRoom(@RequestBody Room room) {
    return repository.save(room);
  }

  @GetMapping("/api/rooms")
  public List<Room> findAllRooms() {
    return (List<Room>) repository.findAll();
  }

  @GetMapping("/api/rooms/{roomId}")
  public Room findRoomById(
          @PathVariable("roomId") Integer Id) {
    return repository.findRoomById(Id);
  }

  @PutMapping("/api/rooms/{roomId}")
  public Room updateRoom(
          @PathVariable("roomId") Integer id,
          @RequestBody Room newRoom) {
    Room room = repository.findRoomById(id);
    room.setRoomNumber(newRoom.getRoomNumber());
    room.setPrice(newRoom.getPrice());
    room.setRoomGrade(newRoom.getRoomGrade());
    room.setHotelId(newRoom.getHotelId());
    room.setReservations(newRoom.getReservations());
    return repository.save(room);
  }

  @DeleteMapping("/api/rooms/{roomId}")
  public void deleteRoom(
          @PathVariable("roomId") Integer id) {
    repository.deleteById(id);
  }
}
