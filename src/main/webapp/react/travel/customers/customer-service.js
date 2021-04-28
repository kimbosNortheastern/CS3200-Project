const CUSTOMER_URL = "http://localhost:8080/api/customers";

const findAllCustomers = () => {
  return fetch(CUSTOMER_URL).then(response => {
    return response.json();
  });
};

const findCustomerById = customerId => {
  return fetch(`${CUSTOMER_URL}/${customerId}`).then(response => {
    return response.json();
  });
};

const deleteCustomer = customerId =>
  fetch(`${CUSTOMER_URL}/${customerId}`, {
    method: "DELETE",
  });

const createCustomer = customer =>
  fetch(CUSTOMER_URL, {
    method: "POST",
    body: JSON.stringify(customer),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

const updateCustomer = (customerId, customer) =>
  fetch(`${CUSTOMER_URL}/${customerId}`, {
    method: "PUT",
    body: JSON.stringify(customer),
    headers: { "content-type": "application/json" },
  }).then(response => response.json());

export default {
  findAllCustomers,
  findCustomerById,
  deleteCustomer,
  createCustomer,
  updateCustomer,
};
