import moment from "../node_modules/moment/dist/moment.js";

export function dateTransform(originalDate) {
  const date = moment(originalDate);
  return date.fromNow();
}

export async function getPosts() {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result.data;
}

export function buildArticle(htmlEl, posts) {
  for (const post of posts) {
    htmlEl.innerHTML += `<article class="article-style">
        <header>
          <h1>${post.title}</h1>
          <small>
            <time datetime="${post.date}">
              ${dateTransform(post.date)}
            </time>
          </small>
        </header>

        <p>
         ${post.body}
        </p>

        <a href="#">Leer mas detalles</a>
      </article>`;
  }
}
