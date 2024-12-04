import React from "react";
import AboutUs from "./AboutUs";
import HaveQuestions from "./HaveQuestions";
import Feauters from "./Feauters";
import Headersection from "../headersection/HeaderSection";

const AboutClient = () => {
  return (
    <div className=" flex flex-col  md:pb-32  pb-10 relative  ">
      <Headersection title="About Us" subtitle="About us- Farmer’s Store" />
      <AboutUs />
      <Feauters />
      <HaveQuestions />
    </div>
  );
};

export default AboutClient;
