import { useRouter } from "next/router";
import React from "react";
import UserAPI from "../../lib/api/user";
import CustomImage from "../../components/common/CustomerImage";

const Profile = ({ initialProfile }) => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const {username, bio, email, image} = initialProfile

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
            <CustomImage
                src={image}
                alt="User's profile image"
                className="user-img"
              />
              <h4>{username}</h4>
              <p>{bio}</p>
              <p>{email}</p>
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
