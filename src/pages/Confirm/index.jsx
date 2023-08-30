import React from 'react';
import Header from './../../components/Header/index';
import Footer from './../../components/Footer/index';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
display:grid;
flex-direction: column;
height: 100vh;
align-items: center;
margin: 0;


`;


function Confirm() {

    return (
        <>
    <Header />
        <Container>

            <h1>Cadastro Efetuado com Sucesso</h1>
            

        </Container>
    <Footer />
    </>
    )
}

export default Confirm;