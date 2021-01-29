import { Error } from "./PaymentForm.styles";
// eslint-disable-next-line no-useless-escape
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const required = label => value =>
  value ? undefined : <Error>*{label} Required</Error>;
export const mustBeNumber = label => value =>
  value && value.length > 0 && isNaN(value) ? (
    <Error>{label} Must be Number</Error>
  ) : undefined;
export const mustBeEmail = () => value =>
  emailRegex.test(value.toLowerCase()) ? undefined : (
    <Error>*Must be a Valid Email</Error>
  );
export const minValue = (label, min) => value =>
  isNaN(value) || value.length >= min ? undefined : (
    <Error>*Min.Value is {min}</Error>
  );
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
