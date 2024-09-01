import {utils} from '../utils.js';
import { templates, select, classNames } from '../settings.js';

class Homepage{
    constructor(data) {
        console.log(data);
        const thisMusic = this;
        thisMusic.id = data.id;
        thisMusic.data = data;
        thisMusic.generateCategories();
    }
    generateCategories() {
        const thisMusic = this;
        let allCategories = [];
        thisMusic.categoriesContainer = document.querySelector(select.homepage.categoriesContainer);
        for (let song of thisMusic.data) {
            allCategories = allCategories.concat(song.categories);
        }
        allCategories = [...new Set(allCategories)];
        console.log(allCategories);

        for(let category of allCategories){
            const categoryLink = document.createElement('a');
            categoryLink.href = '#';
            categoryLink.textContent = category;

            thisMusic.categoriesContainer.appendChild(categoryLink);
            categoryLink.addEventListener('click', function(event){
                event.preventDefault();
                const clickedElement = this;

                const links = thisMusic.categoriesContainer.querySelectorAll('a');
                links.forEach(link => {
                    link.classList.remove(classNames.homepage.clicked);
                });
                clickedElement.classList.add(classNames.homepage.clicked);
                thisMusic.generateSongs(clickedElement);
            });
        }
    }
    generateSongs(selectedCategory){
        const thisMusic = this;
        const musicWrapper = document.querySelector(select.homepage.musicWrapper);

        const filteredSongs = thisMusic.data.filter(item => 
            item.categories.includes(selectedCategory)
        );

        const generatedHTML = templates.musicList(filteredSongs);

        const element = utils.createDOMFromHTML(generatedHTML);
        musicWrapper.innerHTML = "";
        musicWrapper.appendChild(element);
    }
}

export default Homepage;