
import React from "react";
import useSWR from "swr";
import Router from "next/router";
import UserAPI from "../../lib/api/user";
import checkLogin from "../../lib/utils/checkLogin";
import storage from "../../lib/utils/storage";
import ListErrors from "../common/ListErrors";

const SettingsForm = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [userInfo, setUserInfo] = React.useState({
    image: "",
    username: "",
    bio: "",
    email: "",
    password: "",
  });

  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);

  React.useEffect(() => {
    if (!isLoggedIn) return;
    setUserInfo({ ...userInfo, ...currentUser });
  }, []);

  const updateState = (field) => (e) => {
    const state = userInfo;
    const newState = { ...state, [field]: e.target.value };
    setUserInfo(newState);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const authorId = JSON.parse(localStorage.getItem("user")).id;
      setLoading(false);
      console.log(authorId);
      const { data } = await UserAPI.update(
        authorId,
        userInfo.bio,
        userInfo.password,
        userInfo.image
      );

      if (data?.error) {
        setErrors(data.error);
      }

      if (data?.user) {
        window.localStorage.setItem("user", JSON.stringify(data.user));
        Router.push('/')
      }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <React.Fragment>
      <ListErrors errors={errors} />
      <form onSubmit={submitForm}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="URL of profile picture"
              value={userInfo.image}
              onChange={updateState("image")}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
              value={userInfo.username}
              onChange={updateState("username")}
            />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows={8}
              placeholder="Short bio about you"
              value={userInfo.bio}
              onChange={updateState("bio")}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={updateState("email")}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="New Password"
              value={userInfo.password}
              onChange={updateState("password")}
            />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={isLoading}
          >
            Update Settings
          </button>
        </fieldset>
      </form>
    </React.Fragment>
  );
};

export default SettingsForm;
