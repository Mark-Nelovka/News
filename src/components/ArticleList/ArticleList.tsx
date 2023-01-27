import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getNews } from "../../redux/news/newsOperations";
import calendar from "../../images/date-icon.svg";
import * as S from "./ArticleList.styled";
import FormateDate from "../../helpers/transformDate";

const Hightlight = (props: any) => {
  const { filter, str } = props;
  if (!filter) return str;
  const regexp = new RegExp(filter, "ig");
  const matchValue = str.match(regexp);

  if (matchValue) {
    return str.split(regexp).map((s: string, index: number, array: any) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <>
            {s}
            <span style={{ backgroundColor: "yellow" }}>{c}</span>
          </>
        );
      }
      return s;
    });
  }
  return str;
};

export const ArticleList = () => {
  const news = useAppSelector((state) => state.news.news);
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.news.filter);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const items = useMemo(() => {
    if (filter) {
      return news.filter((item) => {
        const matchValue = filter.toLowerCase();
        const { title, summary } = item;
        if (title.toLowerCase().includes(matchValue)) return true;
        if (summary.toLowerCase().includes(matchValue)) return true;
        return false;
      });
    }
    return news;
  }, [filter, news]);

  const light = useCallback(
    (str: string) => {
      return <Hightlight filter={filter} str={str} />;
    },
    [filter]
  );

  return (
    <section>
      <S.ResultTitle>
        Result: {items.length > 0 ? items.length : 0}
      </S.ResultTitle>
      <S.NewsList>
        {items.length > 0 &&
          items.map((item) => {
            const { id, imageUrl, publishedAt, title, summary } = item;
            return (
              <S.NewsItem key={id}>
                <S.ImageContainer>
                  <img
                    src={imageUrl}
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
                    <S.Date>{FormateDate(publishedAt)}</S.Date>
                  </S.DateContainer>
                  <S.TitleItem>{light(title)}</S.TitleItem>
                  <S.TextDescription>
                    {light(summary.slice(0, 100))}...
                  </S.TextDescription>
                </S.DescriptionContainer>
                <S.Button>
                  <S.ButtonLink
                    to={`/news/${id}`}
                    state={{ summary, imageUrl, title }}
                  >
                    Read more
                  </S.ButtonLink>
                </S.Button>
              </S.NewsItem>
            );
          })}
      </S.NewsList>
    </section>
  );
};
