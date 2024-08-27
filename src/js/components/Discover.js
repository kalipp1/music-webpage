import {utils} from '../utils.js';
import { templates } from '../settings.js';

class Discover {
    constructor(data, elem){
        console.log(data);
        const thisMusic = this;
        thisMusic.id = data.id;
        thisMusic.data = data;
        thisMusic.randomSong();
        thisMusic.render(elem);
    }
    randomSong(){
        const thisMusic = this;
        const songAmount = thisMusic.data.length;
        const min = 1; //dont change 
        thisMusic.randomNumber = Math.floor(Math.random() * (songAmount) + min);
        console.log(thisMusic.randomNumber);
    }
    render(elem){
        const thisMusic = this;
            elem.innerHTML = "";
            const generatedHTML = templates.musicList(thisMusic.data[thisMusic.randomNumber-1]);
            const element = utils.createDOMFromHTML(generatedHTML);
            elem.appendChild(element);
            new GreenAudioPlayer('#discover #audio-'+thisMusic.data[thisMusic.randomNumber-1].id+' .audio');
    }
}

export default Discover;