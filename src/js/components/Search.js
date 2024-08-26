import {utils} from '../utils.js';
import { templates } from '../settings.js';

class Search {
    constructor(data, elem){
        console.log(data);
        const thisMusic = this;
        thisMusic.id = data.id;
        thisMusic.data = data;
    }
    searchSong(){
        const thisMusic = this;
    }
}

export default Search;