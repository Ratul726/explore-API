function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data) )
}


function displayPost(posts){
    const postContainer = document.getElementById('posts-container')
    for( const post of posts){
        
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>User-${post.userId}</h3>
        <h5>Post : ${post.title}</h5>
        <p>Post Description ${post.body}</p>`;
        postContainer.appendChild(div) 

        console.log(post)
    }
}

loadPost();

