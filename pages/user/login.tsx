import LoginForm from "../../components/profile/LoginForm";
import Head from "next/head";
import NavBar from "../../components/common/Navbar";

const Login = () => (
  <>
    <Head>
      <title>Login</title>
      <meta
        name="description"
        content="Please login."
      />
    </Head>
    
    <LoginForm />
  </>
);

export default Login;
