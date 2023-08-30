import React from 'react';
import Header from './../../components/Header/index';
import Footer from '../../components/Footer/index';
import styled from 'styled-components'

const Container = styled.div`
width: 1440px auto;
height:1295px;
display:grid;
text-align:center;
background-color:#EFEEEE;
flex-direction: column;

align-items: center;
margin: 0;
`

function Home() {
  return (
    <>
    <Header/>
    <Container>

      
        <h1>Home</h1>
        <h2>Só falta o Resto</h2>
      
    </Container>
    <Footer/>
        </>
    )
}

export default Home;