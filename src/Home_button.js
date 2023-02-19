import { useState } from "react";

const Home = () => {
    //let name = 'mario';
    const [name,setName] = useState('mario'); 
    // useState is a hook, [variablename,function name to change variable]
    // useState('original value'); 

    const [age,setAge] = useState(25);

    const handleClick = (e) => {

        console.log('hello,ninjas',e);
    }

    const handleClickAgain = (name,e) =>{
        console.log('Hello ' + name,e)
    }

    const handleChangeName = () => {
        //name = 'Luigi';
        setName('Luigi');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <p>age is {age} </p>
            <button onClick={handleChangeName}>Change name</button>
            <button onClick={handleClick}>Click me</button>
            {/* here is not handleClick() because we dont want to invoke function,
            if we use handleclick() then it will be invoked enev without user clcking it
            , so we use handleClick to set a reference to that function*/}
            <button onClick={(e) => {handleClickAgain('howie',e)}}> Click me again</button>
            {/* if we want to pass in a variable to the function, we cannot use handleClickAgain('variable')
            because this will trigger the function directly. instead we use wrap the 
            function reference in anonymous function, which means we dont store it in a constant or anything,
            we just creating it inline. but this function will get invoked when user click */}
        </div>
     );
}
 
export default Home;