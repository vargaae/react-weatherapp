import { useState, useEffect, Suspense } from "react";

import {
  useLocation,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import ErrorPage from "./ErrorPage";

import { Navbar, Spinner, Footer } from "./components";

import { Start, CitySearch, Selector, WeatherClock } from "./routes";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Layout = () => {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setNavColor] = useState("transparent");
  const [navGradient, setNavGradient] = useState("");
  const listenScrollEvent = () => {
    if (window.matchMedia("(min-width: 550px)").matches) {
      window.scrollY > 8 ? setNavColor("transparent") : setNavColor("#040F1E");
      window.scrollY > 8 ? setNavGradient("gradient__bg") : setNavGradient("");
      setnavSize("8.2rem");
      window.scrollY > 8 ? setnavSize("5rem") : setnavSize("8.2rem");
    } else {
      window.scrollY > 5
        ? setNavColor("transparent")
        : setNavColor("transparent");
      window.scrollY > 5 ? setnavSize("5rem") : setnavSize("5rem");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <ScrollToTop />
      <nav
        className="gradient__bg"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <Navbar navGradient={navGradient} />
      </nav>
      <Outlet />
      <Footer />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/selector/*",
        element: <Selector />,
      },
      {
        path: "/search/*",
        element: <CitySearch />,
      },
      {
        path: "/weather/*",
        element: <WeatherClock />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
