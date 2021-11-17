import Router from "next/router";
import React from "react";
import useSWR from "swr";
import ListErrors from "../../components/common/ListErrors";
import ArticleAPI from "../../lib/api/article";
import storage from "../../lib/utils/storage";

const PublishArticleEditor = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [body, setBody] = React.useState("");
  const [authorId, setAuthorId] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const { data: currentUser } = useSWR("user", storage);

  const handleTitle = React.useCallback((e) => setTitle(e.target.value), []);

  const handleDescription = React.useCallback(
    (e) => setDescription(e.target.value),
    []
  );

  const handleBody = React.useCallback((e) => setBody(e.target.value), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const authorId = JSON.parse(localStorage.getItem("user")).id;
      setAuthorId(authorId);

      const { data } = await ArticleAPI.create(
        authorId,
        body,
        title,
        description
      );

      if (data.error) {
        setErrors(data.error);
      }

      setLoading(false);

      Router.push("/");
      // const { data } = await
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ListErrors errors={errors} />
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    value={title}
                    onChange={handleTitle}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    value={description}
                    onChange={handleDescription}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (support markdown)"
                    value={body}
                    onChange={handleBody}
                  />
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishArticleEditor;
