import {utils} from '../utils.js';
import { templates, select } from '../settings.js';

class Search {
    constructor(data, elem){
        const thisMusic = this;
        thisMusic.id = data.id;
        thisMusic.data = data;
        thisMusic.elem = elem;
        thisMusic.getElements(elem);
        thisMusic.searchSong();
    }
    getElements(elem){
     const thisMusic = this;
     
     thisMusic.dom = {};
     thisMusic.dom.wrapper = elem;
     thisMusic.dom.searchBar = thisMusic.dom.wrapper.querySelector(select.search.searchBar);
     thisMusic.dom.renderMusic = thisMusic.dom.wrapper.querySelector(select.search.searchWrapperRender);
    }
    searchSong(){
        const thisMusic = this;
        thisMusic.dom.searchBar.addEventListener('input', function(){
            let searchBarValue = thisMusic.dom.searchBar.value.toLowerCase();
            if(!searchBarValue.length){
                thisMusic.dom.renderMusic.innerHTML = "";
                return;
            }
            const songs = thisMusic.data.filter(function(item){
                return (item.title+" "+item.author).toLowerCase().includes(searchBarValue);
            })
            if(songs.length){
                thisMusic.renderSongs(songs);
            }
        });
    }
    renderSongs(songs){
        const thisMusic = this;

        thisMusic.dom.renderMusic.innerHTML = "We have found "+ songs.length + " results";
        for(let song of songs){
            const generatedHTML = templates.musicList(song);

            const element = utils.createDOMFromHTML(generatedHTML);
    
            thisMusic.dom.renderMusic.appendChild(element);    
            new GreenAudioPlayer('#search #audio-'+song.id+' .audio');
        }
    }
}

export default Search;