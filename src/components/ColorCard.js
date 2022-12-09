import { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "./StyledComponents";

export default function ColorCard({
  color,
  deleteColorCard,
  id,
  showDeletePopup,
  setShowDeletePopup,
  changeInputColor,
}) {
  function handleClick() {
    navigator.clipboard.writeText(color);
    setCopyMessage(true);
  }

  const [copyMessage, setCopyMessage] = useState();
  if (copyMessage) {
    setTimeout(() => setCopyMessage(false), 1000);
  }

  return (
    <>
      <ColorItem onClick={handleClick} style={{ backgroundColor: color }}>
        <Input
          value={color}
          onChange={(event) => changeInputColor(id, event)}
          onClick={handleClick}
          style={{ backgroundColor: color }}
        />
        <Button
          // onClick={(event) => {
          //   event.stopPropagation();
          //   setShowDeletePopup(true);
          // }}
          onClick={(event) => deleteColorCard(id, event)}
        >
          delete
        </Button>
        {copyMessage && (
          <CopyMessage style={{ backgroundColor: color }}>
            Copied color {color}
          </CopyMessage>
        )}
      </ColorItem>
    </>
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

const CopyMessage = styled.p`
  position: absolute;
  padding: 1rem;
  /* background-color: var(--primary-white); */
  text-transform: uppercase;
  text-align: center;
  width: 15rem;
  aspect-ratio: 1;
  border: 0.25rem solid var(--primary-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
