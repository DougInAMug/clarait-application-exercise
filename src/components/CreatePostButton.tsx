import Link from "next/link";

interface Props {}
export default function CreatePost({}: Props) {
  return (
    <Link href={"/createPost"} className="text-white">Create Post</Link>
  )
}