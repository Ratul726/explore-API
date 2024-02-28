function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUser2(data) )
}

function displayUser2(data){

    const ul =document.getElementById('userList')
   
    for(const user of data){
        console.log(user.email)
        const li = document.createElement('li')
        li.innerText = user.email;
        ul.appendChild(li);
    }
}
// deleted post
function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}
// patchPost
function patchPost (){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
// createApost
function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}