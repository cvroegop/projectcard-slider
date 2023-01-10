import { useLayoutEffect, useRef, useState } from "react";
import Card from "./card/Card";
import {
  ArrowButton,
  CardContainer,
  Header,
  SliderContainer,
  Wrapper,
} from "./Slider.styled";
import { mockedData } from "./mockedData";
import ArrowIcon from "icons/ArrowIcon";
import { getInitialOrder } from "./utils";

const cardsOutsideOfView = 2;

function Slider() {
  const [itemOrder, setItemOrder] = useState(
    getInitialOrder(mockedData, cardsOutsideOfView)
  );
  const [cardstoShow, setCardsToShow] = useState<number>(6);
  const [cardSize, setCardSize] = useState<number>(308);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleScreenWidth);

    if (containerRef.current && containerRef.current !== null) {
      setCardsToShow(
        Math.floor(containerRef.current.clientWidth / cardSize) +
          cardsOutsideOfView +
          1
      );
    }
    return () => window.removeEventListener("resize", handleScreenWidth);
  }, [cardSize, containerRef, screenWidth, setCardsToShow]);

  const handlePrevCard = () => {
    setItemOrder((prevOrder) => {
      return prevOrder.map(
        (_, i) => prevOrder[((i + 1) % itemOrder.length) % itemOrder.length]
      );
    });
  };

  const handleNextCard = () => {
    setItemOrder((prevOrder) => {
      return prevOrder.map(
        (_, i) => prevOrder[(i - 1 + itemOrder.length) % itemOrder.length]
      );
    });
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNextCard();
    }

    if (diff < -5) {
      handlePrevCard();
    }

    setTouchPosition(null);
  };

  return (
    <SliderContainer ref={containerRef}>
      <Header>
        <h3>Projects</h3>
        <div style={{ flexGrow: 1 }} />
        <ArrowButton onClick={handlePrevCard} direction="left">
          <ArrowIcon size={24} />
        </ArrowButton>
        <ArrowButton onClick={handleNextCard}>
          <ArrowIcon size={24} />
        </ArrowButton>
      </Header>
      <Wrapper>
        <CardContainer
          cardSize={cardSize}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {itemOrder.map((position, index) => (
            <Card
              key={mockedData[index].title}
              position={position}
              visible={position < cardstoShow}
              i={index}
              cardRef={cardRef}
              cardSize={cardSize}
              screenWidth={screenWidth}
              img={mockedData[index].img}
              title={mockedData[index].title}
              summary={mockedData[index].summary}
              setCardSize={setCardSize}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </SliderContainer>
  );
}

export default Slider;
