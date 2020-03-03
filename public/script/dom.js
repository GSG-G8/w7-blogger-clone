const postFormBtn = document.querySelector('.show-create-post');
const loginFormBtn = document.querySelector('.show-login-form');
const signupFormBtn = document.querySelector('.show-signup-form');
const cancelBtn = document.querySelectorAll('.form-exit');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const createPostForm = document.querySelector('.create-post-form');
const postsContainer = document.querySelector('.container');


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
