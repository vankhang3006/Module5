import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const [form, setForm] = useState({});

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleValidate() {
    const errors = {};
    if (!form.name) {
      errors.name = "Required";
    }
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
      console.log("code");
    }
    if (!form.phone) {
      errors.phone = "Required";
    }
    return errors;
  }

  function handleSubmit() {
    alert("Add contact successfully!!!");
  }

  return (
      <div>
        <h1>Contact form</h1>
        <Formik
            initialValues={form}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div
                    className={`contact-input ${
                        errors.name ? "contact-input-error" : ""
                    }`}
                >
                  <label>Name</label>
                  <input
                      type="text"
                      name="name"
                      value={form.name || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.name}</p>
                </div>
                <div
                    className={`contact-input ${
                        errors.email ? "contact-input-error" : ""
                    }`}
                >
                  <label>Email</label>
                  <input
                      type="text"
                      name="email"
                      value={form.email || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.email}</p>
                </div>
                <div
                    className={`contact-input ${
                        errors.phone ? "contact-input-error" : ""
                    }`}
                >
                  <label>Phone</label>
                  <input
                      type="text"
                      name="phone"
                      value={form.phone || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.phone}</p>
                </div>
                <div
                    className={`contact-input ${
                        errors.message ? "contact-input-error" : ""
                    }`}
                >
                  <label>Message</label>
                  <textarea
                      type="message"
                      name="message"
                      value={form.message || ""}
                      onChange={handleChange}
                  />
                  <p className="error">{errors.message}</p>
                </div>
                <button type="submit">Submit</button>
              </form>
          )}
        </Formik>
      </div>
  );
}