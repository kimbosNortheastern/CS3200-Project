package com.example.springtemplate.travel.daos;

import com.example.springtemplate.travel.models.Customer;
import com.example.springtemplate.travel.repositories.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerDao {
  @Autowired
  CustomerRepository repository;

  @PostMapping("/api/customers")
  public Customer createCustomer(@RequestBody Customer customer) {
    return repository.save(customer);
  }

  @GetMapping("/api/customers")
  public List<Customer> findAllCustomers() {
    return (List<Customer>) repository.findAll();
  }

  @GetMapping("/api/customers/{customerId}")
  public Customer findCustomerById(
          @PathVariable("customerId") Integer Id) {
    return repository.findCustomerById(Id);
  }

  @PutMapping("/api/customers/{customerId}")
  public Customer updateCustomer(
          @PathVariable("customerId") Integer id,
          @RequestBody Customer newCustomer) {
    Customer customer = repository.findCustomerById(id);
    customer.setFirstName(newCustomer.getFirstName());
    customer.setLastName(newCustomer.getLastName());
    customer.setUserName(newCustomer.getUserName());
    customer.setPassword(newCustomer.getPassword());
    customer.setEmail(newCustomer.getEmail());
    customer.setDateOfBirth(newCustomer.getDateOfBirth());
    customer.setMileage(newCustomer.getMileage());
    customer.setCustomerGrade(newCustomer.getCustomerGrade());
    return repository.save(customer);
  }

  @DeleteMapping("/api/customers/{customerId}")
  public void deleteCustomer(
          @PathVariable("customerId") Integer id) {
    repository.deleteById(id);
  }
}
