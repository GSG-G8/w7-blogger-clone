const postFormBtn = document.querySelector('.show-create-post');
const logoutBtn = document.querySelector('.signout');
const cancelBtn = document.querySelectorAll('.form-exit');
const createPostForm = document.querySelector('.create-post-form');
const postsContainer = document.querySelector('.container');


const createPostElem = (obj) => {
  const article = document.createElement('article');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  article.className = 'container__post';
  div.className = 'posts__container__info';
  h2.className = 'title';
  p.className = 'description';

  img.setAttribute('src', obj.image);
  h2.textContent = obj.name;
  p.textContent = obj.description;

  div.appendChild(h2);
  div.appendChild(p);
  article.appendChild(img);
  article.appendChild(div);
  postsContainer.appendChild(article);
};

const renderPosts = (arr) => {
  clearPosts();
  arr.forEach((el) => {
    createPostElem(el);
  });
};


postFormBtn.addEventListener('click', () => {
  createPostForm.style.display = 'block';
});


cancelBtn[0].addEventListener('click', () => {
  createPostForm.style.display = 'none';
});

logoutBtn.addEventListener('click', () => {
  window.location = '/logout';
});


const clearPosts = () => {
  const section = document.querySelector('.container');
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
};


document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});
