import { useLayoutEffect } from "react";
import {
  ArrowContainer,
  CardContainer,
  Bottom,
  ImgContainer,
  ReadMore,
  SummaryContainer,
  TitleAndBody,
} from "./Card.styled";
import ArrowIcon from "icons/ArrowIcon";

interface CardProps {
  position: number;
  visible: boolean;
  i: number;
  cardRef: React.MutableRefObject<HTMLDivElement | null>;
  cardSize: number;
  screenWidth: number;
  img: string;
  title: string;
  summary: string;
  setCardSize: (size: number) => void;
}
function Card({
  position,
  visible,
  i,
  cardRef,
  cardSize,
  screenWidth,
  img,
  title,
  summary,
  setCardSize,
}: CardProps) {
  useLayoutEffect(() => {
    if (cardRef.current && cardRef.current !== null) {
      setCardSize(cardRef.current.clientWidth);
    }
  }, [cardRef, setCardSize, screenWidth]);

  return (
    <CardContainer
      i={i}
      position={position}
      visible={visible}
      cardSize={cardSize}
      ref={cardRef}
    >
      <ImgContainer img={img} />
      <Bottom>
        <TitleAndBody>
          <h4>{title}</h4>
          <SummaryContainer>
            <p>{summary}</p>
          </SummaryContainer>
        </TitleAndBody>
        <ReadMore>
          <h5>Read more..</h5>
          <ArrowContainer>
            <ArrowIcon size={16} />
          </ArrowContainer>
        </ReadMore>
      </Bottom>
    </CardContainer>
  );
}

export default Card;
