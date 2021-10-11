import Head from "next/head";
import React from "react";
import RegisterForm from '../../components/profile/RegisterForm'

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Please regsiter." />
      </Head>
      <RegisterForm />
    </>
  );
};

export default Register;
