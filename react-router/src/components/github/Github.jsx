import React, { useEffect, useState,} from "react";
function Github(){
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data =>{
    
            setdata(data);
        })
    },[])
    return(
        <div className="bg-slate-900 text-white">
            Github Followers: {data.followers}
        </div>
    )
}
export default Github

