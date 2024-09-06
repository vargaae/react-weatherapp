import {
  BaseButton,
  StartButton,
  InvertedButton,
  BackButton,
  ButtonSpinner,
} from "./ButtonComponent.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  start: "start",
  inverted: "inverted",
  back: "back",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.start]: StartButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.back]: BackButton,
  }[buttonType]);

const ButtonComponent = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default ButtonComponent;
