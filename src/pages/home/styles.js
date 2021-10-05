import styled from 'styled-components';



export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#3D2C8D, #916BBF);
    h1{
      color: #f5f5f5;
      font-family: 'Oswald', sans-serif;
    }
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #3D2C8D;
      font-size: 17px;
      color: #f5f5f5;
      font-family: 'Oswald', sans-serif;
      width: 100px;
      height: 50px;
      border-radius: 50px;
      box-shadow: 0 0 20px #916bbf;
      cursor: pointer;
    }
    a{
      text-decoration: none;
      color: #f5f5f5;
    }
`