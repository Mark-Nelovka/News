import styled from "styled-components";

export const FilterSection = styled.section`
padding-top: 50px;
margin-bottom: 40px;
`

export const Title = styled.p`
font-family: ${({theme}) => theme.fonts.main};
font-style: ${({theme}) => theme.fontStyle.normal};
font-weight: ${({theme}) => theme.fontWeight.semiBold};
font-size: 16px;
line-height: 20px;
color: ${({ theme }) => theme.palette.text};
margin-bottom: 10px;
`

export const SearchContainer = styled.div`
position: relative;
width: 100%;
display: flex;
align-items: center;
`

export const SearchIconContainer = styled.label.attrs({
    htmlFor: "search"
})`
position: absolute;
left: 20px;
`

export const SearchInput = styled.input.attrs({
    placeholder: "The most successful IT companies in 2020",
    id: "search"
})`
width: 50%;
padding: 13px 60px;
`