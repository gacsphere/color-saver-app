import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import GlobalStyle from "./components/GlobalStyle";
import ColorCard from "./components/ColorCard";
import ColorForm from "./components/ColorForm";
import DeletePopup from "./components/DeletePopup";

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
  ];
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [colorCards, setColorCards] = useState(
    JSON.parse(localStorage.getItem("colorCards")) || initialColors
  );
  function addColorCard(newColorCode) {
    setColorCards((previousColorCards) => [
      {
        id: nanoid(),
        colorCode: newColorCode,
      },
      ...previousColorCards,
    ]);
  }

  function deleteColorCard(id, event) {
    event.stopPropagation();
    console.log("deleted id:", id);
    setColorCards((colorCards) =>
      colorCards.filter((colorCard) => colorCard.id !== id)
    );
    setShowDeletePopup(false);
  }

  function changeInputColor(id, event) {
    const newColorCode = event.target.value;
    setColorCards(
      colorCards.map((colorCard) =>
        colorCard.id === id
          ? { ...colorCard, colorCode: newColorCode }
          : colorCard
      )
    );
  }

  useEffect(() => {
    localStorage.setItem("colorCards", JSON.stringify(colorCards));
  }, [colorCards]);

  return (
    <>
      <GlobalStyle />
      {showDeletePopup && (
        <DeletePopup
          deleteColorCard={deleteColorCard}
          // id={colorCards.color.id}
          setShowDeletePopup={setShowDeletePopup}
          colorCards={colorCards}
        />
      )}
      <CardList>
        <ColorForm addColorCard={addColorCard} />
        {colorCards.map((color) => (
          <ColorCard
            key={color.id}
            id={color.id}
            color={color.colorCode}
            deleteColorCard={deleteColorCard}
            changeInputColor={changeInputColor}
            // setShowDeletePopup={setShowDeletePopup}
            // deleteColorCard={(event) => deleteColorCard(color.id, event)}
          />
        ))}
      </CardList>
    </>
  );
}

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
`;

export default App;
