import Carousel from "./Carousel";

import { images } from "../../constants";

import {
  BannerContainer,
  BannerContent,
  CarouselContainer,
  CarouselTitle,
} from "./StartHeader.styles";

const StartHeader = () => {
  return (
    <BannerContainer
      style={{
        backgroundImage: `url(${images.banner})`,
      }}
    >
      <BannerContent>
        <CarouselContainer>
          <CarouselTitle>WEATHER APP</CarouselTitle>
          <p
            style={{
              fontWeight: "bold",
              color: "white",
              marginBottom: 10,
            }}
          >
            Weather Forecast for Budapest, Hungary
          </p>
          <Carousel />
        </CarouselContainer>
      </BannerContent>
    </BannerContainer>
  );
};

export default StartHeader;
