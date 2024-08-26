import {select, classNames, settings} from './settings.js';
import Song from './components/Song.js';
import Discover from './components/Discover.js';
const app = {
    initPages: function(){
        const thisApp = this;
        thisApp.pages = document.querySelector(select.containerOf.pages).children;
  
        thisApp.navLinks = document.querySelectorAll(select.nav.links);
  
        const idFromHash = window.location.hash.replace('#/', '');
  
        let pageMatchingHash = thisApp.pages[0].id;
  
        for(let page of thisApp.pages){
          if(page.id == idFromHash){
            pageMatchingHash = page.id;
            break;
          }
        }
  
        console.log(pageMatchingHash);
        thisApp.activatePage(pageMatchingHash);
  
        for(let link of thisApp.navLinks){
          link.addEventListener('click', function(event){
            const clickedElement = this;
            event.preventDefault();
  
            // get page id from href attribute
            const id = clickedElement.getAttribute('href').replace('#', '');
  
            // change URL hash
            window.location.hash = '#/' + id;

            thisApp.activatePage(id);
          });
        }
      },
    activatePage: function(pageId){
        const thisApp = this;
        console.log(pageId);
        // add class "active" to matching pages. remove from non-matching
        for(let page of thisApp.pages){
          page.classList.toggle(classNames.pages.active, page.id === pageId);
          if(page.classList === classNames.pages.active){
            thisApp.initDiscover();
          }
        }
        // add class "active" to matching links. remove from non-matching
        for(let link of thisApp.navLinks){
          link.classList.toggle(
            classNames.nav.active, 
            link.getAttribute('href') === '#' + pageId
          );
        }
      },
      initSongs: function(){
        const thisApp = this;
        // console.log('thisApp.data: ', thisApp.data);
        const homeSongsList = document.querySelector(select.homepage.musicWrapper);
        for(let songData of thisApp.data.songs){
          new Song(songData, homeSongsList);
        }
      },
      Discover: function(){
        const thisApp = this;

        const discoverSongWrapper = document.querySelector(select.discover.musicWrapper);

        for(let songData of thisApp.data.songs){
          new Discover(songData, discoverSongWrapper);
        }
      },
      initData: function(){
        const thisApp = this;
        
        thisApp.data = {};
        const url = settings.db.url + '/' + settings.db.songs;
        fetch(url)
        .then(function(rawResponse){
          return rawResponse.json();
        })
        .then(function(parsedResponse){
  
          // save parsedResponse as thisApp.data.products
          thisApp.data.songs = parsedResponse;
          // execute initMenu method
          thisApp.Discover();
          thisApp.initSongs();
        });
      },
      // initDiscover: function(pageId){
      //   const thisApp = this;
      //   if(pageId === "discover"){
      //     thisApp.Discover();
      //   }
      // },
    init: function(){
        const thisApp = this;
        thisApp.initPages();
        thisApp.initData();
      },
}

app.init();