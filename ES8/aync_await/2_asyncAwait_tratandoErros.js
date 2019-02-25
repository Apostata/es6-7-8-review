async function getPostsAsyncAwait(){
    try {
        const response = await fetch('https://willianjusten.com.br/search.json');
        const posts = await response.json();
        return posts.map(
            (post)=>{
                console.log(post.title);
            }
        );
    }
    catch(err) {
        console.error('Deu ruim!',err);
    }
}

getPostsAsyncAwait();