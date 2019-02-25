// function getPostsPromise(){
//     return fetch('https://willianjusten.com.br/search.json')
//         .then(data => data.json())
//         .then(data => data.map(
//             (post)=>{
//                 console.log(post.title);
//             })
//         );
// }

async function getPostsAsyncAwait(){
    const response = await fetch('https://willianjusten.com.br/search.json');
    const posts = await response.json();
    return posts.map(
        (post)=>{
            console.log(post.title);
        });
}

// getPostsPromise();
getPostsAsyncAwait();