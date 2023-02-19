//const BlogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;
import { Link } from 'react-router-dom';

//input is a list of blogs, and a title
//then display them out

const BlogList = ({blogs,title}) => {  
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        {/* click to go to BlogDetails.js */}
                        {/* router can be found in app.js */}
                        <h2>{ blog.title }</h2>
                        <p>Written by {blog.author}</p>
                    </Link>

                </div>
            ))}
            
        </div>
     );
}
 
export default BlogList;