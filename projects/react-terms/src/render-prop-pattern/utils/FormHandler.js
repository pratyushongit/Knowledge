import { useState } from "react";
import axios from "axios";

const FormHandler = ({ url, render }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
    country: "",
    subscribe: false,
  });
  const [formErrorData, setFormErrorData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
    country: "",
    subscribe: false,
  });

  const validateForm = () => {
    const formError = {};
    const regex = /\S+@\S+\.\S+/i;
    let isValid = true;

    if (!formData.username) {
      isValid = false;
      formError.username = "Username is required";
    } else if (formData.username.length < 3) {
      isValid = false;
      formError.username = "Username should be more than 3 characters";
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

    if (!formData.email) {
      isValid = false;
      formError.email = "E-mail is required";
    } else if (!regex.test(formData.email)) {
      isValid = false;
      formError.email = "Email is an invalid email address.";
    }

    if (!formData.gender) {
      isValid = false;
      formError.gender = "Gender is required";
    }

    if (!formData.country) {
      isValid = false;
      formError.country = "Country is required";
    }

    setFormErrorData(formError);
    return isValid;
  };

  const sumbitForm = async () => {
    const { data } = await axios.post(url, formData);
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sumbitForm();
    }
  };

  return render({ formData, formErrorData, handleChange, handleSubmit });
};

export default FormHandler;
