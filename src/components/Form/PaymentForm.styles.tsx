import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-top: 10vh;
  margin-right: auto;
  margin-left: auto;

  width: 40%;
  min-height: 40vh;

  vertical-align: center;
  @media screen and (max-width: 765px) {
    width: 60%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
`;
export const Input = styled.input`
  width: 100%;
  height: 3.2em;
  border-radius: 0.33em;
  padding: 0;
  focus {
    outline: none;
  }
`;
export const Label = styled.p`
  margin-top: 0.5em;
  margin-bottom: 0.6em;
  fontsize: 1em;
`;
export const Error = styled.span`
  color: #800;
  font-weight: 500;
  float: left;
`;
