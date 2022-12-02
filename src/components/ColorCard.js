import styled from "styled-components";
import { Button } from "./StyledComponents";

export default function ColorCard({ color, deleteColorCard, id }) {
  function handleClick() {
    navigator.clipboard.writeText(color);
  }

  return (
    <ColorItem onClick={handleClick} style={{ backgroundColor: color }}>
      <ColorCodeTxt>{color}</ColorCodeTxt>
      <Button onClick={(event) => deleteColorCard(id, event)}>delete</Button>
    </ColorItem>
  );
}

const ColorItem = styled.li`
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
    /* transform: rotate(-6deg); */
  }
`;

const ColorCodeTxt = styled.p`
  text-transform: uppercase;
`;
