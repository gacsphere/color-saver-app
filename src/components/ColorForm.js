import { useState } from "react";
import { Button, Input } from "./StyledComponents";
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
        style={{ backgroundColor: colorCode }}
      ></Input>
      <Button>Create</Button>
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
  /* :hover {
    cursor: pointer;
    transform: rotate(-6deg);
  } */
`;
