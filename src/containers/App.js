// import React from 'react'; dont need to declare for components from v17+
import Navbar1 from '../components/Navbar'; // top nav
import Home from '../components/Home'; // home page
import Create from '../components/Create'; // create post page
import BlogDetails from '../components/BlogDetails'; // dynamic blog past page
import NotFound from '../components/404'; // 404 page

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // for React Router

// root component
function App() {

  return (    
    <Router>

      <div className="App">
        <Navbar1 />      
          <div className="content">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/create"><Create /></Route>
              <Route exact path="/blogs/:id"><BlogDetails /></Route>
              <Route path="*"><NotFound /></Route>
            </Switch>
          </div>
      </div>
    
    </Router>
  );

}

export default App;