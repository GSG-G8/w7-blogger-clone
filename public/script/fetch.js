
const fetchPosts = () => {
  fetch('/posts')
    .then((res) => res.json()).then((res) => renderPosts(res));
};
