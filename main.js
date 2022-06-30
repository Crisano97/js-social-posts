const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked": true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked": false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked": true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked": false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "is_liked": false,
        "created": "2022-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
        "is_liked": true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
        "is_liked": false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Mario Di Nio",
            "image": "null"
        },
        "likes": 95,
        "is_liked": true,
        "created": "2021-12-11"
    }
];

let isLiked = false;


posts.forEach((element) => {

    const postListContainer = document.getElementById('container');

    const newPostFullContainer = createNewElement('div', 'post');

    const postHeader = createNewElement('div', 'post__header');

    const postMeta = createNewElement('div', 'post-meta');

    const postMetaIcon = createNewElement('div', 'post-meta__icon');
    const profilePic = createNewImg(element.author.image, element.author.name, 'profile-pic')

    const postMetaData = createNewElement('div', 'post-meta__data');
    const postMetaAuthor = createNewElement('div', 'post-meta__author');
    postMetaAuthor.innerHTML = element.author.name;
    const postMetaTime = createNewElement('div', 'post-meta__time');
    postMetaTime.innerHTML = element.created;

    const postText = createNewElement('div', 'post__text');
    postText.innerHTML = element.content;

    const postImageContainer = createNewElement('div', 'post__image');
    const postImage = createNewImg(element.media);

    const postFooter = createNewElement('div', 'post__footer');

    const postLikes = createNewElementWithTwoClass('div', 'likes', 'js-likes');

    const buttonContainer = createNewElement('div', 'likes__cta');
    const button = createNewElementWithTwoClass('button', 'like-button', 'js-like-button');
    button.setAttribute('href', '#');
    button.setAttribute('data-postid', element.id);

    const iconLike = createNewElementWithTwoClass('like-button__icon', 'fas');
    iconLike.classList.add('fa-thumbs-up')
    const likeText = createNewElement('span', 'like-button__label');
    likeText.innerHTML = "Mi Piace";

    const likesCounter = createNewElement('div', 'likes__counter');
    likesCounter.innerHTML = `piace a <b>${element.likes}</b> persone  `;


    button.addEventListener('click', function () {

        if (isLiked ===false) {
            button.classList.add('like-button--liked');
            likesCounter.innerHTML = `piace a <b>${element.likes + 1}</b> persone  `;
            isLiked = true;
        }  else if (isLiked === true) {
            button.classList.remove('like-button--liked');
            likesCounter.innerHTML = `piace a <b>${element.likes}</b> persone  `;
            isLiked = false;
        }
       
    })

    postListContainer.append(newPostFullContainer);
    newPostFullContainer.append(postHeader, postText, postImageContainer, postFooter);
    postHeader.append(postMeta);
    postMeta.append(postMetaIcon, postMetaData);
    postMetaIcon.append(profilePic);
    postMetaData.append(postMetaAuthor, postMetaTime);
    postImageContainer.append(postImage);
    postFooter.append(postLikes);
    postLikes.append(buttonContainer, likesCounter);
    buttonContainer.append(button);
    button.append(iconLike, likeText);
});

function createNewElement(element, elementClass) {
    const newElement = document.createElement(element);
    newElement.classList.add(elementClass);
    return newElement;
}

function createNewElementWithTwoClass(element, elementClass1, elementClass2) {
    const newElement = document.createElement(element);
    newElement.classList.add(elementClass1, elementClass2);
    return newElement;
}

function createNewImg(imageUrl, imageAlt, imageClass) {

    const newImg = document.createElement('img');

    newImg.classList.add(imageClass);
    newImg.setAttribute('src', imageUrl);
    newImg.setAttribute('alt', imageAlt);
    return newImg;

}