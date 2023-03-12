import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryElements = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems => {
return galleryItems
      .map(({ preview, original, description }) => {
 		return `<a class="gallery__item" href=${original}>
					<img class="gallery__image" src=${preview} alt=${description} />
 		 			</a>`;
 })
   .join('');
 };

galleryElements.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
	caption: true,
	captionData: 'alt',
	captionDelay: 250,
});