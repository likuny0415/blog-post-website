import React from "react";
import UserAPI from "../../lib/api/user";
import CustomImage from "../../components/common/CustomImage";
import Maybe from "../../components/common/Maybe";
import ArticleList from "../../components/article/ArticleList";
import ArticleAPI from "../../lib/api/article";
import ArticlePreview from "../../components/article/ArticlePreview";
import { Pagination } from "@material-ui/core";
import ArticlePagination from "../../components/article/ArticlePagination";
import Head from "next/head";

const Profile = ({ initialProfile, pid }) => {
  const [articles, setArticles] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [numberPages, setNumberPages] = React.useState(10);

  const { username, bio, email, image, error } = initialProfile || [];

  const fetchArticles = async () => {
    try {
      const result = await ArticleAPI.findByAuthor(pid, page);
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
        <title>{username}</title>
        <meta content="Post Page" key="title" />
      </Head>
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Maybe test={error}>
                <h1>User does not exist</h1>
              </Maybe>
              <Maybe test={!error}>
                <CustomImage
                  src={image}
                  alt="User's profile image"
                  className="user-img"
                />
                <h4>{username}</h4>
                <p>{bio}</p>
                {/* <p>{email}</p> */}
              </Maybe>
            </div>
          </div>
        </div>
      </div>

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
    </div>
    </>
  );
};

Profile.getInitialProps = async ({ query: { pid } }) => {
  const initialProfile = await UserAPI.findById(pid);
  // const articles = await ArticleAPI.findByAuthor(pid);
  console.log(initialProfile);
  return { initialProfile, pid };
};

export default Profile;
