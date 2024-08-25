import {utils} from '../utils.js';
import { templates } from '../settings.js';
class Discover {
    constructor(data, elem){
        console.log(data);
        const thisMusic = this;
        thisMusic.id = data.id;
        thisMusic.data = data;
        thisMusic.randomSong();
        thisMusic.validateId(elem);
    }
    randomSong(){
        const thisMusic = this;
        const songAmount = 4;
        const min = 1; //dont change 
        thisMusic.randomNumber = Math.floor(Math.random() * (songAmount-min+1) + min);
        console.log(thisMusic.randomNumber);
    }
    validateId(elem){
        const thisMusic = this;
        if(thisMusic.randomNumber == thisMusic.id){
            const generatedHTML = templates.musicList(thisMusic.data);
            const element = utils.createDOMFromHTML(generatedHTML);
            elem.appendChild(element);
        }
    }
}

export default Discover;