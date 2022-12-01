import "./App.css";
import { nanoid } from "nanoid";
import GlobalStyle from "./components/GlobalStyle";
import ColorCard from "./components/ColorCard";

function App() {
  const initialColors = [
    {
      id: nanoid(),
      colorCode: "#99115B",
    },
    {
      id: nanoid(),
      colorCode: "#E6D247",
    },
    {
      id: nanoid(),
      colorCode: "#E63093",
    },
    {
      id: nanoid(),
      colorCode: "#19D1E6",
    },
    {
      id: nanoid(),
      colorCode: "#188C99",
    },
    {
      id: nanoid(),
      colorCode: "#99115B",
    },
    {
      id: nanoid(),
      colorCode: "#E6D247",
    },
    {
      id: nanoid(),
      colorCode: "#E63093",
    },
    {
      id: nanoid(),
      colorCode: "#19D1E6",
    },
    {
      id: nanoid(),
      colorCode: "#188C99",
    },
    {
      id: nanoid(),
      colorCode: "#99115B",
    },
    {
      id: nanoid(),
      colorCode: "#E6D247",
    },
    {
      id: nanoid(),
      colorCode: "#E63093",
    },
    {
      id: nanoid(),
      colorCode: "#19D1E6",
    },
    {
      id: nanoid(),
      colorCode: "#188C99",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <ul>
        {initialColors.map((color) => (
          <ColorCard key={color.id} color={color.colorCode} />
        ))}
      </ul>
    </>
  );
}

export default App;
