import React, { useState, useEffect } from "react";
import Card from "./Componants/Card";
import './Post.css'

export default function Posts() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");


  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
          let posts = [...data]
          if(post==""){
        setPost(posts)}
        console.log(post)

      });
  }

  getData()
  return (
    <div>
        
        <div className="header">
            <input placeholder="Search" onChange={(e)=>{setSearch((e.target.value))}}/>
          
        </div>
    <div className="card-ul">
       {post.filter((item,i)=>item.title.includes(search)).map((item, i) => 
        <Card key={item.id} title={item.title} body={item.body} />
      
      )}
      <br></br>
      <h2>Completed By Ankit Kumar</h2>
    
      </div>
    </div>
  );
}
