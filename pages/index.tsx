import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";
import Banner from "../components/home/Banner";
import UserAPI from "../lib/api/user";
import ArticleAPI from "../lib/api/article";
import ArticlePreview from "../components/article/ArticlePreview";
import ArticlePagination from "../components/article/ArticlePagination";


const MainContent = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const ContentContainer = styled("div")`
  width: 100%;
  @media (min-width: 768px) {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 75%;
    max-width: 75%;
  }
`;




const Home = () => {
  const [articles, setArticles] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [numberPages, setNumberPages] = React.useState(10);

  const fetchArticles = async () => {
    try {
      const result = await ArticleAPI.findAll(page);
      setArticles(result?.rows);
      setNumberPages(result?.numberPages);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchArticles();
  }, [page]);

  return (
    <>
      <Head>
        <title>Home Page</title>

        <meta name="description" content="Home Page." />
      </Head>
   <Banner />
   <MainContent>
       <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div>
              <div>
                {articles?.map((article) => {
                  return <ArticlePreview key={article} article={article} />;
                })}
              </div>
              <ArticlePagination pageNumber={numberPages} setPage={setPage}/>
            </div>
          </div>
        </div>
      </div>
   </MainContent>
    </>
  );
};

// Home.getInitialProps = async ({ query: { pid } }) => {
//   const initialArticles = await ArticleAPI.findAll();
  
//   console.log(initialArticles)
//   return { initialArticles, pid };
// };

export default Home;
