package com.example.springtemplate.travel.repositories;

import com.example.springtemplate.travel.models.Customer;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository
        extends CrudRepository<Customer, Integer> {
  @Query(value = "SELECT * FROM customers", nativeQuery = true)
  public List<Customer> findAllCustomers();
  @Query(value = "SELECT * FROM customers WHERE customer_id=:customerId", nativeQuery = true)
  public Customer findCustomerById(@Param("customerId") Integer Id);

}
