import React, { Fragment } from "react";
import { useRef } from 'react';
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Header2 } from "../../components/Header";
import { FeaturedArea } from "../../components/FeaturedArea";
import { AboutUs } from "../../components/AboutUs";
import { Services } from "../../components/Services";
import { MyWorkExperience } from "../../components/MyWorkExperience";
import { EducationAndSkills } from "../../components/EducationAndSkills";
import { Portfolio } from "../../components/Portfolio";
import { FreelanceWork } from "../../components/FreelanceWork";
import { Testimonials } from "../../components/Testimonials";
import { BlogPost } from "../../components/BlogPosts";
import { Partners } from "../../components/Partners";
import { ContactInfoProfiles } from "../../components/ContactInfoProfiles";
import { ContactUs } from "../../components/ContactUs";
import { BottomBar } from "../../components/BottomBar";

const HomePage = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>Ananth Eswar</title>
      </Helmet>
      {/* <Header2></Header2>       */}
      <Header></Header>
      <FeaturedArea></FeaturedArea>
      <AboutUs></AboutUs>
      {/* <section ref={sectionRef} id="section">
          <h2>Section Below Header</h2>
          {/* Content of your section 
      </section> */}
      <Services></Services>
      <MyWorkExperience></MyWorkExperience>
      <EducationAndSkills></EducationAndSkills>
      {/* <Portfolio></Portfolio>
      <FreelanceWork></FreelanceWork> 
      <Testimonials></Testimonials>*/}
      <BlogPost></BlogPost>
      {/* <Partners></Partners> 
      <ContactInfoProfiles></ContactInfoProfiles>*/}
      <ContactUs></ContactUs>
      <BottomBar></BottomBar>
    </Fragment>
  );
};

export default HomePage;
