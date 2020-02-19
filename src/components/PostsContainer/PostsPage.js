//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data';





// state
const PostsPage = () => {
 const [data] = useState(dummyData);
  return(
      
    <div className="posts-container-wrapper">
      {data.map((a, b)=>
      <Post post={a} key={b}/>
      )}


    </div>
    
  )
  }

  
  


export default PostsPage;

