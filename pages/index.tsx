import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
  IconButton,
  Box,
  
} from "@material-ui/core";
import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";
import NavBar from "../components/common/Navbar";


const IndexPageContainer = styled("div")``;

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>

        <meta name="description" content="Home Page." />
      </Head>
      <NavBar />
    
    </>
  );
};

export default Home;
