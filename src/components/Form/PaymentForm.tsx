import React from "react";
import { Form } from "react-final-form";
import { FormButton, CustomField } from "./CustomAreas";
import {
  required,
  composeValidators,
  minValue,
  mustBeNumber,
  mustBeEmail,
} from "./Requirements";

import { FormWrapper } from "./PaymentForm.styles";
const PaymentForm = ({ submit, amount }) => {
  return (
    <FormWrapper>
      <Form
        style={{ width: "100%" }}
        onSubmit={values => submit(values)}
        render={({ handleSubmit, submitting, pristine, values }) => {
          return (
            <>
              <CustomField
                name="name"
                label="Name"
                validate={composeValidators(
                  required("Name"),
                  minValue("Name ", 3)
                )}
                placeholder="example@gmail.com"
              />
              <CustomField
                name="address"
                label="Address"
                validate={composeValidators(required("address"))}
                placeholder="Test Cİty, County"
              />
              <CustomField
                name="phone"
                label="Phone"
                validate={composeValidators(
                  minValue("Phone", 9),
                  mustBeNumber("Phone Number")
                )}
                placeholder="+90 45 785 45"
              />
              <CustomField
                name="email"
                label="Email"
                validate={composeValidators(required("email"), mustBeEmail())}
                placeholder="example@gmail.com"
              />
              <FormButton
                title={`Pay $${amount}`}
                disabled={submitting}
                {...{ handleSubmit }}
              />
            </>
          );
        }}
      />
    </FormWrapper>
  );
};
export default PaymentForm;
