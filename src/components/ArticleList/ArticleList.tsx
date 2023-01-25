import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getNews } from "../../redux/news/newsOperations";
import calendar from "../../images/date-icon.svg";
import arrow from "../../images/Arrow-more.svg";
import * as S from "./ArticleList.styled";
import FormateDate from "../../helpers/transformDate";

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
                  <img
                    src={item.imageUrl}
                    width="400"
                    height="217"
                    alt="visual news"
                  />
                </S.ImageContainer>
                <S.DescriptionContainer>
                  <S.DateContainer>
                    <S.DateIconContainer>
                      <img src={calendar} alt="calendar icon" />
                    </S.DateIconContainer>
                    <S.Date>{FormateDate(item.publishedAt)}</S.Date>
                  </S.DateContainer>
                  <S.TitleItem>{item.title}</S.TitleItem>
                  <S.TextDescription>
                    {item.summary.slice(0, 100)}...
                  </S.TextDescription>
                </S.DescriptionContainer>
                <S.Button>
                  <S.ButtonLink to={`/news/${item.id}`}>Read more</S.ButtonLink>
                </S.Button>
              </S.NewsItem>
            );
          })}
      </S.NewsList>
    </section>
  );
};
