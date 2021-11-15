import React from "react";
import UserAPI from "../../lib/api/user";
import CustomImage from "../../components/common/CustomImage";
import Maybe from "../../components/common/Maybe";

const Profile = ({ initialProfile }) => {
  const { username, bio, email, image, error } = initialProfile || [];
  return (
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
                <p>{email}</p>
              </Maybe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.getInitialProps = async ({ query: { pid } }) => {
  const initialProfile = await UserAPI.findById(pid);
  return { initialProfile };
};

export default Profile;
