import Link from "next/link";
import { api } from "~/utils/api";

export default function PostsList() {
  const {
    data: posts,
    error: isPostsError,
    isLoading,
  } = api.router.getAllPostsTRCP.useQuery();

  if (posts)
    return (
      <div>
        {posts.map((element, index, array) => (
          <Link key={index} href={`blog/${element.id}`}>
            <h2 className="font-bold text-white">{element.title}</h2>
            <p className="text-white">
              {new Date(element.createdAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    );
}
