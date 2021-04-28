package com.example.springtemplate.travel.daos;

import com.example.springtemplate.travel.models.CustomerGrade;
import com.example.springtemplate.travel.repositories.CustomerGradeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerGradeDao {
  @Autowired
  CustomerGradeRepository repository;

  @PostMapping("/api/customerGrades")
  public CustomerGrade createCustomerGrade(@RequestBody CustomerGrade customerGrade) {
    return repository.save(customerGrade);
  }

  @GetMapping("/api/customerGrades")
  public List<CustomerGrade> findAllCustomerGrades() {
    return (List<CustomerGrade>) repository.findAll();
  }

  @GetMapping("/api/customerGrades/{customerGradeId}")
  public CustomerGrade findCustomerGradeById(
          @PathVariable("customerGradeId") Integer Id) {
    return repository.findCustomerGradeById(Id);
  }

  @PutMapping("/api/customerGrades/{customerGradeId}")
  public CustomerGrade updateCustomerGrade(
          @PathVariable("customerGradeId") Integer id,
          @RequestBody CustomerGrade newCustomerGrade) {
    CustomerGrade customerGrade = repository.findCustomerGradeById(id);
    customerGrade.setCustomerGrade(newCustomerGrade.getCustomerGrade());
    customerGrade.setBonusPercentage(newCustomerGrade.getBonusPercentage());
    return repository.save(customerGrade);
  }

  @DeleteMapping("/api/customerGrades/{customerGradeId}")
  public void deleteCustomerGrade(
          @PathVariable("customerGradeId") Integer id) {
    repository.deleteById(id);
  }
}
