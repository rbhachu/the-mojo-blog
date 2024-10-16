import Navbar1 from '../components/Navbar'; // top nav
import Home from '../components/Home'; // home page
import Create from '../components/Create'; // create post page
import BlogDetails from '../components/BlogDetails'; // dynamic blog post page
import NotFound from '../components/404'; // 404 page

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // updated for React Router v6

function App() {

  return (    
    <Router>
      <div className="App">
        <Navbar1 />      
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;
