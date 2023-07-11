import ArticleList from "../../components/ArticleList";
import Filter from "../../components/Filter";
import { Container } from "../../styles/container.styled";

function qwe(arr: Array<number>): any {
  let result: any = {};
  arr.forEach(function (a) {
    if (a) {
      result[a] = result[a] + 1 || 1;
    }
  });
  const res = Object.values(result).sort();
  return res[res.length - 1];
}
console.log(qwe([0, 1]));
export default function HomePage() {
  // const arr = [2, 2, 2];
  // qwe(arr);
  return (
    <Container>
      <Filter />
      <ArticleList />
    </Container>
  );
}
