import "./Form.scss";

const Form = ({ title, children, onSubmit }) => {
  return (
    <div className="form">
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default Form;
