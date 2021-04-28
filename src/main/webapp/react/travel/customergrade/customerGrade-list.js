import service from "./customerGrade-service";

const { useEffect, useState } = React;
const { Link } = ReactRouterDOM;

const CustomerGradeList = () => {
  const [customerGrades, setCustomerGrades] = useState([]);
  useEffect(() => {
    service.findAllCustomerGrades().then(customerGrades => {
      setCustomerGrades(customerGrades);
    });
  }, []);
  return (
    <div>
      <h1>Customer Grades List</h1>
      <ul className="list-group">
        {customerGrades.map(customerGrades => {
          return (
            <li class="list-group-item">
              <Link to={`/customerGrades/${customerGrades.customerGradeId}`}>
                {customerGrades.customerGrade}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomerGradeList;
