import React from "react";
import {
  Featured,
  FeaturedProperties,
  Header,
  Navbar,
  PropertyList,
} from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Featured />
      <PropertyList />
      <FeaturedProperties />
    </React.Fragment>
  );
};

export default Home;
