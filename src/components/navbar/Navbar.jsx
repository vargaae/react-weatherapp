import { useNavigate, Link, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import { selectCityItems } from "../../store/city/city.selector";
import { addItemToSlice } from "../../store/city/city.reducer";
import { useDispatch, useSelector } from "react-redux";

import { navigation } from "../../constants";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { GradientButtonComponent } from "../../components";
import { HamburgerMenu } from "./NavbarDesign";
import MenuSvg from "../../assets/svg/MenuSvg";
import { logo } from "../../assets";

import { NavigationContainer, LogoContainer } from "./Navbar.styles";

const Navbar = ({ navGradient }) => {
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const cityItems = useSelector(selectCityItems);

  useEffect(() => {
    const addCityToSlice = () => {
      dispatch(
        addItemToSlice({
          name: "Budapest",
          id: 3850494,
        })
      );
    };

    if (cityItems.name === undefined) {
      addCityToSlice();
    }
  }, []);

  const goHome = () => {
    navigateTo("/");
  };

  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <NavigationContainer
      className={`${navGradient} navbar fixed top-0 left-0 w-full z-50 border-n-6 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8 border-b-2" : "backdrop-blur-sm"
      }`}
    >
      <div className="navbar-links flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <LogoContainer onClick={goHome} to="/">
          <img src={logo} className="logo" alt="logo of Andras Varga" />
        </LogoContainer>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5em] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="navbar-links_container relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <p key={item.id}>
                <Link
                  to={item.url}
                  className={`block relative text-2xl text-n-2 transition-colors hover:text-n-14 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                    item.url === pathname.pathname
                      ? "z-2 lg:text-n-2"
                      : "lg:text-n-2/50"
                  } lg:hover:text-n-2 xl:px-6`}
                  onClick={handleClick}
                >
                  {item.title}
                </Link>
              </p>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <GradientButtonComponent
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </GradientButtonComponent>
      </div>
    </NavigationContainer>
  );
};

export default Navbar;
