import { Field } from "react-final-form";
import { Button } from "../Button/Button.tsx";
import { Input, Label, Error, InputContainer } from "./PaymentForm.styles.tsx";
const CustomTextInput = ({ placeholder, input, meta, label }) => (
  <InputContainer>
    {label && <Label>{label}</Label>}
    <Input {...input} placeholder={placeholder} />
    {meta.error && meta.touched && <Error>{meta.error}</Error>}
  </InputContainer>
);
export const CustomField = ({ name, placeholder, label, validate }) => {
  return (
    <Field
      {...{ name, validate }}
      render={({ input, meta }) => (
        <>
          <CustomTextInput {...{ input, meta, label, placeholder }} />
        </>
      )}
    />
  );
};
export const FormButton = ({ handleSubmit, disabled, title }) => (
  <Button
    onClick={handleSubmit}
    disabled={disabled}
    title={title}
    visible={true}
  />
);
