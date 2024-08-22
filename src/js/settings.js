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
    }
};

export const classNames = {
    nav: {
      active: 'active',
    },
    pages: {
      active: 'active',
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