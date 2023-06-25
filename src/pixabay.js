// import 'notiflix/dist/notiflix-3.2.6.min.css';
// import Notiflix from 'notiflix';
// export default class Pixabay {
//     constructor() {
//         this.API_KEY = '37828594-2a1dcba166f42d48673b13374';
//         this.BASE_URL = "https://pixabay.com/api/";
//         this.perPage = 40;
//         this.page = 1;
//         this.searchQuery = ''
        
//     }

//     fetchArticles() {
//         const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;

//         return fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             this.incrementPage();
//             return data.hits;
//         }).catch(error => {
//                 Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.')
//             });
//     }

//     incrementPage() {
//         this.page += 1
//     } 

//     resetPage() {
//         this.page = 1
//     }

//     get query() {
//         return this.searchQuery;
//     }

//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
// }


import 'notiflix/dist/notiflix-3.2.6.min.css';
import Notiflix from 'notiflix';

export default class Pixabay {
  constructor() {
    this.API_KEY = '37828594-2a1dcba166f42d48673b13374';
    this.BASE_URL = 'https://pixabay.com/api/';
    this.perPage = 40;
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchArticles() {
    const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.incrementPage();
      return data.hits;
    } catch (error) {
      Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
      throw error;
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}