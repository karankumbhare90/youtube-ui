import React from 'react'
// import Comment from './Comment'
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    gap : 20px;
    margin : 30px 0;
`

const Avatar = styled.img`
    height : 50px;
    width : 50px;
    border-radius : 50%;
`

const Details = styled.div`
    display : flex;
    flex-direction : column;
    gap : 10px; 
`

const Name = styled.span`
    font-size : 13px;
    font-weight : 600;
    color : ${({theme})=> theme.textSoft};
`
const Date = styled.span`
    font-size : 12px;
    font-weight : 500;
    opacity : .7;
    color  : ${({theme})=> theme.textSoft};
    margin-left : 5px;
`
const Text = styled.span`
    font-size : 14px;
    color : ${({theme})=> theme.text};
`

function Comment() {
  return (
    <Container>
      <Avatar src='https://images.pexels.com/photos/10234471/pexels-photo-10234471.jpeg?auto=compress&cs=tinysrgb&w=600' />
      <Details>
        <Name>Karan Kumbhare <Date>3 Day ago</Date></Name>                
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, ipsam?</Text>
      </Details>
    </Container>
  )
}

export default Comment