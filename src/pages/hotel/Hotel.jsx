import React from "react";
import { Footer, Header, HotelContent, Navbar } from "../../components";

const Hotel = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header type="list" />
      <HotelContent />
      <Footer />
    </React.Fragment>
  );
};

export default Hotel;
