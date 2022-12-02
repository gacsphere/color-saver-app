import styled from "styled-components";

const Button = styled.button`
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

export { Button };
