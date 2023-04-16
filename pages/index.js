import Layout from "@/Layout";
import HeroSection from "@/sections/HeroSection";
import WorkSection from "@/sections/WorkSection";
import Team from "@/sections/Team";
import BenefitsSection from "@/sections/BenefitsSection";
import HireSection from "@/sections/HireSection";
import ConnectUs from "@/sections/ConnectUs";
import Head from "next/head";

import {
  HeroSecData,
  HireSecData,
  TeamSecData,
  WorkSecData,
  BenefitSecData,
  FooterDataP1,
} from "@/services";
import Form from "@/sections/Form";

export default function Home({
  HeroSectionData,
  WorkSectionData,
  TeamSectionData,
  HireSectionData,
  BenefitSectionData,
  FooterSectionData1,
}) {
  return (
    <>
      <Head>
        <title>Rockit</title>
        <meta
          name="description"
          content="Upscale your business efficiency by hiring dedicated software developers with leverage to screen and manage the whole team."
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <Layout FooterSectionData1={FooterSectionData1}>
        <HeroSection HeroSectionData={HeroSectionData} />
        <Team TeamSectionData={TeamSectionData} />
        <WorkSection WorkSectionData={WorkSectionData} />
        <BenefitsSection BenefitSectionData={BenefitSectionData} />
        <HireSection HireSectionData={HireSectionData} />
        <ConnectUs />
      </Layout>
      {/* <Form/> */}
    </>
  );
}

export async function getServerSideProps() {
  var HeroSectionData,
    WorkSectionData,
    TeamSectionData,
    HireSectionData,
    BenefitSectionData,
    FooterSectionData1;

  try {
    const { data } = await HeroSecData();
    const content = data.heroDetail.data.attributes.HeroDetail;
    HeroSectionData = content;
  } catch (error) {
    console.log("Error in HeroSection Data");
  }

  try {
    const { data } = await WorkSecData();
    const content = data.workDetail.data.attributes.WorkDetail;
    WorkSectionData = content;
  } catch (error) {
    console.log("Error in WorkSection Data");
  }

  try {
    const { data } = await TeamSecData();
    const content = data.teamDetail.data.attributes.TeamDetail;
    TeamSectionData = content;
  } catch (error) {
    console.log("Error in TeamSection Data");
  }

  try {
    const { data } = await HireSecData();
    const content = data.hireCards.data[0].attributes;
    HireSectionData = content;
  } catch (error) {
    console.log("Error in HireSection Data");
  }

  try {
    const { data } = await BenefitSecData();
    const content = data;
    BenefitSectionData = content;
  } catch (error) {
    console.log("Error in HireSection Data");
  }

  try {
    const { data } = await FooterDataP1();
    const content = data.footerListP1S;
    FooterSectionData1 = content;
  } catch (error) {
    console.log("Error in FooterData1 Data");
  }

  return {
    props: {
      HeroSectionData,
      WorkSectionData,
      TeamSectionData,
      HireSectionData,
      BenefitSectionData,
      FooterSectionData1,
    },
  };
}
