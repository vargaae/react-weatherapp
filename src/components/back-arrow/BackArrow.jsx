import { useNavigate } from "react-router-dom";

import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button-component/ButtonComponent";

import { BackArrowContainer, BackArrowTitle } from "./BackArrow.styles";

const BackArrow = () => {
  const navigateTo = useNavigate();

  const goToBackArrow = () => {
    navigateTo("/selector");
  };
  return (
    <BackArrowContainer id="BackArrow">
      <BackArrowTitle>
        <ButtonComponent
          onClick={goToBackArrow}
          buttonType={BUTTON_TYPE_CLASSES.back}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            color="rgb(35, 124, 184)"
          >
            <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
          </svg>
        </ButtonComponent>
      </BackArrowTitle>
    </BackArrowContainer>
  );
};

export default BackArrow;
