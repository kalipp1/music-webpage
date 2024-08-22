import {utils} from '../utils.js';
import { templates } from '../settings.js';

class Song {
    constructor(data, elem){
        console.log(data);
        const thisMusic = this;
        thisMusic.id = data.id;
        thisMusic.data = data;
        thisMusic.render(elem);
        thisMusic.initActions();
    }
    render(elem){
        const thisMusic = this;
        const generatedHTML = templates.musicList(thisMusic.data);

        const element = utils.createDOMFromHTML(generatedHTML);

        elem.appendChild(element);
    }
    initActions(){
        const thisMusic = this;

        new GreenAudioPlayer('#audio-'+thisMusic.id+' .audio');
    }
}

export default Song;