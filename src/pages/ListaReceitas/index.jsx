import React from 'react';
import Header from './../../components/Header/index';
import Footer from '../../components/Footer/index';
import styled from 'styled-components'

const Container = styled.div`
width: 1440px auto;
height:1295px auto; 
display:grid;
text-align:center;
background-color:#EFEEEE;
flex-direction: column;
height: 100vh;
align-items: center;
margin: 0;
`

function ListaReceitas() {
  return (
    <>
    <Header/>
    <Container>

      
        <h1>Lista de Receitas</h1>
        
      
    </Container>
    <Footer/>
        </>
    )
}

export default ListaReceitas;