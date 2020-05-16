// axios
//   .get("https://jsonplaceholder.typicode.com/posts/1")
//   .then((result) => {
//     // obtenemos el id del post
//     const postId = result.data.id;
//     console.log("post", result);

//     // obtenemos el comentario con el id del post
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments/" + postId)
//       .then((result) => {
//         console.log("comentario", result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function getData() {
  try {
    const post = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // obtenemos el id del post
    const postId = post.data.id;
    console.log("post", post);

    // obtenemos el comentario con el id del post
    const comment = await axios.get(
      "https://jsonplaceholder.typicode.com/comments/" + postId
    );

    console.log("comentario", comment);
  } catch (error) {
    console.log(error);
  }
}

function algo() {}

getData();
