import styled from "styled-components";

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