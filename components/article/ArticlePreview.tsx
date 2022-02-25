import moment from "moment";
import React from "react";
import { usePageDispatch } from "../../lib/context/PageContext";
import CustomImage from "../common/CustomImage";
import CustomLink from "../common/CustomLink";

const ArticlePreview = ({ article }) => {
  const setPage = usePageDispatch();
  if (!article) return;

  return (
    <div className="article-preview" style={{ padding: "1.5rem 0.5rem" }}>
      <div className="article-meta">
        <CustomLink href="/profile/[pid]" as={`/profile/${article.authorId}`}>
          <CustomImage src={article.image} alt="author's profile image" />
        </CustomLink>

        <div className="info">
          <CustomLink
            href="/profile/[pid]"
            as={`/profile/${article.authorId}`}
            className="author"
          >
            <span onClick={() => setPage(0)}>{article.username}</span>
          </CustomLink>
          <span className="date">
            {moment(article.createAt).format("YYYY-MM-DD HH:mm")}
          </span>
        </div>
        
      </div>
      <CustomLink
          href="/article/[pid]"
          as={`/article/${article.articleId}`}
          className="preview-link"
        >
          <h1>{article.title}</h1>
          <p>{article.description}...</p>
          
          <span>Read more...</span>
        </CustomLink>
    </div>
  );
};

export default ArticlePreview;
