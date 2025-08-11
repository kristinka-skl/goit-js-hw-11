import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { refs } from "./refs";

export const lightbox = new SimpleLightbox('.img-card a');
export function imageTemplate ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `<li class="img-card">
    <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}">
    </a>
    <ul class="card-text">
    <li class="card-content"><p class="card-content-title">Likes</p><p>${likes}</p></li>
    <li class="card-content"><p class="card-content-title">Views</p><p>${views}</p></li>
    <li class="card-content"><p class="card-content-title">Comments</p><p>${comments}</p></li>
    <li class="card-content"><p class="card-content-title">Downloads</p><p>${downloads}</p></li>    
    </ul>
    </li>`
}
export function renderImages(imgArr) {
  const markup = imgArr.map(imageTemplate).join('');
  refs.imagesList.innerHTML = markup;
  lightbox.refresh();  
}
export function clearGallery() {
    refs.imagesList.innerHTML = '';
}

// Я вирішила спробувати реалізувати лоадер не через додавання та видалення класу,
// якщо це помилка, то поясніть, будь ласка, чому
export function showLoadInfo() {
    const loader = '<div class="loader-container"><span class="loader"></span></div>';
    refs.imagesList.insertAdjacentHTML('afterbegin', loader);
    document.addEventListener('iziToast-closing', () => {
        document.querySelectorAll('.loader-container').forEach(el => el.remove());
    });
 }
