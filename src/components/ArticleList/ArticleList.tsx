import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getNews } from "../../redux/news/newsOperations";
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
    </section>
  );
};
