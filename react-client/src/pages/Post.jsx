import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../settings";
import "../App.css";

export default function Post() {
  const navigate = useNavigate();
  let { postId } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    Axios.get(`${API_URL}/${postId}`).then((data) => {
      console.log(data);
      setPost({
        title: data.data[0].title,
        postText: data.data[0].post_text,
        userName: data.data[0].user_name,
        id: data.data[0].id,
      });
    });
  }, [postId]);

  const deletePost = async (id) => {
    await Axios.delete(`${API_URL}/${postId}`)
    alert("you deleted a post");
    navigate("/");
  };
  return (
    <div className="Post individual">
      <h2 className="post-title">
        {post.title}, ({post.id})
      </h2>
      <p>{post.postText}</p>
      <h4>{post.userName}</h4>
      <button onClick={() => deletePost(post.id)}>Delete Post</button>
    </div>
  );
}
