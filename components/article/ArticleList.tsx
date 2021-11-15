import React from "react";
import ArticlePreview from "./ArticlePreview";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.rows?.map((article) => {
        return <ArticlePreview article={article} />;
      })}
    </>
  );
};

export default ArticleList;
