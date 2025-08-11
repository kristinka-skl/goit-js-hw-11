import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import { renderImages, clearGallery, showLoadInfo } from './js/render-functions'; 
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

refs.formELem.addEventListener('submit', handleFormElem);

function handleFormElem(e) {
    e.preventDefault();
    clearGallery();
    showLoadInfo();
    const query = e.target.elements.searchText.value.trim();        
    if (query === '') {
        iziToast.info({
            message: 'Please enter search words',
            position: 'topRight',
        })
        return;
    } 
    getImagesByQuery(query).then(data=>{
        const imgArr = data.hits;            
        if (imgArr.length === 0) {
            iziToast.error({
                title: 'Nothing found!',
                message: `Sorry, there are no images matching your search "${query}". Please try again!`,
                position: 'topRight',
            })
        } else {
            renderImages(imgArr);
            e.target.reset();
        }
    });        
}
