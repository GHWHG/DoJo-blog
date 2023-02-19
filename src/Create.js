import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory(); // invoke useHistory hook


    const handleSubmit = (e) => {
        e.preventDefault(); //default action of submit is to refresh the page, so this prevefnt that from happening 
        const blog = { title, body, author } //create new blog object
        
        setIsPending(true)


        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{ "Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog added');
            setIsPending(false);
            //history.go(-1); // this means go back one page
            history.push('/') // go back to home, route can be found in App.js
        })
       
    }
    // we take in event object (e) 
    // we can fire a function when this fetch is complete with then method

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value = { title }
                    onChange={ (e) => setTitle(e.target.value) }
                />
                {/* on change, we set that equal to an anonamyous function, which then invoke setTitle  */}
                {/* inside anonamyous function, we get access to events object (e.g. e )*/}
                {/* and we can get access to whats is being typed from event object by e.target, and target is this <input> element*/}
                <label>Blog body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog auhor:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {! isPending && <button>Add blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;