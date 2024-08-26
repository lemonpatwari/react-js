import getSingleBlogPost from "@/lib/getSingleBlogPost";
import getSingleBlogPostComment from "@/lib/getPostComments";
import delay from "@/lib/delay";
import Comments from "@/app/components/Comments";

function Suspense(props) {
    return null;
}

export default async function singleBlof({params}) {
    const id = params.id;
    const postPromise = getSingleBlogPost(id);
    const commentsPromise = getSingleBlogPostComment(id);

    // await delay(2000);
    // request in parallel
    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    // incremental loading
    const post = await postPromise;

    return (
        <div>
            <section className='p-5'>
                single blog page
                <h1 className='pb-2'>{post.id}</h1>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </section>

            <Suspense fallback={<div>Loading.........</div>}>
                <Comments commentsPromise={commentsPromise}/>
            </Suspense>
        </div>
    );
}