import React, { useContext } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Button } from "../Button/Button";
import { CartContext } from "../../contexts/Cart/CartContext";

import {
  CardOverlay,
  TopImageContainer,
  ImageOverlay,
  InlineImageWrapper,
  ImageContainer,
  IconContainer,
  RowContainer,
  RightInfoContainer,
  RightBottomContainer,
  HalfContainer,
} from "./HotelCard.styles";
type Image = {
  url: string;
};
type HotelProps = {
  hotelId: string;
  selected: boolean;
  name: string;
  description: {
    short: string;
  };
  roomCount: number;
  images: Image[];
  address: {
    countryName: string;
    city: string;
    line1: string;
  };

  starRating: number;
};

const HotelCard: React.FC<HotelProps> = ({ ...props }) => {
  const {
    hotelId,
    name,
    description,

    starRating,
    roomCount,
    images,
    address,
  } = props;

  const { cartItems, addItem } = useContext(CartContext);
  const title =
    cartItems.filter(item => item.hotelId === hotelId).length > 0
      ? "Add More"
      : "Add to Card";
  const addToCart = () => {
    const newHotel = {
      name: name,
      roomCount: roomCount,
      hotelId: hotelId,
      images: images,
    };
    addItem(newHotel);
  };

  return (
    <CardOverlay>
      <ImageOverlay>
        <TopImageContainer>
          <img
            alt="testforapi"
            style={{ width: " 100%", height: "100%" }}
            src={images[0].url}
          />
        </TopImageContainer>
        <InlineImageWrapper>
          {images.slice(1, 3).map((image, key) => {
            return (
              <ImageContainer key={key}>
                <img
                  alt="testforapi"
                  style={{ width: "100%", height: "100%" }}
                  src={image.url}
                />
              </ImageContainer>
            );
          })}
        </InlineImageWrapper>
      </ImageOverlay>
      <RightInfoContainer>
        <h3>{name.split("[SANDBOX]").join("")}</h3>
        <p>{description.short.split(" ").slice(0, 12).join(" ")}...</p>
        <RightBottomContainer>
          <RowContainer>
            <IconContainer>
              <GoLocation />
            </IconContainer>
            <HalfContainer>
              {address.city +
                "/" +
                address.countryName.split(" ").slice(0, 2).join(" ")}
            </HalfContainer>
          </RowContainer>
          <RowContainer>
            <IconContainer>
              {Array(starRating).fill(
                <AiTwotoneStar style={{ color: "#FFC107" }} />
              )}
            </IconContainer>
            <HalfContainer>{roomCount}$/PerNight</HalfContainer>
          </RowContainer>
          <Button title={title} onClick={addToCart} color="#0e76a8" />
        </RightBottomContainer>
      </RightInfoContainer>
    </CardOverlay>
  );
};

export default HotelCard;
