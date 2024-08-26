import {utils} from '../utils.js';
import { templates, select } from '../settings.js';

class Search {
    constructor(data, elem){
        console.log(data);
        const thisMusic = this;
        thisMusic.id = data.id;
        thisMusic.data = data;
        thisMusic.getElements(elem);
    }
    getElements(elem){
     const thisMusic = this;
     
     thisMusic.dom = {};
     thisMusic.dom.wrapper = elem;
     thisMusic.dom.searchBar = thisMusic.dom.wrapper.querySelector(select.search.searchBar);
    }
    searchSong(){
        const thisMusic = this;
        thisMusic.dom.searchBar.addEventListener('input', function(){
            const searchBarValue = thisMusic.dom.searchBar.value;
        });
    }
}

export default Search;