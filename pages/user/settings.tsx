import Router from "next/router";
import useSWR from "swr";
import checkLogin from "../../lib/utils/checkLogin";
import storage from "../../lib/utils/storage";

const Settings = ({ res }) => {
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);
  if (!isLoggedIn) {
    if (res) {
      res.writeHead(302, {
        Location: "/",
      });
      res.end();
    }
    Router.push(`/`);
  }

  const handleLogout = async (e) => {
      e.preventDefault();
      window.localStorage.removeItem("user");
      
  }

  return <h1>hee</h1>;
};

export default Settings;
