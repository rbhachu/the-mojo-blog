import { useHistory, useParams } from "react-router"; // import useHistory + useParams from ReactRouter to redirect page after submit + get id from url too
import useFetch from "./useFetch"; // import useFetch

const BlogDetails = () => {

    const { id } = useParams(); // pass id value from url
    const { fetchdata, fetchstatus, error } = useFetch(process.env.REACT_APP_API_PATH + '/' + id); // import states from useFetch
    const history = useHistory(); // invoke useHistory

    // delete post function
    const handleClick= () => {
        fetch(process.env.REACT_APP_API_PATH + '/' + id, {
            method: 'DELETE' // delete post command from JSON data file
        // returns promise
        }).then(() => {
            history.push('/'); // redirect back to homepage after post delete
        })
    
    }

    return ( 
        <div className="blog-details">
            { fetchstatus && <div>Loading...<br /><br /></div> }
            { error && <div>{ error }</div> }
            { fetchdata && (
                <article>
                    <h2>{ fetchdata.postTitle }</h2>
                    <p>Written by { fetchdata.author }</p>
                    <div>{ fetchdata.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;