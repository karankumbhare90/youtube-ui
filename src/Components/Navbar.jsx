import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'

const Container = styled.div`
  position : sticky;
  top : 0;
  background-color : ${({theme}) => theme.bgLighter};
  height : 56px;
`;

const Wrapper = styled.div`
  display : flex;
  align-items : center;
  justify-content : flex-end;
  height : 100%;
  padding : 0 20px; 
  position : relative;
`;

const SearchBar = styled.div`
  width : 40%;
  position : absolute;
  left : 0;
  right : 0;
  margin : auto;
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding : 5px;
  border : 1px solid #ccc;

`;
const Input = styled.input`
  border : none;
  outline : none;
  padding-right : 70%;
  background-color : transparent;
`;

const Button = styled.button`
    padding : 5px 15px;
    background-color : transparent;
    border : 1px solid #3ae6ff;
    color : #3ae6ff;
    border-radius : 3px;
    font-weight : 500; 
    cursor : pointer;
    display : flex;
    align-items : center;
    gap : 5px;
`;

function Navbar() {
  return (
    <Container>
        <Wrapper>
          <SearchBar>
            <Input placeholder='Search'/>
            <SearchOutlinedIcon/>
          </SearchBar>
          <Link to='signin' style={{textDecoration:"none"}}><Button> <AccountCircleOutlinedIcon/> SIGN IN</Button></Link>
        </Wrapper>
    </Container>
  )
}

export default Navbar
