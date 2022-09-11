import React from "react";
import {
  Featured,
  FeaturedProperties,
  Footer,
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
      <Footer />
    </React.Fragment>
  );
};

export default Home;
