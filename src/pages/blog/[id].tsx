import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  const blogID = router.query.id;
  const [blogObject, setBlogObject] = useState({
    id: "",
    createdAt: "",
    updatedAt: "",
    title: "",
    body: "",
    author: "",
  });

  useEffect(() => {
    axios.get(`/api/blog/${blogID}`).then((response) => {
      console.log("I'm read", response);
      setBlogObject(response.data);
    });
  }, [blogID]);

  if (blogObject == null) return null;

  return (
    <>
      <div>id: {blogObject.id}</div>
      <div>createdAt: {blogObject.createdAt}</div>
      <div>updatedAt: {blogObject.updatedAt}</div>
      <div>title: {blogObject.title}</div>
      <div>body: {blogObject.body}</div>
      <div>author: {blogObject.author}</div>
    </>
  );
}
