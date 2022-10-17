const output = document.querySelector('#output');

let url = 'https://jsonplaceholder.typicode.com/posts?_limit=20'

const listPosts = async () => {
  const res = await fetch(url);
  const posts = await res.json();

  posts.forEach(post => {

    let template = `
    <div class="card p-3 mb-3">
      <a href="details.html?id=${post.id}" class="text-dark text-decoration-none">
        <h2>${post.title}</h2>
        <p class="m-0">${post.body.slice(0,20)}...</p>
      </a>
    </div>
    `

    output.insertAdjacentHTML('beforeend', template)
  })

}

listPosts()