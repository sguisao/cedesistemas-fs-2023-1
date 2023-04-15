import styled from "styled-components";

export const WearItemContainer = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction:column;
  width: 210px;
  padding: 5px;
  align-items: center;/*Alineación horizontal*/
  margin: 10px 0;

  h3 {
    margin: 10px 0;
  };

  h5 {
    margin: 0;
  }

  &:hover{
    background-color:#f2f2f2;
    cursor: pointer;
  }
`;

export const WearItemImage = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

