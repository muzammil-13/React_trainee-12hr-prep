import React,{useState, useEffect} from 'react'

const DataFetcher=()=>{
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        const apiUrl='https://jsonplaceholder.typicode.com/posts'

        const fetchData=async()=>{
            try{
                const response=await fetch(apiUrl);
                if(!response.ok){
                    throw new Error("Failed to fetch data")
                }
                const result=await response.json();
                setData(result);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;

    return(
        <div>
            <h2>Fetched Data</h2>
            <ul>
                {data.slice(0,5).map((item)=>{
                    <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}

export default DataFetcher;