import Link from "next/link";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";
import type { Post } from "@prisma/client";

export default function PostsList() {
  const [post, setPost] = useState<Post[]>();

  const hello = api.router.getAllPostsTRCP.useQuery(
    useEffect(() => {
      setPost(hello.data);
    }, [])
  );

  if (post != undefined)
    return (
      <div>
        {post.map((element, index, array) => (
          <Link key={index} href={`blog/${element.id}`}>
            <h2 className="font-bold text-white">{element.title}</h2>
            <p className="text-white">{new Date(element.createdAt).toLocaleDateString()}</p>
          </Link>
        ))}
      </div>
    );
}
