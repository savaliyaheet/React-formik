import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "../components/TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  console.log("Select componenet Rendered");

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
