const INITIAL_STATE = {
    sections : [
        {
          title: 'Black Clover',
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/349/999/616/anime-black-clover-asta-black-clover-wallpaper-preview.jpg',
          id: 1,
          linkUrl: 'shop/blackclover'
        },
        {
          title: 'AOT',
          imageUrl: 'https://wallpapermemory.com/uploads/418/mikasa-ackerman-background-hd-1600x900-205989.jpg',
          id: 2,
          linkUrl: 'shop/AOT'
        },
        {
          title: 'fullMetal',
          imageUrl: 'https://wallpaperaccess.com/full/1084967.jpg',
          id: 3,
          linkUrl: 'shop/fullMetal'
        },
        {
          title: 'Naruto',
          imageUrl: 'https://wallpaperaccess.com/full/302298.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/naruto'
        },
        {
          title: 'onePiece',
          imageUrl: 'https://wallpaperaccess.com/full/17370.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/onepiece'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        default:{
            return state;
        }
    }
}


export default directoryReducer;