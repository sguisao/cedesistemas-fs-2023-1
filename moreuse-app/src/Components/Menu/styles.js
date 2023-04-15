import styled from "styled-components";

export const MenuContainer = styled.section`
  border: 4px solid #2EAAE2;
  width: 300px;
  position: fixed;
  top:0;
  background-color: #2C2E83;
  height: 100%;
  display: none;/*para mostrar el menú o ocultarlo, es temporal */
`;

export const MenuItemsWrapper = styled.ul`
  padding: 20px 15px;

  a {
    color: #fff;
    text-decoration: none;
    &:hover{
      color: #2EAAE2;
    }
  }

  li {
    list-style: none;
    margin-top: 10px;
  }
`;

export const MenuCloseWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding:20px;

  svg{
    color: #fff;
    font-size: 1.3em;
    cursor: pointer;
    &:hover{
      color: #2EAAE2;
    }
  }
`;
