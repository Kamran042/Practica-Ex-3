import React from 'react'
import { Helmet } from "react-helmet";
import SectionFirst from '../../../Components/Site/Section1/Sectoion1';
import Section2 from '../../../Components/Site/Section2/Section2';
import Registr from '../../../Components/Site/Registr/Registr';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <SectionFirst/>
        <Section2/>
        <Registr/>
      </div>
    </>
  )
}

export default Home
