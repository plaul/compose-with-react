import { useState, useEffect } from "react";
import { API_URL } from "../settings";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import React from "react";

function MainPage() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get(API_URL).then((data) => {
      console.log(data);
      setPostList(data.data);
    });
  }, []);

  const likePost = (id) => {
    Axios.post(`${API_URL}/like/${id}`).then((response) => {
      //Update locally
      setPostList((prev) =>
        prev.map((p) => {
          return p.id===id ? {...p, likes:p.likes+1} : p
        })
      );
    });
  };
  if(postList.length===0){
    return <h2 style={{textAlign:"center",marginTop:50}}>No Posts available</h2>
  }
  return (
    <div className="MainPage">
      <div className="PostContainer">
        {postList.map((val, key) => {
          return (
            <div key={key} className="Post">
              <h2 className="post-title">
                {val.title}, Id({val.id})
              </h2>
              <Link to={`post/${val.id}`}>See full post</Link>
              <p className="post-text">
                {val.post_text.length > 300
                  ? val.post_text.substring(0, 300) + " ..."
                  : val.post_text}
              </p>
              <div>
                Written by: {val.user_name}
                <button onClick={() => likePost(val.id)}>
                  Like
                </button>
                <span> Likes: {val.likes}</span>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
