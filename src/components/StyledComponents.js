import styled from "styled-components";

const Button = styled.button`
  width: 50%;
  height: 3rem;
  background-color: ${({ isAlert }) =>
    isAlert ? "var(--alert-primary)" : "var(--primary-black)"};
  color: var(--primary-white);
  border: none;
  font-family: monospace;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
    transform: rotate(-6deg);
  }
  :active {
    background-color: var(--primary-gray);
  }
`;

const Input = styled.input`
  /* -webkit-appearance: none; */
  width: 50%;
  height: 3rem;
  border: 0.25rem solid var(--primary-black);
  font-family: monospace;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-black);
  /* background-color: var(--primary-black); */
  :focus {
    transform: rotate(-6deg);
    outline: none;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch {
    border: none;
  }
`;

export { Button, Input };
