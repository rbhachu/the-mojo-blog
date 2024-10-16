import { useState } from "react"; // useState hook from React
import { useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory in React Router v6

const Create = () => {

  // input states
  const [postTitle, setpostTitle] = useState('Add Title'); // postTitle state
  const [body, setBody] = useState('Add Post'); // body state
  const [author, setAuthor] = useState('Mario'); // author state
  const [isPending, setIsPending] = useState(false); // set to 'false' to show submit button
  const navigate = useNavigate(); // useNavigate replaces useHistory

  // form action function - captures input states and saves in 'blog' object, then submits in JSON format to JSON file
  const handleSubmit = (e) => {
  
    e.preventDefault(); // prevents form resetting on submission to allow us to capture input states
    
    const blog = { postTitle, body, author }; // create object to capture to new blog entry and add to db.json file
    setIsPending(true); // setIsPending to 'true' so submit button is disabled and shows 'Add Blog...' progress status instead

    fetch(process.env.REACT_APP_API_PATH, { // api JSON endpoint to add data too
        method: 'POST', // method type
        headers: { "Content-Type": "application/json" }, // set header type to JSON
        body: JSON.stringify(blog) // convert blog object into JSON string format, JSON server will automatically add ID too
    }).then(() => {
        setIsPending(false); // setIsPending to 'false' to revert submit button back to normal, ready for next submission
        navigate('/'); // use navigate to redirect user to the home page after post submission
    })

  }

  // page output
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          type="text" 
          required // user needs to add data
          value={postTitle} // initial value set in state for title
          onChange={(e) => setpostTitle(e.target.value)} // update input state with new typed value
          onClick={(e) => setpostTitle('')} // clear input on click
        />
        <label>Blog Body:</label>
        <textarea
          required // user needs to add data
          value={body} // initial value set in state for body
          onChange={(e) => setBody(e.target.value)} // update input state with new typed value
          onClick={(e) => setBody('')} // clear input on click     
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author} // initial value set in state for author
          onChange={(e) => setAuthor(e.target.value)} // update state with new selected option
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding Blog...</button> }

      </form>
    </div>
  ); 

} 

export default Create;
