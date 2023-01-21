import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import ErrorPage from "./pages/Error/ErrorPage";
const ArticlePage = lazy(
  () =>
    import("./pages/Article/ArticlePage" /* webpackChunkName: "ArticlePage" */)
);

function App() {
  return (
    <>
      <main>
        <Suspense fallback={"Loader..."}>
          <Routes>
            <Route path="/news" element={<HomePage />} />
            <Route path="/news/:news" element={<ArticlePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
