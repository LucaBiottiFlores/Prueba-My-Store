export const productsModule = {
  namespaced: true,
  state: {
    allProducts: [
      {
        name: 'Tokyo Blues',
        category: 'Novela Contemporanea',
        publishingHouse: 'Tusquets',
        specialOffer: false,
        discount: 0,
        price: 7600,
        author: 'Haruki, Murakami',
        stock: 8,
        image:
          'https://images-na.ssl-images-amazon.com/images/I/71NAbQBF82L.jpg'
      },
      {
        name: 'Los años de peregrinación del chico sin color',
        category: 'Novela Contemporanea',
        publishingHouse: 'Tusquets',
        specialOffer: true,
        discount: 10,
        price: 12000,
        author: 'Haruki, Murakami',
        stock: 5,
        image:
          'https://www.planetadelibros.cl/usuaris/libros/fotos/252/m_libros/251975_portada_los-anos-de-peregrinacion-del-chico-sin-color_haruki-murakami_201701312038.jpg'
      },
      {
        name: 'El cielo es azul, la tierra blanca',
        category: 'Novela Contemporanea',
        publishingHouse: 'Alfaguara',
        specialOffer: false,
        discount: 0,
        price: 7600,
        author: 'Kawakami, Hiromi',
        stock: 8,
        image:
          'https://www.booktopia.com.au/covers/big/9788420423883/0000/el-cielo-es-azul-la-tierra-blanca-the-briefcase-aka-strange-weather-in-tokyo.jpg'
      },
      {
        name: 'Tokyo Ghoul 2',
        category: 'Manga',
        publishingHouse: 'Norma',
        specialOffer: false,
        discount: 0,
        price: 12600,
        author: 'Ishida, Sui',
        stock: 8,
        image:
          'https://images-na.ssl-images-amazon.com/images/I/81tT56t0Y8L.jpg'
      },
      {
        name: 'Hunter x Hunter 1',
        category: 'Manga',
        publishingHouse: 'Norma',
        specialOffer: false,
        discount: 0,
        price: 9600,
        author: 'Togashi, Yoshihiro',
        stock: 8,
        image:
          'https://images-na.ssl-images-amazon.com/images/I/815uHbvvu1L.jpg'
      },
      {
        name: 'Slam Dunk 3',
        category: 'Manga',
        publishingHouse: 'Norma',
        specialOffer: false,
        discount: 0,
        price: 12600,
        author: 'Inoe, Takehiko',
        stock: 8,
        image:
          'https://images-na.ssl-images-amazon.com/images/I/91543zJ+H6L.jpg'
      }
    ]
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.allProducts.push(newProduct)
    }
  },

  actions: {
    createProduct(context, product) {
      context.commit('ADD_PRODUCT', product)
    }
  }
}

//$store.state.products.allProducts
