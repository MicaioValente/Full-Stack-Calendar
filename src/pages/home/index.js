import React from 'react'
import styled from 'styled-components';






export default function Home() {
  return (
    <Content>
      <h1>Olá</h1>
    </Content>
  );
}



const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`