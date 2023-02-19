import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


//featch the blog with a specific ID and display it
//also able to delete it 
const BlogDetails = () => {
    const { id } = useParams(); // hook
    // this allows us to use parameters in the routes, e.g. http://localhost:3000/blogs/3
    // what we need to do is to destructure it in {}
    
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+ id);
    //here we use this useFetch() hook to get { data, error, isPending } 
    //properties

    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'  // just asking JSON server to delete that blog with that id
        }).then(() => {
          history.push('/');
        }) 
      }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;