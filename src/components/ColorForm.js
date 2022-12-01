import { useState } from "react";
import styled from "styled-components";

export default function ColorForm({ addColorCard }) {
  const [colorCode, setColorCode] = useState("#cccccc");

  return (
    <FormCard
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        addColorCard(colorCode);
      }}
      style={{ backgroundColor: colorCode }}
    >
      <Input
        type="color"
        name="colorPicker"
        value={colorCode}
        onChange={(event) => {
          setColorCode(event.target.value);
        }}
      ></Input>
      <Input
        type="text"
        name="colorCode"
        value={colorCode}
        onChange={(event) => {
          setColorCode(event.target.value);
        }}
      ></Input>
      <CreateButton>Create</CreateButton>
    </FormCard>
  );
}

const FormCard = styled.form`
  margin: 1.5rem;
  width: 15rem;
  height: 15rem;
  border: 0.25rem solid var(--primary-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  :hover {
    cursor: pointer;
    transform: rotate(6deg);
  }
`;

const Input = styled.input`
  width: 50%;
  height: 3rem;
  border: 0.25rem solid var(--primary-black);
  font-family: monospace;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-black);
  :focus {
    transform: rotate(-6deg);
    outline: none;
  }
`;

const CreateButton = styled.button`
  width: 50%;
  height: 3rem;
  background-color: var(--primary-black);
  color: var(--primary-white);
  border: none;
  font-family: monospace;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
    transform: rotate(6deg);
  }
  :active {
    background-color: var(--primary-gray);
  }
`;
