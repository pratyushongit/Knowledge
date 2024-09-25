import { useState } from "react";
import FormInput from "./components/FormInput";
import styles from "./FormValidation.module.css";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
    },
    {
      id: 2,
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "E-mail",
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm password",
      type: "password",
      placeholder: "Confirm password",
    },
  ];

  const validateFields = () => {
    let isValid = true;
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const formError = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formData.username) {
      isValid = false;
      formError.username = "Username is required";
    } else if (formData.username.length < 3) {
      isValid = false;
      formError.username = "Username should be more than 3 characters";
    }

    if (!formData.email) {
      isValid = false;
      formError.email = "E-mail is required";
    } else if (!regex.test(formData.email)) {
      isValid = false;
      formError.email = "Email is an invalid email address.";
    }

    if (!formData.password) {
      isValid = false;
      formError.password = "Password is required";
    } else if (formData.password.length < 5 || formData.password.length > 8) {
      isValid = false;
      formError.password =
        "Password should be more than 5 characters and less than 8 characters";
    }

    if (!formData.confirmPassword) {
      isValid = false;
      formError.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      isValid = false;
      formError.confirmPassword = "Passwords dont match.";
    }

    setFormErrors(formError);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) console.log("Form submitted with -> ", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={handleChange}
            formError={formErrors[input.name]}
          />
        ))}
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
