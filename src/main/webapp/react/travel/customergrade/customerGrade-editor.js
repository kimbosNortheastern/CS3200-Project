import service from "./customerGrade-service";

const { useEffect, useState } = React;
const { useParams, useHistory, Link } = ReactRouterDOM;

const CustomerGradeEditor = () => {
  const [customerGrade, setCustomerGrade] = useState([]);
  const { customerGradeId } = useParams();
  const history = useHistory();

  useEffect(() => {
    service.findCustomerGradeById(customerGradeId).then(customerGrade => {
      setCustomerGrade(customerGrade);
      console.log(customerGradeId);
    });
  }, []);

  const deleteCustomerGrade = customerGradeId =>
    service.deleteCustomerGrade(customerGradeId).then(() => history.goBack());

  const createCustomerGrade = customerGrade =>
    service.createCustomerGrade(customerGrade).then(() => history.goBack());

  const updateCustomerGrade = (customerGradeId, newCustomerGrade) =>
    service
      .updateCustomerGrade(customerGradeId, newCustomerGrade)
      .then(() => history.goBack());

  return (
    <div>
      <h1>Customer Grade Editor {customerGradeId} </h1>
      <label>Customer Grade ID</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomerGrade({ ...customerGrade, customerGradeId: newValue });
        }}
        value={customerGrade.customerGradeId}
        className="form-control"
      />
      <label>Customer Grade</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomerGrade({ ...customerGrade, customerGrade: newValue });
        }}
        value={customerGrade.customerGrade}
        className="form-control"
      />
      <label>Bonus Percentage</label>
      <input
        onChange={e => {
          const newValue = e.target.value;
          setCustomerGrade({ ...customerGrade, bonusPercentage: newValue });
        }}
        value={customerGrade.bonusPercentage}
        className="form-control"
      />
      <Link to={`/customerGrades`}>
        <label>Customer Grade List</label>
      </Link>

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
        onClick={() => deleteCustomerGrade(customerGrade.customerGradeId)}
      >
        Delete
      </button>
      <button
        onClick={() =>
          updateCustomerGrade(customerGrade.customerGradeId, customerGrade)
        }
        className="btn btn-primary"
      >
        Save
      </button>
      <button
        onClick={() => createCustomerGrade(customerGrade)}
        className="btn btn-success"
      >
        Create
      </button>
    </div>
  );
};

export default CustomerGradeEditor;
