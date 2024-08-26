export default async function getSingleBlogPostComment(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    if (!res.ok) {
        throw new Error('Error fetching posts');
    }
    return res.json();
}