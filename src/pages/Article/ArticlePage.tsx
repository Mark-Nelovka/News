import { useLocation } from "react-router-dom";
import { Container } from "../../styles/container.styled";
import * as S from "./Article.styled";

export default function ArticlePage() {
  const { state } = useLocation();
  return (
    <>
      <S.HeroSection bg={state.imageUrl} />
      <Container>
        <S.SummaryContainer>
          <S.SummaryTitle>{state.title}</S.SummaryTitle>
          <S.SummaryText>{state.summary}</S.SummaryText>
        </S.SummaryContainer>
        <S.ButtonBack>
          <S.ButtonLink to="/news">Back to homepage</S.ButtonLink>
        </S.ButtonBack>
      </Container>
    </>
  );
}
