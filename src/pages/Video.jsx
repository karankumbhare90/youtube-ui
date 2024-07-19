import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import styled from 'styled-components'
import Card from '../Components/Card'
import Comments from '../Components/Comments';

const Container = styled.div`
  display : flex;
`

const Content = styled.div`
  flex : 5;
`

const VideoWrapper = styled.div``

const Title = styled.h1`
  font-size : 18px;
  font-weight : 400;
  margin-top : 20px;
  margin-bottom : 10px;
  color : ${({theme})=> theme.text}
`

const Details = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-between;
  
`

const Info = styled.span`
  color : ${({theme})=> theme.textSoft}
`

const Buttons = styled.div`
  display : flex;
  gap : 20px;
  color : ${({theme})=> theme.text}
`
const Button = styled.div`
  display : flex;
  align-items : center;
  gap : 5px;
  cursor : pointer;
`

const Hr = styled.hr`
  border : 0.5px solid ${({theme}) => theme.soft};
  margin : 15px 0px;
`

const Recommendation = styled.div`
  flex : 2;
`

const Channel = styled.div`
    display : flex;
    justify-content : space-between;
`

const ChannelInfo = styled.div`
  display : flex;
  gap : 20px;
`

const Image = styled.img`
  width : 50px;
  height : 50px;
  border-radius : 50%;
`

const ChannelDetails = styled.div`
  display : flex;
  flex-direction : column;
  color : ${({theme})=> theme.text}
`

const ChannelName = styled.span`
  font-weight : 500; 
`

const ChannelCounter = styled.span`
  margin-top : 5px;
  margin-bottom : 20px;
  color : ${({theme})=> theme.textSoft};
  font-size : 20px;
`

const Description = styled.p`
  font-size : 14px;
`


const SubscribeButton = styled.button`
  background-color : #cc1a00;
  font-weight : 500;
  color : #fff;
  border : none;
  border-radius : 3px;
  height : max-content;
  padding : 12px 20px;
  cursor : pointer;
`

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe 
          width="100%" 
          height="720" 
          src="https://www.youtube.com/embed/Nnop2walGmM?si=Z3D74QX2jPrpxm2V" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Tum Se</Title>
        <Details>
        <Info>1M views • 1 Day ago</Info>
        <Buttons>
          <Button><ThumbUpOutlinedIcon/>Like</Button>
          <Button><ThumbDownOffAltOutlinedIcon/>Disike</Button>
          <Button><ReplyOutlinedIcon/>Share</Button>
          <Button><AddTaskOutlinedIcon/>Save</Button>
        </Buttons>
        </Details>
        <Hr/>

        <Channel>
          <ChannelInfo>
            <Image src='https://images.pexels.com/photos/10234471/pexels-photo-10234471.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <ChannelDetails>
              <ChannelName>Karan Kumbhare</ChannelName>
              <ChannelCounter>1M Subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur.</Description>
            </ChannelDetails>
          </ChannelInfo>
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video
