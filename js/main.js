import { buildArticle, getPosts } from "./post_controller.js";

const posts = [
  {
    title: "Reseña de Buscando a nemo",
    date: "2020-03-07",
    body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
  dignissimos! Quis soluta maiores omnis voluptates animi, asperiores
  quae tempora minima quaerat rem eos deleniti officia id ipsa! Facilis,
  quas quisquam.`,
  },
  {
    title: "Reseña de The Joker",
    date: "2020-03-06",
    body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
  dignissimos! Quis soluta maiores omnis voluptates animi, asperiores
  quae tempora minima quaerat rem eos deleniti officia id ipsa! Facilis,
  quas quisquam.`,
  },
  {
    title: "Reseña de The Joker 2",
    date: "2020-03-06",
    body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
  dignissimos! Quis soluta maiores omnis voluptates animi, asperiores
  quae tempora minima quaerat rem eos deleniti officia id ipsa! Facilis,
  quas quisquam.`,
  },
];

const section = document.getElementById("main-section");

async function main() {
  buildArticle(section, posts);
  const listPosts = await getPosts();
  buildArticle(section, listPosts);
}

main();
