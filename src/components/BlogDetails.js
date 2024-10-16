import { useParams } from "react-router-dom"; // updated to import from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import useFetch from "./useFetch"; // import useFetch

const BlogDetails = () => {

    const { id } = useParams(); // pass id value from url
    const { fetchdata, fetchstatus, error } = useFetch(process.env.REACT_APP_API_PATH + '/' + id); // import states from useFetch
    const navigate = useNavigate(); // useNavigate replaces useHistory

    // delete post function
    const handleClick = () => {
        fetch(process.env.REACT_APP_API_PATH + '/' + id, {
            method: 'DELETE' // delete post command from JSON data file
        }).then(() => {
            navigate('/'); // use navigate to redirect back to homepage after post delete
        });
    };

    return ( 
        <div className="blog-details">
            { fetchstatus && <div>Loading...<br /><br /></div> }
            { error && <div>{ error }</div> }
            { fetchdata && (
                <article>
                    <h2>{ fetchdata.postTitle }</h2>
                    <p>Written by { fetchdata.author }</p>
                    <div>{ fetchdata.body }</div>
                    <Link to="/">Back</Link>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
