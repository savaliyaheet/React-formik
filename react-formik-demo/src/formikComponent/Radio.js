import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "../components/TextError";

function Radio(props) {
  const { label, name, options, ...rest } = props;
  console.log("Radio componenet Rendered");

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Radio;
