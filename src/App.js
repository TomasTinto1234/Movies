import React from "react";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
// import NavBar from "./components/NavBar/NavBar";
// import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import NavBar from "./components/nav/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home"


function App() {
  return (
    <div>
      <div className="App">
        <div className="Container">
          {/* <NavBar /> */}
          <NavBar/>
          <Switch>
          <Route exact path="/" component={Buscador} />
          <Route path="/Home" component={Home} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" render={({match}) => <Movie id={match.params.id} />} />
          </Switch>
        </div>  
      </div>
    </div> 
  );
}

export default App;
