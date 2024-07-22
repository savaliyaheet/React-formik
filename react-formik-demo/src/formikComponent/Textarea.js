import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../components/TextError";

function Textarea(props) {
  const { label, name, ...rest } = props;
  console.log("Textarea componenet Rendered");

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Textarea;
