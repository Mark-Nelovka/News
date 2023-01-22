import ArticleList from "../../components/ArticleList";
import Filter from "../../components/Filter";
import { Container } from "../../styles/container.styled";

export default function HomePage() {
  return (
    <Container>
      <Filter />
      <ArticleList />
    </Container>
  );
}
