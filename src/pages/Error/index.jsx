import React from 'react';
import Header from './../../components/Header/index'
import Footer from './../../components/Footer/index'
import styled from 'styled-components'

const Container = styled.div`
width: 1440px auto;
height:1295px;
display:grid;
text-align:center;
background-color:#EFEEEE;
flex-direction: column;
height: 100vh;
align-items: center;
margin: 0;
`

function Error(){
    return(
        <>
        <Header/>
        <Container>
            <h1>404 - Página não encontrada</h1>
            <h1>A página que você está procurrando não existe...</h1>
        </Container>
        <Footer/>
        
        </>
    )
}

export default Error;