import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Datafame Consulting</title>
        <meta
          name="description"
          content="Datafame vous accompagne dans la réalisation de vos projets numériques."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
