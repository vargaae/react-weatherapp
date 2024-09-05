import {
  BaseButton,
  StartButton,
  ShopButton,
  ShopProductPageButton,
  GoogleSignInButton,
  NavigationButton,
  DropDownSignOutButton,
  InvertedButton,
  BackButton,
  ButtonSpinner,
} from "./ButtonComponent.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  start: "start",
  shop: "shop",
  productpage: "productpage",
  google: "google-sign-in",
  navigation: "navigation",
  signout: "drop-down-sign-out",
  inverted: "inverted",
  back: "back",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.start]: StartButton,
    [BUTTON_TYPE_CLASSES.shop]: ShopButton,
    [BUTTON_TYPE_CLASSES.productpage]: ShopProductPageButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.navigation]: NavigationButton,
    [BUTTON_TYPE_CLASSES.signout]: DropDownSignOutButton,
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
