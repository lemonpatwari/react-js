export default async function Comments(commentsPromise) {
    const comments  = await commentsPromise;
    return (
        <section>
            {comments.map((comment) => (
                <div className='pt-2 px-3' key={comment.id}>
                    <h3>{comment.id}</h3>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </section>
    )
}