import React from 'react'
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div`

`

const NewComment = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`

const Avatar = styled.img`
    height : 50px;
    width : 50px;
    border-radius : 50%;
`

const Input = styled.input`
    border : none;
    border-bottom : 1px solid ${({theme})=>theme.soft};
    background-color : transparent;
    outline : none;
    padding : 5px;
    font-size : 14px;
    width : 100%;
    margin-bottom : -15px;
`

function Comments() {
  return (
    <Container>
        <NewComment>
            <Avatar src='https://images.pexels.com/photos/10234471/pexels-photo-10234471.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <Input placeholder='Add a Comment..'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments

