import Head from "next/head";
import React from "react";
import styled from "@emotion/styled";
import Banner from "../components/home/Banner";


const MainContent = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const ContentContainer = styled("div")`
  width: 100%;
  @media (min-width: 768px) {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 75%;
    max-width: 75%;
  }
`;




const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>

        <meta name="description" content="Home Page." />
      </Head>
   <Banner />
   <MainContent>
     <ContentContainer>
       
     </ContentContainer>
   </MainContent>
    </>
  );
};

export default Home;
