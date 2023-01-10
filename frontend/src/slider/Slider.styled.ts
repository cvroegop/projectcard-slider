import styled from "styled-components";

export const ArrowButton = styled.div<{ direction?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #e5e5e5;
  margin-left: 10px;
  border-radius: 40px;
  cursor: pointer;
  transform: ${(props) => props.direction === "left" && "rotate(180deg)"};
  transition: background-color 0.6s;
  &:hover {
    background-color: #adadad;
  }
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;

export const CardContainer = styled.div<{ cardSize: number }>`
  display: flex;
  position: absolute;
  align-items: center;
  height: 440px;
  width: inherit;
  margin-left: ${(props) => `-${props.cardSize * 2 + 64}px`};
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 5vh;
  padding-left: 102px;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 480px;
   overflow: hidden;
`;
