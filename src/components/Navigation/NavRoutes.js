import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "../Home";
import Messagerie from "../Messagerie";
import MonFil from "../MonFil";
import Carte from "../Carte";
import Parametres from "../Parametres";
import Search from "../Search";
import Favoris from "../Favorite";
import QrCode from "../QrCode";
import Coupons from "../Coupons";
import Tickets from "../Tickets";
import SignUp from "../SignUp";
import Login from "../Login";
import LogOut from "../LogOut";
import Admin from "../Admin";

function NavRoutes() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/admin" exact component={Admin} />

        <Route path="/" exact component={Home} />

        <Route path="/signup" exact component={SignUp} />

        <Route path="/login" exact component={Login} />

        <Route path="/logout" exact component={LogOut} />

        <Route path="/messagerie" exact component={Messagerie} />

        <Route path="/monfil" exact component={MonFil} />

        <Route path="/carte" exact component={Carte} />

        <Route path="/parametres" exact component={Parametres} />

        <Route path="/search" exact component={Search} />

        <Route path="/favorite" exact component={Favoris} />

        <Route path="/qrcode" exact component={QrCode} />

        <Route path="/mescoupons" exact component={Coupons} />

        <Route path="/mestickets" exact component={Tickets} />
      </Switch>
    </Router>
  );
}

export default NavRoutes;
