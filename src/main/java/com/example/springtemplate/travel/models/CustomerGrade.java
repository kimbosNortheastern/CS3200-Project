package com.example.springtemplate.travel.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "customer_grade")
public class CustomerGrade {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer customerGradeId;
  private String customerGrade;
  private Integer bonusPercentage;

  @OneToMany(mappedBy = "customerId")
  @JsonIgnore
  private List<Customer> customers;

  public Integer getCustomerGradeId() {
    return customerGradeId;
  }

  public void setCustomerGradeId(Integer customerGradeId) {
    this.customerGradeId = customerGradeId;
  }

  public String getCustomerGrade() {
    return customerGrade;
  }

  public void setCustomerGrade(String customerGrade) {
    this.customerGrade = customerGrade;
  }

  public Integer getBonusPercentage() {
    return bonusPercentage;
  }

  public void setBonusPercentage(Integer bonusPercentage) {
    this.bonusPercentage = bonusPercentage;
  }

  public List<Customer> getCustomers() {
    return customers;
  }

  public void setCustomers(List<Customer> customers) {
    this.customers = customers;
  }
}
