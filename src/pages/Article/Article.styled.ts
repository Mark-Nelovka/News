import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../images/Arrow-more.svg";

interface IHeroStyleProps {
    bg: string
}

export const HeroSection = styled.section<IHeroStyleProps>`
background-image: url(${({ bg }) => bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 245px;
`

export const SummaryContainer = styled.div`
transform: translateY(-100px);
background: #FFFFFF;
border: 1px solid #EAEAEA;
box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
border-radius: 5px;
padding: 35px 75px 50px 75px;
margin-bottom: 35px;

`

export const SummaryTitle = styled.h1`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 24px;
line-height: 29px;
color: ${({ theme }) => theme.palette.text};
margin-bottom: 50px;
text-align: center;
`

export const SummaryText = styled.p`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.reqular};
font-size: 18px;
line-height: 150%;
color: ${({ theme }) => theme.palette.black};
`

export const ButtonBack = styled.button`
position: relative;
background-color: inherit;
margin-left: 75px;
`

export const ButtonLink = styled(Link)`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.bold};
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.palette.text};

&::before {
    content: url(${arrow});
    position: absolute;
    left: -24px;
    transform: rotate(180deg);
}
`

