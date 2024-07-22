import React, { useEffect, useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const selectOptions = [
  {
    key: "Select an option",
    value: "",
  },
  {
    key: "Ahmedabad",
    value: "ahmedabad",
  },
  {
    key: "Surat",
    value: "surat",
  },
  {
    key: "Rajkot",
    value: "rajkot",
  },
];

const checkOptions = [
  {
    key: "Dancing",
    value: "dancing",
  },
  {
    key: "Reading",
    value: "reading",
  },
  {
    key: "Writing",
    value: "writing",
  },
  {
    key: "playing",
    value: "playing",
  },
];

const radioOptions = [
  {
    key: "Male",
    value: "male",
  },
  {
    key: "Female",
    value: "female",
  },
];
const initialValues = {
  username: "",
  password: "",
  address: "",
  city: "",
  gender: "",
  hobby: [],
  otp: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  hobby: Yup.array().min(1, "Required"),
  otp: Yup.string().required("Required").max(6, "Only 6 character allowed"),
});

const AutoSubmitToken = (props) => {
  const formikContext = useFormikContext();
  const { values, setFieldValue } = formikContext;
  useEffect(() => {
    if (values.otp === "heet") {
      setFieldValue("gender", "male");
    }
  }, [values]);
  console.log(formikContext);
  return null;
};

function FormikContainer() {
  console.log("Formik container rendered");

  const onSubmit = (values, action) => {
    console.log("Submitted Values", values);
    console.log("Submitted action on SUbmit props", action);
    action.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormikControl control="input" name="otp" label="Name" type="text" />
        <FormikControl
          control="input"
          name="username"
          label="Username"
          type="text"
        />
        <FormikControl
          control="input"
          name="password"
          label="Password"
          type="password"
        />
        <FormikControl control="textarea" name="address" label="Address" />
        <FormikControl
          control="select"
          name="city"
          label="City"
          options={selectOptions}
        />

        <FormikControl
          control="radio"
          name="gender"
          options={radioOptions}
          label="Gender"
        />

        <FormikControl
          control="checkbox"
          name="hobby"
          label="Hobby"
          options={checkOptions}
        />

        <AutoSubmitToken />
        <button>Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikContainer;
