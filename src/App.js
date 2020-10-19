import React, { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Shop from "./Components/Shop/Shop";

import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "required";
  }
  return errors;
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().required("No password provided."),
});
function App() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            id="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            id="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      {formik.touched.email && formik.values.password ? (
        <div style={{ width: "50%" }}>
          <Cart />
          <Shop />
        </div>
      ) : null}
    </div>
  );
}

export default App;
