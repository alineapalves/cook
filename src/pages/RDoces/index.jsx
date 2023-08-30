import React,{useState,useEffect} from 'react'
import Header from './../../components/Header/index';
import Footer from '../../components/Footer/index';
import styled from 'styled-components'
import api from './../../services/api'
import ListaReceitas from '../../components/ListaReceitas';

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

function RDoces() {
    const [doces, setDoces] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const url = '/RDoces';

        const params = {};
        if (search) {

            params.title_like = search

            api.get('/doces?_embed=doces', { params })
                .then((response) => {
                    setDoces(response.data)


                })

        } else {

            api.get(url)
                .then((response) => {
                    // console.log(response)
                    setDoces(response.data);
                })
        }


    }, [search]);



    return (
        <>
            <Header />
            <Container>
                {
                    doces.map(doce => (
                        
                            <ListaReceitas key={doces.id} doces={doce} />

                    ))
                

                    }

            </Container>
            <Footer />
        </>
    )
}

export default RDoces;