import styled from "styled-components";

export default function ColorCard({ color }) {
  function handleClick() {
    navigator.clipboard.writeText(color);
  }

  return (
    <ColorItem onClick={handleClick} style={{ backgroundColor: color }}>
      <p>{color}</p>
    </ColorItem>
  );
}

const ColorItem = styled.li`
  margin: 1.5rem;
  width: 15rem;
  height: 15rem;
  border: 0.25rem solid var(--primary-black);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    transform: rotate(6deg);
  }
`;
