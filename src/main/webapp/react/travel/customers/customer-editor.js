import service from "./customer-service";

const { useEffect, useState } = React;
const { useParams, useHistory, Link } = ReactRouterDOM;

const CustomerEditor = () => {
  const [customer, setCustomer] = useState([]);
  const { customerId } = useParams();
  const history = useHistory();

  useEffect(() => {
    service.findCustomerById(customerId).then(customer => {
      setCustomer(customer);
    });
  }, []);

  const deleteCustomer = customerId =>
    service.deleteCustomer(customerId).then(() => history.goBack());

  const createCustomer = customer =>
    service.createCustomer(customer).then(() => history.goBack());

  const updateCustomer = (customerId, newCustomer) =>
    service
      .updateCustomer(customerId, newCustomer)
      .then(() => history.goBack());

  return (
    <div>
      <h1>Customer Editor {customerId} </h1>
      <label>Customer ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, customerId: newValue });
        }}
        value={customer.customerId}
        className="form-control"
      />
      <label>First Name</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, firstName: newValue });
        }}
        value={customer.firstName}
        className="form-control"
      />
      <label>Last Name</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, lastName: newValue });
        }}
        value={customer.lastName}
        className="form-control"
      />
      <label>User Name</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, userName: newValue });
        }}
        value={customer.userName}
        className="form-control"
      />
      <label>Password</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, password: newValue });
        }}
        value={customer.password}
        className="form-control"
      />
      <label>E-mail</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, email: newValue });
        }}
        value={customer.email}
        className="form-control"
      />
      <label>Date of Birth</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, dateOfBirth: newValue });
        }}
        value={customer.dateOfBirth}
        className="form-control"
      />
      <label>Mileage</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, mileage: newValue });
        }}
        value={customer.mileage}
        className="form-control"
      />

      <Link to={`/customerGrades/${customer.customerGrade}`}>
        <label>Customer Grade</label>
      </Link>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomer({ ...customer, customerGrade: newValue });
        }}
        value={customer.customerGrade}
        className="form-control"
      />

      <button
        className="btn btn-warning"
        onClick={() => {
          history.goBack();
        }}
      >
        Cancel
      </button>
      <button
        className="btn btn-danger"
        onClick={() => deleteCustomer(customer.customerId)}
      >
        Delete
      </button>
      <button
        onClick={() => updateCustomer(customer.customerId, customer)}
        className="btn btn-primary"
      >
        Save
      </button>
      <button
        onClick={() => createCustomer(customer)}
        className="btn btn-success"
      >
        Create
      </button>
    </div>
  );
};

export default CustomerEditor;
