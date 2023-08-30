import React from 'react';
import Header from './../../components/Header/index';
import Footer from '../../components/Footer/index';
import styled from 'styled-components';


const Container = styled.div`
background-image: url('https://photos.google.com/search/_tra_/photo/AF1QipOXQvv-fVAvy_KcXF70_NNII2ld77IJVfnm6QQM    ');
width: 1440px auto;
height:1295px auto; 
display:flex;
text-align:center;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: center;
margin: 0;
color: #484747;
font-family: montserrat;

`;
const Logar = styled.div`
width: 589px;
height: 471px;
background-color: #d9d9d9;
border-radius: 8px;
padding: 8px;

`

const Senha = styled.input`
background: #fff;
box-shadow: none;
color: #000;
font-size: 20px;
font-weight: 400;
border: transparent;
margin-bottom: 100px;

`

const Usuario = styled.input`
background: #fff;
box-shadow: #d9d9d9;
color: #000;
font-size: 20px;
font-weight: 400;
border: transparent;
margin: 5px;
margin-top: 20px;

`

function Login() {


    return (
        <>
            <Header />
            <Container>
                

                <Logar>
                    <h1>Login</h1>
                    <form >
                        <div>
                            <label htmlFor=''></label>
                            <br />
                            <Usuario type="text"id="title" name="title" />
                        </div>
                        <div >
                            <label htmlFor=""></label>
                            <br />
                            <Senha type="password" id="url" name="url" />
                        </div>
                        <button type="submit"> Login </button><br />
                        <a href="">Esqueceu a senha</a>


                    </form>
                </Logar>


            </Container>
            <Footer />
        </>
    )
}

export default Login;