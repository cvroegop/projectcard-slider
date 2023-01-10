import styled from "styled-components";

export const ArrowContainer = styled.div`
  display: flex;
  padding-left: 4px;
`;

export const CardContainer = styled.div<{
  i: number;
  position: number;
  visible: boolean;
  cardSize: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: ${(props) => (props.i % 2 === 0 ? "#fafae7" : "#FFF")};
  padding: 16px 0px 8px 0px;
  width: 70vw;
  height: 55vh;
  max-width: 20rem;
  max-height: 27rem;
  border-radius: 10px;
  transition: all 0.3s;
  box-shadow: 4px 13px 29px 2px rgb(0 0 0 / 10%);
  transform: ${(props) =>
    `translateX(${props.position * (props.cardSize + 32)}px)`};
  opacity: ${(props) => `${props.visible ? 1 : 0}`};
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0px;
  height: 50%;
  justify-content: space-between;
`;

export const ImgContainer = styled.div<{ img: string }>`
  background-image: ${(props) => `url(${require(`images/${props.img}`)});`}
  background-size: cover;
  width: 90%;
  height: 218px;
  max-height: 50%;
  border-radius: 10px;
`;

export const ReadMore = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  align-items: center;
  height: 40px;
  &:hover {
    text-decoration: underline;
  }
`;

export const SummaryContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const TitleAndBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
