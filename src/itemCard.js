const ITEM_TYPES = {
    image: getImageElem,
    audio: getAudioElem,
    video: getVideoElem
}

function getImageElem(item) {
    const imgElem = document.createElement('img');
    imgElem.classList.add('gallery__card__img');
    imgElem.src = item.resource;

    return imgElem;
}

function getAudioElem(item) {
    const audioElem = document.createElement('audio');
    audioElem.classList.add('gallery__card__audio');
    audioElem.src = item.resource;
    audioElem.controls = true;

    return audioElem;
}

function getVideoElem(item) {
    const videoElem = document.createElement('video');
    videoElem.classList.add('gallery__card__video');
    videoElem.src = item.resource;
    videoElem.controls = true;

    return videoElem;
}

export function getItemCard(item) {
    const itemCard = document.createElement('div');
    itemCard.classList.add('gallery__card');

    const resourceElem = document.createElement('div');

    const getElemForType = ITEM_TYPES[item.type];
    resourceElem.appendChild(getElemForType(item));

    const titleElem = document.createElement('h6');
    titleElem.classList = "gallery__card__title";
    titleElem.textContent = item.title;

    itemCard.appendChild(resourceElem);
    itemCard.appendChild(titleElem);

    return itemCard;
}