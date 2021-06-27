import BlogList from "./BlogList"; // import BlogList template from BlogList.js
import useFetch from "./useFetch"; // import custom hook from useFetch.js
import preloader from "../images/Preloader.svg";

const Home = () => {

  const { fetchdata, fetchstatus, error } = useFetch(process.env.REACT_APP_API_PATH); // get current object state values for 3 hooks from useFetch.js
  // console.log(`apipath: ${process.env.REACT_APP_API_PATH}`); // test api path
  // could convert hardcoded url to .env var for security

  return (
    <> 
      { error && <div>{ error }</div> } 
      { fetchstatus && <div className="center"><img src={preloader} alt="Loading..." title="Loading..." /></div> }
      { fetchdata && <BlogList blogs={fetchdata} title="All Blogs!" /> }      
    </>
  );

}
 
export default Home;