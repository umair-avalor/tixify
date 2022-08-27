import { Footer, Header } from "@components/common";
import Banner from "@components/common/Banner";
import TicketCard from "@components/common/TicketCard";
import SellTickets from "@components/SellTickets";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      <SellTickets />
      <Footer />
    </Layout>
  );
};

export default Home;
