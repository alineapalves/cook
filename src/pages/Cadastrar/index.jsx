import React from "react";
import styled from "styled-components";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";



const Container = styled.div`
background-image: url("");
width: 1440px auto;
height:1295px auto; 
display:flex;
text-align:center;
flex-direction: column;
height: 100vh;
align-items: center;

justify-content: space-between auto;
margin: 0;
`;
const Cad = styled.div`
width: 589px;
height: 471px;
background-color: #EFEEEE;
border-radius: 8px;


`;


function Cadastrar() {



    return (
        <>
        <Header />
            <Container>
                

                <Cad>
                    <h1>Cadastrar</h1>
                    <form >
                        <div >
                            <label htmlFor=""></label>
                            
                            <input type="text" id="title" name="title"placeholder="Nome" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            
                            <input type="text" id="title" name="title" placeholder="Email" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            
                            <input type="text" id="title" name="title" placeholder="Telecone"/>
                        </div>
                        <div >
                            <label htmlFor=""></label>
                        
                            <input type="password" id="url" name="url" placeholder="Senha"/>
                        </div>
                        <button type="submit"> Logar </button><br />
                        <a href="">Esqueceu a senha</a>


                    </form>
                </Cad>


            </Container>
            <Footer />
        </>

        
    )
}


export default Cadastrar;