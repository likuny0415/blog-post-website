import React from "react";
import useSWR from "swr";
import editorReducer from "../../lib/utils/editorReducer";
import storage from "../../lib/utils/storage";

const PublishArticleEditor = () => {
  const initialState = {
    title: "",
    description: "",
    body: "",
  };

  const [errors, setErrors] = React.useState([]);
  const [posting, dispatch] = React.useReducer(editorReducer, initialState);
  const { data: currentUser } = useSWR("user", storage);

  const handleTitle = (e) =>
    dispatch({ type: "SET_TITLE", text: e.target.value });
  const handleDescription = (e) => dispatch({type: "SET_DESCRIPTION", text: e.target.value})

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                  />
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
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
