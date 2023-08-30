import React from 'react'
import styled from 'styled-components'

const Thumbnail = styled.img`
width: auto;
height: 100%;
vertical-align: middle;
float: left;
margin-right: 10px;
`
const Nome = styled.div`
  margin-bottom: 5px;`

const Tempo = styled.div`
background-color:red;
`


  const Title = styled.div`
  font-weight: 400;
  max-width:500px
  margin-bottom: 5px;
  color: green;
  
  
  
  `
  const ItemLink = styled.a`
text-decoration: none;
`


export default function doces({doces}) {

    return (
      <>
        <ItemLink hrer={doces.url} target="_blank">
          <ItemContainer>
            <a href={ doces.image} target="_blank" ><Thumbnail src={doces.image} /></a>
            <Title>{doces.title}</Title>
            <Nome>{doces.price}</Nome>
            <Tempo>{doces.tempo}</Tempo>
          </ItemContainer>
        </ItemLink>
  
      </>
    )
  }