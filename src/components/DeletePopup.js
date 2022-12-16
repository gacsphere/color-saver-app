import styled from "styled-components";
import { Button } from "./StyledComponents";

export default function DeletePopup({
  deleteColorCard,
  id,
  setShowDeletePopup,
  colorCards,
}) {
  return (
    <>
      <Overlay onClick={() => setShowDeletePopup(false)}>
        <DeleteCard
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <PopupTxt>
            Do you really want to delete this beautiful color?
          </PopupTxt>
          <Button
            isAlert
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              deleteColorCard(id, event);
              // setShowDeletePopup(false);
            }}
            type="button"
          >
            delete
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              setShowDeletePopup(false);
            }}
            type="button"
          >
            cancel
          </Button>
        </DeleteCard>
      </Overlay>
    </>
  );
}

const PopupTxt = styled.p`
  margin-bottom: 3rem;
`;

const DeleteCard = styled.article`
  padding: 2rem;
  width: 30rem;
  aspect-ratio: 1;
  background-color: var(--primary-white);
  border: 0.25rem solid var(--primary-black);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  backdrop-filter: blur(1rem);
`;
