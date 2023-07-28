import styled, {createGlobalStyle} from "styled-components";

export const TopbarHeight = 45;

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat','Helvetica';
  }

  a {
    color: #2C2E83;
    text-decoration: none;
  }
  a:hover {
    color: #2EAAE2;
  }
`;

export const Content = styled.section`
  margin: 10px 20px;
`;

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  form{
    width: 380px;
   // border: 1px solid red;
  }

`;

export const FormControl = styled.div`
  width: 100%;
  margin: 20px 0;
  label {
    width: 100%;
    display: block;
    text-align: center;
  }

  input, textarea, select {
    width: 100%;
    font-family: 'Montserrat';
    font-size: 1.1em ;
    border: 2px solid #2C2E83;
    padding: 10px 12px;
    text-align: center;
    border-radius: 4px;
  }
  textarea {
    text-align: left !important;
  }
  span {
    color: red;
    font-size: 0.89em;
  }
`;
