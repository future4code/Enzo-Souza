import styled, { isStyledComponent , keyframes } from "styled-components";


export const ProfileCardContainer = styled.div`
display: flex;
flex-direction: column;
border: 4px solid #2C5282;
border-radius: 10px;
width: 25vw;
padding: 14px;
font-family: Helvetica;
margin-top: 16px;
line-height: 25px;
aling-items: center;
padding: 20px;
margin: 20px;
heigth: 80vh;
`

export const ProfilePicture = styled.img`
width: 25vw;

`

export const ProfileInfo = styled.div`
  padding: 0 16px;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

export const UserName = styled.div`
	font-weight: bold;
	font-size: 24px;
`

export const UserAge = styled.div`
  margin-left: 10px;
	font-size: 20px;
`

export const UserDescription = styled.p`
  margin-top: 5px;
`
