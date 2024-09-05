import styled from "styled-components";

import { Link } from "react-router-dom";

export const CarouselContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  padding: 0.1rem;

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  letter-spacing: -0.02em;
`;

export const CarouselItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0.7rem;
  padding: 1rem;
  border-radius: 1rem;
  color: rgba(255, 255, 255);
  opacity: 0.5;
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
  // BOX-SHADOW
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);

  img {
    width: 4rem;
  }
`;
