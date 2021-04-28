const CUSTOMERGRADE_URL = "http://localhost:8080/api/customerGrades";

const findAllCustomerGrades = () => {
  return fetch(CUSTOMERGRADE_URL).then(response => {
    return response.json();
  });
};

const findCustomerGradeById = customerGradeId => {
  return fetch(`${CUSTOMERGRADE_URL}/${customerGradeId}`).then(response => {
    return response.json();
  });
};

const deleteCustomerGrade = customerGradeId =>
  fetch(`${CUSTOMERGRADE_URL}/${customerGradeId}`, {
    method: "DELETE",
  });

const createCustomerGrade = customerGrade =>
  fetch(CUSTOMERGRADE_URL, {
    method: "POST",
    body: JSON.stringify(customerGrade),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

const updateCustomerGrade = (customerGradeId, customerGrade) =>
  fetch(`${CUSTOMERGRADE_URL}/${customerGradeId}`, {
    method: "PUT",
    body: JSON.stringify(customerGrade),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

export default {
  findAllCustomerGrades,
  findCustomerGradeById,
  deleteCustomerGrade,
  createCustomerGrade,
  updateCustomerGrade,
};
