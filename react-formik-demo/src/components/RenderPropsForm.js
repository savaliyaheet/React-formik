import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .min(5, "Atleast length 5 reuired")
    .max(20, "Max 20Char allowed"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Requried"),
  phNumbers: Yup.array().min(1, "At least one number should be entered"),
  comments: Yup.string().required("Required"),
});

const validateAddress = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function RenderPropsForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        channel: "",
        comments: "",
        address: "",
        social: {
          facebook: "",
          twitter: "",
        },
        phoneNumbers: ["", ""],
        phNumbers: [""],
      }}
      onSubmit={(values, onSubmitProps) => {
        console.log("Entered Values", values);
        console.log("On submit Props", onSubmitProps);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field
                as="textarea"
                id="address"
                name="address"
                validate={validateAddress}
              />
              <ErrorMessage name="address" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <FastField name="comments">
                {({ field, form, meta }) => {
                  return (
                    <>
                      <input type="text" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </>
                  );
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone Number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Secondary Phone Number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
            </div>
            <div className="form-control">
              <label htmlFor="phNumbers">Phone Numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { form, push, remove } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
              <ErrorMessage name="phNumbers" />
            </div>
            <button
              type="button"
              onClick={() => formik.validateField("address")}
            >
              Validate Address
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("address")}
            >
              Touch Address{" "}
            </button>
            <button type="button">Reset</button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RenderPropsForm;
