import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";  // abstract this out just improve reuseability   


const Home = () => {
    const { data : blogs, isPending,error } =useFetch('http://localhost:8000/blogs');    //destruct 3 properties we get back from useFetch

    const [name,setName] = useState('Mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id );
    //     setBlogs(newBlogs);
    // }



    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);
    // }, [name]); 
    // this useEffect hook is gonna run,everytime there is a rerender
    // e.g. data change or page reload
    // [] is dependency array, empty [] means only run after first initial render
    // [name] means only run this hook when name variable is changed


    return ( 
        <div className="home">
            {error &&  <div>{ error }</div>}   
            {/* if there is an error, then we display the error */}
            
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}  title='All blogs'/>}
            {/* blogs={blogs} is a prop */}
            {/* when accessing it, it is stored in props object, check bloglist.js */}

            {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'mario' )}  title="Mario's blogs" handleDelete={handleDelete}/> */}
            <button onClick={() => setName('Luigi')}>Change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;