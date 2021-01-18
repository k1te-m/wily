import React from "react";
import styled from "styled-components";

const ContactTextArea = styled.textarea`
  color: #f2f2f2;
  background-color: #182628;
  border: 2px solid #3b945e;
  :focus {
    color: #f2f2f2;
    background-color: #182628;
    outline: none !important;
    border: 1px solid #3b945e;
    box-shadow: 0 0 10px #57ba98;
  }
`;

const FormLabel = styled.label`
  color: #f2f2f2;
`;

const FormInput = styled.input`
  color: #f2f2f2;
  background-color: #182628;
  border: 2px solid #3b945e;
  :focus {
    color: #f2f2f2;
    background-color: #182628;
    outline: none !important;
    border: 1px solid #3b945e;
    box-shadow: 0 0 10px #57ba98;
  }
`;
const FormButton = styled.button`
  color: #f2f2f2;
  background-color: #182628;
  border: 2px solid #3b945e;
  :hover {
    background-color: #3b945e;
    border: 2px solid #182628;
  }
  :focus {
    box-shadow: 0 0 10px #57ba98;
  }
`;

export function Input(props) {
  return (
    <div className="form-group col-12">
      <FormLabel htmlFor={props.name}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </FormLabel>
      <FormInput className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group col-12">
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
