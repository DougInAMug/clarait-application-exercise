import Link from "next/link";
import { useState, useEffect } from "react";
import axios from 'axios'

interface Props {}
export default function PostsList({}: Props) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("/api/getAllPosts").then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <div>
      {post.map((element, index, array) => (
        <Link key={index} href={`blog/${element.id}`}>
          <h2 className="font-bold">{element.title}</h2>
          <p>{new Date(element.createdAt).toLocaleDateString()}</p>
        </Link>
      ))}
    </div>
  );
}
