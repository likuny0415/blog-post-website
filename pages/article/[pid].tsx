import ArticleAPI from "../../lib/api/article";

const ArticlePage = ({ initialArticle }) => {
  const { title, body, createAt, author } = initialArticle;
  return (
    <div>
      <h1>{title}</h1>
      <h4>
        {createAt}
        {author}
      </h4>
      <p>{body}</p>

      <div>12312312</div>
    </div>
  );
};

ArticlePage.getInitialProps = async ({ query: { pid } }) => {
  const initialArticle = await ArticleAPI.find(pid);
  return { initialArticle };
};

export default ArticlePage;
