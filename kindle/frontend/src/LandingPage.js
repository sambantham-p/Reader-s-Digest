import React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import BookHero from "./modules/views/BookHero";
import withRoot from "./modules/withRoot";
function Index() {
    return (
      
      <React.Fragment>
         
        <AppAppBar />
        <BookHero/>
       
      </React.Fragment>
    );
  }
  
  export default withRoot(Index);