import { Pagination } from "@material-ui/core";
import React, { useEffect } from "react";
import ArticleAPI from "../../lib/api/article";
import ArticlePreview from "./ArticlePreview";

const ArticleList = ({ articles, authorId }) => {
  const [posts, setPosts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(0);

  // const test = await ArticleAPI.findByAuthor(authorId, page);


  return (
    <>
      <div>
        {articles.rows?.map((article) => {
          return <ArticlePreview key={article} article={article} />;
        })}

        {/* <Pagination
          total={pageCount}
          count={10}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          shape="rounded"
          onChange={handleChange}
        /> */}
      </div>
    </>
  );
};

ArticleList.getInitialProps = async (context) => {
  console.log(context)
}

export default ArticleList;
