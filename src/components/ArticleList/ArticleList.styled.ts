import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../images/Arrow-more.svg";

export const ResultTitle = styled.div`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.semiBold};
font-size: 16px;
line-height: 20px;
color: ${({ theme }) => theme.palette.text};
padding: 5px 0px;
border-bottom: 1px solid #EAEAEA;
margin-bottom: 45px;
`

export const NewsList = styled.ul`
display: flex;
flex-wrap: wrap;
margin-right: -45px;
margin-bottom: -45px;
`

export const NewsItem = styled.li`
max-width: 400px;
/* max-height: 530px; */
margin-right: 45px;
margin-bottom: 45px;
border: 1px solid #EAEAEA;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
border-radius: 5px;
padding-bottom: 25px;
`

export const ImageContainer = styled.span`
display: inline-block;
`

export const DescriptionContainer = styled.div`
padding: 25px 25px 0px 25px;
/* margin-bottom: auto; */
`

export const DateContainer = styled.div`
display: flex;
align-items: center;
position: relative;
margin-bottom: 24px;
`

export const DateIconContainer = styled.span`
margin-right: 8px;
`

export const Date = styled.span`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 14px;
line-height: 150%;
color: ${({ theme }) => theme.palette.text};
opacity: 0.6;
`

export const TitleItem = styled.p`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 24px;
line-height: 29px;
color: ${({ theme }) => theme.palette.text};
margin-bottom: 20px;
`

export const TextDescription = styled.p`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.palette.text};
`

export const Button = styled.button`
position: relative;
display: flex;
align-items: center;
background-color: inherit;
margin-left: 25px;
margin-top: 20px;
`

export const ButtonLink = styled(Link)`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.bold};
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.palette.text};
padding: 5px 5px 5px 0px;
&::after {
    content: url(${arrow});
    position: absolute;
    right: -12px;
}
`