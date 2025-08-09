import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
refs.formELem.addEventListener('submit', handleFormElem);

function handleFormElem(e){
    e.preventDefault();
    const query = e.target.elements.searchText.value;
    console.log(query);    
    getImagesByQuery(query).then(data=>{
        const imgArr = data.hits;
        console.log(imgArr);
        renderImages(imgArr);        
    });
    e.target.reset();   
}
function imageTemplate ({webformatURL, largeImageURL, tags, likes, comments, downloads}) {
    return `<li><a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a><p>Likes: ${likes} | Comments: ${comments} | Downloads: ${downloads}</p></li>`
}

function renderImages(imgArr) {
  const markup = imgArr.map(imageTemplate).join('');
  refs.imagesList.insertAdjacentHTML('afterbegin', markup);
}