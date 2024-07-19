import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Container = styled.div`
    flex : 1;
    background : ${({theme}) => theme.bgLighter};
    height : 100vh;
    color : ${({theme}) => theme.text};
    font-size : 14px;
    position : sticky;
    top : 0;
`

const Wrapper = styled.div`
    padding : 10px 10px;
`

const Logo = styled.div`
    display : flex;
    align-items : center;
    gap : 7px;
    font-weight : 500;
    margin-bottom : 25px;
`

const Img = styled.img`
    height : 30px;
`

const Item = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
    padding : 7.5px 0;
    cursor : pointer;
    // font-size : medium;

    &:hover{
        background-color : ${({theme})=>theme.soft}
    }
`

const Hr = styled.hr`
    margin : 15px 0;
    border : 0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div``;
const Button = styled.button`
    padding : 5px 15px;
    background-color : transparent;
    border : 1px solid #3ae6ff;
    color : #3ae6ff;
    border-radius : 3px;
    font-weight : 500;
    margin-top : 10px;
    cursor : pointer;
    display : flex;
    align-items : center;
    gap : 5px;
`;

const Title = styled.h2`
    font-size : 14px;
    font-weight : 500;
    color : #aaaaaa;
    margin-bottom : 20px; 
`


function Menu({darkMode, setDarkMode}) {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
                <Img src={logo}/> Youtube
            </Logo>
        </Link>
        <Item><HomeIcon/> Home</Item>
        <Item><ExploreOutlinedIcon/> Explore</Item>
        <Item><SubscriptionsOutlinedIcon/> Subscription</Item>
        <Hr/>
        <Item><VideoLibraryOutlinedIcon/> Library</Item>
        <Item><RestoreOutlinedIcon/> History</Item>
        <Hr/>
        <Login>
            Sign in to like videos, comments, Subscription.
            <Link to='signin' style={{textDecoration:"none"}}><Button> <AccountCircleOutlinedIcon/> SIGN IN</Button></Link>
        </Login>
        <Hr/>
        <Title>BEST OF LAMATURE</Title>
        <Item><LibraryMusicOutlinedIcon/> Music</Item>
        <Item><SportsBasketballOutlinedIcon/>Sport</Item>
        <Item><SportsEsportsOutlinedIcon/>Gaming</Item>
        <Item><MovieCreationOutlinedIcon/>Movies</Item>
        <Item><ArticleOutlinedIcon/>News</Item>
        <Item><LiveTvOutlinedIcon/>Live</Item>
        <Hr/>
        <Item><SettingsOutlinedIcon/>Setting</Item>
        <Item><FlagOutlinedIcon/>Report</Item>
        <Item><HelpOutlineOutlinedIcon/>Help</Item>
        <Item onClick={()=>setDarkMode(!darkMode)}><SettingsBrightnessOutlinedIcon/>{darkMode ? "Light" : "Dark" } Mode</Item>
        
      </Wrapper>
    </Container>
  )
}

export default Menu
