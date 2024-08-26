import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Dashboard() {
    const posts = await getAllPosts();
    console.log(posts)
    return (
        <div>
            <section>
                blog page

                <div className='px-4 mt-3'>
                    {posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <Link href={`/blog/${post.id}`}>
                                    <h2 className="p-2">{post.id}.{post.title}</h2>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}