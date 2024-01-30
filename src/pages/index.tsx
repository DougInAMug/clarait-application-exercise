import Head from "next/head";
import CreatePostButton from "~/components/CreatePostButton";
import PostsList from "~/components/PostsList";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: 'client' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
  // return (
  //   <>
  //     <Head>
  //       <title>Application Exercise</title>
  //       <meta name="description" content="Generated by create-t3-app" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
  //       <PostsList />
  //       <CreatePostButton />
  //     </main>
  //   </>
  // );
}
