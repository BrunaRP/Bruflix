const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://devbruflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};

//colocar https://devbruflix.herokuapp.com/categorias depois do deploy pra ver o bd