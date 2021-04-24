import { Link } from "react-router-dom"; // import link function from react-router-dom

// pass bloglist posts as state + title from Home.js
const BlogList = ({ blogs, title }) => { 

    // template for blog posts output 
    // display looped list of blog posts using map method
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            
                {blogs.map(blog => (
                    <div className="blog-preview" key={ blog.id } >
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.postTitle }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </div>
                ))}

        </div>
    );

}
 
export default BlogList;