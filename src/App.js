// import React from 'react'; dont need to declare for components from v17+
import Navbar1 from './Navbar'; // top nav
import Home from './Home'; // home page
import Create from './Create'; // create post page
import BlogDetails from './BlogDetails'; // dynamic blog past page
import NotFound from './404'; // 404 page

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