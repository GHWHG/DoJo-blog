

import { useState,useEffect } from "react";

// first we need to create a function, which contains hook itself, url is the parameter
const useFetch = (url) => {  // custom hook must starts its name with use, 
    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {   // we get response object
                if (!res.ok){
                    throw Error('could not fetch data for that resource');
                }
                return res.json();  // use the json method on that object 
            })
            .then(data => {   // this data is just a local variable, not same as useState data
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        },1000);
    }, [url]);  // we place url as dependency, which means, whenever url changes,  useEffect will rerun to get data for that url


    return {data,isPending,error};
}

export default useFetch;