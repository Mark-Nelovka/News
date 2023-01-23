import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getNews } from "../../redux/news/newsOperations";
import calendar from "../../images/date-icon.svg";
import * as S from "./ArticleList.styled";

export const ArticleList = () => {
  const news = useAppSelector((state) => state.news.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <section>
      <S.ResultTitle>Result: {news.length > 0 ? news.length : 0}</S.ResultTitle>
      <S.NewsList>
        {news.length > 0 &&
          news.map((item) => {
            return (
              <S.NewsItem key={item.id}>
                <S.ImageContainer>
                  <img src={item.imageUrl} alt="visual news" />
                </S.ImageContainer>
                <S.DescriptionContainer>
                  <S.DateContainer>
                    <S.DateIconContainer>
                      <img src={calendar} alt="calendar icon" />
                    </S.DateIconContainer>
                    <S.Date>{item.publishedAt}</S.Date>
                  </S.DateContainer>
                  <S.TitleItem>{item.title}</S.TitleItem>
                  <S.TitleDescription>{item.summary}</S.TitleDescription>
                </S.DescriptionContainer>
              </S.NewsItem>
            );
          })}
      </S.NewsList>
    </section>
  );
};
