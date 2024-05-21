import React,{useEffect,useState} from "react";
const UserList=()=>{
    const [users,setuser]=useState([])
    const [loading,setLoading]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                    throw new Error('Network response was not ok')
                }
                const data=await response.json();
                setuser(data);
                console.log(data)
            }catch(error){
                seterror(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[]);
    if(loading){
        return <div>Loading....</div>
    }
    if(error){
        return <div>Error:{error.message}</div>
    }

    return(
        <>
        <h1>UserList</h1>
        <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name}--{user.email}</li>
            ))}
        </ul>
        </>
    )
}
export default  UserList