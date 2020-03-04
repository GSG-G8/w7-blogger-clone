const postFormBtn = document.querySelector('.show-create-post');
const loginFormBtn = document.querySelector('.show-login-form');
const signupFormBtn = document.querySelector('.show-signup-form');
const cancelBtn = document.querySelectorAll('.form-exit');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
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
  loginForm.style.display = 'none';
  signupForm.style.display = 'none';
  createPostForm.style.display = 'block';
});


loginFormBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
  createPostForm.style.display = 'none';
  signupForm.style.display = 'none';
});


signupFormBtn.addEventListener('click', () => {
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
  createPostForm.style.display = 'none';
});

cancelBtn.forEach((e) => {
  e.addEventListener('click', (e) => {
    loginForm.style.display = 'none';
    createPostForm.style.display = 'none';
    signupForm.style.display = 'none';
  });
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
