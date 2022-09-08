import React from "react";
import { Footer, Header, ListHotels, Navbar } from "../../components";

const List = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header type="list" />
      <ListHotels />
      <Footer />
    </React.Fragment>
  );
};

export default List;
