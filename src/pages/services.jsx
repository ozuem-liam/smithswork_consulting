import Head from "next/head";
import Image from "next/image";
import Navbar from "@components/globals/Navbar";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import PageLayout from "@components/globals/PageLayout";
import CustomCard from "@components/general/CustomCard";
import CustomPageIntro from "@components/general/CustomPageIntro";
// const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>Smithswork Consulting | Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <CustomPageIntro
          image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          title="BUSINESS DEVELOPMENT"
          descriptions={["We specialize in:"]}
        />
        <div className="p-2">
          <CustomPageIntro
            // image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            title="People"
            descriptions={[
              "People Management: People includes all stakeholders in the operating & internal environment",
              "Current & future recruitment planning.",
            ]}
          />
          <CustomPageIntro
            // image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            title="Process"
            descriptions={[
              "Project coordination.",
              "Business Process Improvement",
            ]}
          />
          <CustomPageIntro
            // image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            title="Product"
            descriptions={["Product development.", "Product management"]}
          />
        </div>
        <CustomPageIntro
          image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          title="INSURANCE"
          descriptions={[
            "We carry most of the preferred carries including Chubb, Selective, Cincinatti, Travelers, Progressive, Nationwide, Safeco and a host of others. We also guide our customers with Risk management strategies that help minimize their risks.",
          ]}
          listTitle="We specialize in:"
          lists={[
            "Personal Lines (Auto, Home, Renters, and Umbrella Policies).",
            "Commercial Lines (Commercial property & auto, General Liability, Workers Compensation)",
          ]}
        />
      </PageLayout>
    </>
  );
}