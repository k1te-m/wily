import React from "react";
import styled from "styled-components";

const ContactTextArea = styled.textarea``;

const FormLabel = styled.label``;

const FormInput = styled.input``;
const FormButton = styled.button`
  border: 2px solid #3b945e;
`;

const camelToSentence = (string) => {
  let result = string.replace(/([A-Z])/g, " $1");
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

export function Input(props) {
  return (
    <div className="form-group">
      <FormLabel htmlFor={props.name}>{camelToSentence(props.name)}</FormLabel>
      <FormInput className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <FormLabel htmlFor={props.name}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </FormLabel>
      <ContactTextArea className="form-control" rows="15" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <FormButton {...props} className="btn-lg btn mt-3 mb-3" id="subBotton">
      {props.children}
    </FormButton>
  );
}
