import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../components/TextError";

function Input(props) {
  const { label, name, type, ...rest } = props;
  console.log("Input componenet Rendered");
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return <input type={type} id={name} name={name} {...field} />;
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
