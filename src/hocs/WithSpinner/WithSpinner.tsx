import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./withSpinner.styles";

const WithSpinner = WrappedComponent => props => {
  const { isLoading } = props;
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...props} />
  );
};
export default WithSpinner;
