import React from "react";
import { Route, Switch } from "react-router";
import About from "../about/About";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import Team from "../team/Team";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Page404 from "../page404/Page404";
import ProductDetail from "../portfolio/ProductDetail";
import PorfolioData from "../portfolio/PorfolioData";

const RouterList = () => {
  return (
    <>
      <Switch>
        <Route exact path="/"> <Home />  </Route>
        <Route exact path="/about"> <About /> </Route>
        <Route exact path="/services"><Services /> </Route>
        <Route exact path="/portfolio"> <Portfolio /> </Route>
        <Route exact path="/team">  <Team /> </Route>
        <Route exact path="/contact"> <Contact /> </Route>
        <Route exact path="/productdetail"> <ProductDetail /> </Route>

        {PorfolioData.map((data, i) => {
          return (
            <Route exact path={`/productdetail${i+1}`}> <ProductDetail passdata={PorfolioData[i]}/> </Route>
          )
        })}




        <Route exact path=""> <Page404 />  </Route>
      </Switch>





    </>
  );
};
export default RouterList;
