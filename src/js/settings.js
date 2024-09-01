export const select = {
  templateOf: {
    musicList: "#template-music-list",
  },
    containerOf: {
        pages: '#pages',
    },
    nav: {
        links: '.main-nav a',
        wrapper: '.main-nav',
      },
    homepage: {
      musicWrapper: "#homepage .music__wrapper",
      categoriesContainer: '.categories',
    },
    discover:{
      musicWrapper: "#discover .render-music",
    },
    search: {
      searchWrapper: '#search',
      searchWrapperRender: '.render-music',
      searchBar: '.search-input',
    }
};

export const classNames = {
    nav: {
      active: 'active',
    },
    pages: {
      active: 'active',
    },
    homepage: {
      clicked: 'clicked',
    }
  };

  export const settings = {
    db: {
      url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
      songs: "songs",
    }
  };

  export const templates = {
    musicList: Handlebars.compile(document.querySelector(select.templateOf.musicList).innerHTML),
  };