import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width : ${(props)=> props.type !== "sm" && "360px"};;
    margin-bottom : ${(props)=> props.type === "sm" ? "10px" : "45px"};
    cursor : pointer;
    padding-left : 20px;
    display : ${(props)=> props.type === "sm" && "flex"};
    gap : 10px;
`

const Image = styled.img`
    width : 100%;
    object-fit : cover;
    height : ${(props)=> props.type === "sm" ? "120px" : "202px"};
    background-color : #999;
    flex : 1;
`

const Details = styled.div`
    display : flex;
    margin-top : ${(props)=> props.type !== "sm" && "16px"};
    flex : 1;
    gap : 12px;
`

const ChannelImage = styled.img`
    height : 36px;
    width : 36px;
    border-radius : 50%;
    background-color : #999;
    display : ${(props) => props.type === "sm" && "none"};
`

const Texts = styled.div``
const Title = styled.h1`
    font-size : 16px;
    font-weight : 500;
    color : ${({theme})=> theme.text}
`
const ChannelName = styled.h2`
    font-size : 14px;
    color : ${({theme})=> theme.textSoft};
    margin : 8px 0px;

`
const Info = styled.div`
  font-size : 14px;
  color : ${({theme})=> theme.textSoft};
`


function Card({type}) {
  return (
    <Link to="/video/test" style={{textDecoration : "none"}}>
    <Container type={type}>
      <Image type={type} src='https://images.pexels.com/photos/4386283/pexels-photo-4386283.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <Details type={type}>
        <ChannelImage type={type} src='https://images.pexels.com/photos/10234471/pexels-photo-10234471.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        <Texts>
            <Title>Testing Video</Title>
            <ChannelName>Karan Kumbhare</ChannelName>
            <Info>1M views • 1 Day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}

export default Card
