import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../Schema";

function Login(props) {

  // function to create a post api call for creating new user
  async function createUser() {
    const userForm = document.getElementById("userForm");
    const formData = new FormData(userForm);

    const newUser = formData;
    newUser.delete("confirm_password");

    console.log(newUser);

    try {
      const response = await fetch("http://localhost:5000/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(newUser)),
      });

      if (response.ok) {
        const result = await response.json();
        alert("User created successfully");
        console.log(result);
      } else {
        const error = await response.json();
        alert(`Error: ${response.status}\n${JSON.stringify(error, null, 2)}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#373636" : "white",
    color: props.mode === "dark" ? "white" : "#042743",
  };

  // formik initialization
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="container mt-3">
      <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        Login-Form
      </h2>
      <form id="userForm" onSubmit={handleSubmit}>
        <div className="row g-2 my-3">
          <div className="col-md">
            <div className="form-floating">
              <input
                style={myStyle}
                type="name"
                name="firstname"
                className="form-control floatingInputGrid"
                id="firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                className="floatingSelectGrid"
                htmlFor="firstname"
              >
                First Name
              </label>
              {errors.firstname && touched.firstname ? (
                <p style={{ color: "red" }}>{errors.firstname}</p>
              ) : null}
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                style={myStyle}
                type="name"
                name="lastname"
                className="form-control floatingInputGrid"
                id="lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
                className="floatingSelectGrid"
                htmlFor="lastname"
              >
                Last Name
              </label>
              {errors.lastname && touched.lastname ? (
                <p style={{ color: "red" }}>{errors.lastname}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mb-3 form-floating">
          <input
            style={myStyle}
            type="email"
            name="email"
            className="form-control floatingInputGrid"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          <label
            style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            className="floatingSelectGrid"
            htmlFor="email"
          >
            Email address
          </label>
          {errors.email && touched.email ? (
            <p style={{ color: "red" }}>{errors.email}</p>
          ) : null}
        </div>
        <div className="mb-3 form-floating">
          <input
            style={myStyle}
            type="address"
            name="address"
            className="form-control floatingInputGrid"
            id="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            className="floatingSelectGrid"
            htmlFor="address"
          >
            Address
          </label>
          {errors.address && touched.address ? (
            <p style={{ color: "red" }}>{errors.address}</p>
          ) : null}
        </div>
        <div className="mb-3 form-floating">
          <input
            style={myStyle}
            type="password"
            name="password"
            className="form-control floatingInputGrid"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            className="floatingSelectGrid"
            htmlFor="password"
          >
            Password
          </label>
          {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
        </div>
        <div className="mb-3 form-floating">
          <input
            style={myStyle}
            type="password"
            name="confirm_password"
            className="form-control floatingInputGrid"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label
            style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            className="floatingSelectGrid"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          {errors.confirm_password && touched.confirm_password ? (
            <p style={{ color: "red" }}>{errors.confirm_password}</p>
          ) : null}
        </div>

        <button
          type="submit"
          onClick={createUser}
          className="btn btn-primary"
          style={{ width: "150px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
