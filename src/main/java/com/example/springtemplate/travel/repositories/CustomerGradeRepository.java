package com.example.springtemplate.travel.repositories;


import com.example.springtemplate.travel.models.CustomerGrade;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerGradeRepository
        extends CrudRepository<CustomerGrade, Integer> {
  @Query(value = "SELECT * FROM customer_grade",
          nativeQuery = true)
  public List<CustomerGrade> findAllCustomerGrades();
  @Query(value = "SELECT * FROM customer_grade WHERE customer_grade_id=:customerGradeId",
          nativeQuery = true)
  public CustomerGrade findCustomerGradeById(@Param("customerGradeId") Integer id);
}
