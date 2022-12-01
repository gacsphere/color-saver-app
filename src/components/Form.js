import styled from "styled-components";

export default function ColorForm() {
  return (
    <FormCard>
      <Input></Input>
      <Input></Input>
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
  text-transform: uppercase;
  :hover {
    cursor: pointer;
    transform: rotate(6deg);
  }
  :active {
    background-color: var(--primary-gray);
  }
`;
