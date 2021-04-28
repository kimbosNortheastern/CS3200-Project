import service from "./customer-service";

const { useEffect, useState } = React;
const { Link } = ReactRouterDOM;

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    service.findAllCustomers().then(customers => {
      setCustomers(customers);
      //console.log(customers);
    });
  }, []);
  return (
    <div>
      <h1>Customers List</h1>
      <ul className="list-group">
        {customers.map(customers => {
          return (
            <li class="list-group-item">
              <Link to={`/customers/${customers.customerId}`}>
                {customers.firstName}
              </Link>
            </li>
          );
        })}
        <Link to={`/reviews`}>Review List</Link>
      </ul>
    </div>
  );
};

export default CustomerList;
