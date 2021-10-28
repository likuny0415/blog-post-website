import ArticleAPI from "../../lib/api/article";
import styled from "@emotion/styled";
import { title } from "process";
import { ArticleType } from "../../lib/types/articleType";

const ArticlePageContainer = styled("div")``;

const ArticleInfoContainer = styled("div")`
  color: #fff;
  background: #333;
  margin-bottom: 2rem;
  padding: 2rem 0;
`;

const ArticleInfoPresenter = styled("div")`
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 544px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 940px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const ArticleTitle = styled("h1")`
  margin: 0;
  font-size: 2.8rem;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
`;

interface ArticlePageProps {
  article: ArticleType;
  pid: string;
}

const ArticlePage = ({ initialArticle }) => {

  // const { title, body, createAt, author } = initialArticle.article;
  // const article = {
  //   title,
  //   body,
  //   createAt,
  //   author,
  // };

  return (
    <ArticlePageContainer>
      <ArticleInfoContainer>
        <ArticleInfoPresenter>
          <ArticleTitle>
            <h1>{initialArticle.article.title}</h1>
          </ArticleTitle>
        </ArticleInfoPresenter>
      </ArticleInfoContainer>
      <div className="container-fluid align-middle">
        {/* <h1>Article title is {article.title}</h1> */}

        {/* <h4>
          {createAt}
          {author}
        </h4>
        <p>{body}</p> */}

        <div>12312312</div>
      </div>
    </ArticlePageContainer>
  );
};


ArticlePage.getInitialProps = async ({ query: { pid } }) => {
  const initialArticle = await ArticleAPI.get(pid);
  return { initialArticle };
};

export default ArticlePage;
