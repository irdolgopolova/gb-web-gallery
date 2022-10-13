import ("./style.scss");
import { getItemCard } from './itemCard';
import items from './itemsList'

const galleryListBlock = document.querySelector('#gallery__list');
items.map(item => galleryListBlock.appendChild(getItemCard(item)));