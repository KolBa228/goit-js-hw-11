// import 'notiflix/dist/notiflix-3.2.6.min.css'
// import Notiflix from 'notiflix';
// import createItems from '../src/create.hbs'
// import Pixabay from './pixabay';

// const pixabay = new Pixabay();

// const form = document.getElementById("search-form");

// const gallery = document.querySelector(".gallery");

// const findBtn = document.querySelector('.find-btn')

// const loadMoreBtn = document.querySelector(".load-more");

// const loader = document.querySelector('loader');

// form.addEventListener('submit', onSearch)

// function onSearch(e) {
//         e.preventDefault();

//     clearContainer()

//     pixabay.query = e.currentTarget.elements.searchQuery.value;

//     pixabay.resetPage();


//     pixabay.fetchArticles().then(createItem).
//   catch(error => {
//     Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
//   });
//     loadMoreBtn.classList.remove('none')
    
// }

// loadMoreBtn.addEventListener('click', onLoadMore)

// function onLoadMore(e) {
//     e.preventDefault();
//     pixabay.fetchArticles().then(hits => {
//         createItem(hits);
//         const totalHits = hits.totalHits;
        
//         if (totalHits <= pixabay.page * pixabay.perPage) {
//             loadMoreBtn.style.display = 'none';
//             Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
//         }
//     });
// }

// function createItem(hits) {
//     gallery.insertAdjacentHTML('beforeend', createItems(hits));
// }

// function clearContainer() {
//     gallery.innerHTML = ''
// }

import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';
import createItems from '../src/create.hbs';
import Pixabay from './pixabay';

const pixabay = new Pixabay();

const form = document.getElementById("search-form");
const gallery = document.querySelector(".gallery");
const findBtn = document.querySelector('.find-btn');
const loadMoreBtn = document.querySelector(".load-more");
const loader = document.querySelector('loader');

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  clearContainer();
  pixabay.query = e.currentTarget.elements.searchQuery.value;
  pixabay.resetPage();

  try {
    const hits = await pixabay.fetchArticles();
    createItem(hits);
    const totalHits = hits.totalHits;

    if (totalHits <= pixabay.page * pixabay.perPage) {
      loadMoreBtn.style.display = 'none';
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
  }

  loadMoreBtn.classList.remove('none');
}

loadMoreBtn.addEventListener('click', onLoadMore);

async function onLoadMore(e) {
  e.preventDefault();
  try {
    const hits = await pixabay.fetchArticles();
    createItem(hits);
    const totalHits = hits.totalHits;

    if (totalHits <= pixabay.page * pixabay.perPage) {
      loadMoreBtn.style.display = 'none';
      Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
  }
}

function createItem(hits) {
  gallery.insertAdjacentHTML('beforeend', createItems(hits));
}

function clearContainer() {
  gallery.innerHTML = '';
};
