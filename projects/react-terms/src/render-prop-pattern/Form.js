import React from "react";
import FormHandler from "./utils/FormHandler";

const Form = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const renderForm = ({
    formData,
    formErrorData,
    handleSubmit,
    handleChange,
  }) => {
    return (
      <>
        <h2>Signup form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
            {formErrorData.username && (
              <p style={{ color: "red" }}>{formErrorData.username}</p>
            )}
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrorData.password && (
              <p style={{ color: "red" }}>{formErrorData.password}</p>
            )}
          </div>
          <div>
            <label>Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {formErrorData.confirmPassword && (
              <p style={{ color: "red" }}>{formErrorData.confirmPassword}</p>
            )}
          </div>
          <div>
            <label>E-mail: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrorData.email && (
              <p style={{ color: "red" }}>{formErrorData.email}</p>
            )}
          </div>
          <div>
            <label>Gender: </label>
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formErrorData.gender && (
              <p style={{ color: "red" }}>{formErrorData.gender}</p>
            )}
          </div>
          <div>
            <label>Country: </label>
            India
            <input
              type="radio"
              value="india"
              name="country"
              onChange={handleChange}
            />
            Outside India
            <input
              type="radio"
              value="outside"
              name="country"
              onChange={handleChange}
            />
            {formErrorData.country && (
              <p style={{ color: "red" }}>{formErrorData.country}</p>
            )}
          </div>
          <div>
            <label>Subscribe:</label>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  };

  return <FormHandler url={URL} render={renderForm} />;
};

export default Form;
