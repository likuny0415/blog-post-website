import ArticleAPI from "../../lib/api/article";
import styled from "@emotion/styled";
import { marked } from 'marked'
import React from "react";
import ArticleMeta from "../../components/article/ArticleMeta";


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

const ArticleContentContainer = styled("div")`
  margin: 1.5rem auto 0;
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

const ArticleContentPresenter = styled("div")`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 1px;
  margin: 0 -15px;
  padding: 0 15px;
`;

const ArticleContent = styled("div")`
  width: 100%;
`;

const ArticleTagList = styled("ul")`
  display: inline-block;
  list-style: none !important;
  padding-left: 0 !important;
  margin: 0 0 1rem;
`;

const ArticleTagItem = styled("li")`
  display: inline-block !important;
  border: 1px solid #ddd;
  color: #aaa !important;
  background: 0 0 !important;
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  white-space: nowrap;
  margin-right: 3px;
  margin-bottom: 0.2rem;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
`;

const Divider = styled("hr")`
  box-sizing: content-box;
  height: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const ArticleActions = styled("div")`
  text-align: center;
  margin: 1.5rem 0 3rem;
`;

const CommentListContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const CommentListPresenter = styled("div")`
  position: relative;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 1px;
  padding: 0 15px;

  @media (min-width: 768px) {
    position: relative;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
    margin-left: 16.66667%;
  }
`;


const ArticlePage = ({ initialArticle }) => {

  const defaultArticle = {
    title: 'Article Not exist',
    body: 'Article Not exist',
    // author: {
    //   id: 'Article Not exist',
    //   username: 'Article Not exist',
    // }
  }

  const { title, body, createAt, author } = initialArticle.article || defaultArticle;
  const article = {
    title,
    body,
    createAt,
    author,
  };

  const markup = {
    __html: marked(article.body),
  };

  return (
    <ArticlePageContainer>
      <ArticleInfoContainer>
        <ArticleInfoPresenter>
          <ArticleTitle>
            <h1>{title}</h1>
            <ArticleMeta article={article} />
          </ArticleTitle>
        </ArticleInfoPresenter>
      </ArticleInfoContainer>

      <ArticleContentContainer>
        <ArticleContentPresenter className="article-content">
          <ArticleContent dangerouslySetInnerHTML={markup} />
        </ArticleContentPresenter>
        </ArticleContentContainer>

    </ArticlePageContainer>
  );
};


ArticlePage.getInitialProps = async ({ query: { pid } }) => {
  const initialArticle = await ArticleAPI.find(pid);
  return { initialArticle };
};

export default ArticlePage;
