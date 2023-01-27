import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { INews } from "../../interfaces/news";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getNewsById } from "../../redux/news/newsOperations";
import { Container } from "../../styles/container.styled";
import * as S from "./Article.styled";

export default function ArticlePage() {
  const [item, setItem] = useState<INews[]>([]);
  const { state, pathname } = useLocation();
  const dispatch = useAppDispatch();
  const itemStore = useAppSelector((state) => state.news.news);

  useEffect(() => {
    if (!state && item.length === 0) {
      dispatch(getNewsById(pathname.replace(/[^0-9]/g, "")));
      setItem(itemStore);
      return;
    }
    if (item.length === 0) {
      setItem([state]);
    }
  }, [state, pathname, dispatch, item, itemStore]);

  return (
    <>
      {item.length > 0 && (
        <>
          <S.HeroSection bg={item[0].imageUrl} />
          <Container>
            <S.SummaryContainer>
              <S.SummaryTitle>{item[0].title}</S.SummaryTitle>
              <S.SummaryText>{item[0].summary}</S.SummaryText>
            </S.SummaryContainer>
            <S.ButtonBack>
              <S.ButtonLink to="/news">Back to homepage</S.ButtonLink>
            </S.ButtonBack>
          </Container>
        </>
      )}
    </>
  );
}
