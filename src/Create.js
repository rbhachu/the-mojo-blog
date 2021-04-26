import { useState } from "react"; // useState hook from React
import { useHistory } from 'react-router-dom'; // import ability to useHistory feature from react-router-dom

const Create = () => {

  // input states
  const [postTitle, setpostTitle] = useState('Add Title'); // postTitle state
  const [body, setBody] = useState('Add Post'); // body state
  const [author, setAuthor] = useState('mario'); // author state
  const [isPending, setIsPending] = useState(false); // set to 'false' to show submit button
  const history = useHistory();

  // form action function - captures input states and saves in 'blog' object, then submits in JSON format to JSON file
  const handleSubmit = (e) => {
  
    e.preventDefault(); // prevents form resetting on submission to allow us to capture input states
    
    const blog = { postTitle, body, author }; // create object to capture to new blog entry and add to db.json file
    // console.log(blog); // check blog object capture details
    setIsPending(true); // setIsPending to 'true' so submit button is disabled and shows 'Add Blog...' progress status instead

    fetch(process.env.REACT_APP_API_PATH, { // api JSON endpoint to add data too
        method: 'POST', // method type
        headers: { "Content-Type": "application/json" }, // set header type to JSON
        body: JSON.stringify(blog) // convert blog object into JSON string format, JSON server will automatically add ID too
    // returns promise
    }).then(() => {
        // console.log('new blog added'); test blog added in console
        // alert('new blog added')
        setIsPending(false); // setIsPending to 'false' to revert submit button back to normal, ready for next submission
        // history.go(-1); // will mean you go back 1 step to a previous page
        history.push('/'); // redirects user to home page after post submission
    })

  }

  // page output
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required // user needs to add data
          value={postTitle} // intial value set in state for title
          onChange={(e) => setpostTitle(e.target.value)} // update input state with new typed value
          onClick={(e) => setpostTitle('')} // clear input on click
        />
        <label>Blog body:</label>
        <textarea
          required // user needs to add data
          value={body} // intial value set in state for body
          onChange={(e) => setBody(e.target.value)} // update input state with new typed value
          onClick={(e) => setBody('')} // clear input on click     
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author} // intial value set in state for author
          onChange={(e) => setAuthor(e.target.value)} // update state with new selected option
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding Blog...</button> }

        { /*
        <br /><br /><p>Title: { postTitle }</p>
        <p>Body: { body }</p>
        <p>Author: { author }</p>
        */ }

      </form>
    </div>
  ); 

} 

export default Create;