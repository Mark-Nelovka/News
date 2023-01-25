import * as S from "./Filter.styled";
import searchIcon from "../../images/search-icon.svg";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { filter } from "../../redux/news/newsOperations";

export const Filter = () => {
  // const [filter, setFilter] = useState("");
  const filterValue = useAppSelector((state) => state.news.filter);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(filter(value));
  };

  return (
    <S.FilterSection>
      <S.Title>Filter by keywords</S.Title>
      <S.SearchContainer>
        <S.SearchIconContainer>
          <img src={searchIcon} alt="search icon" />
        </S.SearchIconContainer>
        <S.SearchInput value={filterValue} onChange={handleChange} />
      </S.SearchContainer>
    </S.FilterSection>
  );
};
