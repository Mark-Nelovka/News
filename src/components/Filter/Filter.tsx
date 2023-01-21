import * as S from "./Filter.styled";
import searchIcon from "../../images/search-icon.svg";

export const Filter = () => {
  return (
    <S.FilterSection>
      <S.Title>Filter by keywords</S.Title>
      <S.SearchContainer>
        <S.SearchIconContainer>
          <img src={searchIcon} alt="search icon" />
        </S.SearchIconContainer>
        <S.SearchInput />
      </S.SearchContainer>
    </S.FilterSection>
  );
};
