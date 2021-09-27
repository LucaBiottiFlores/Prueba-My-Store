//Funcion de delay

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })

export const shoppingCarModule = {
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
        amount: 1,
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
        amount: 1,
        image:
          'https://www.planetadelibros.cl/usuaris/libros/fotos/252/m_libros/251975_portada_los-anos-de-peregrinacion-del-chico-sin-color_haruki-murakami_201701312038.jpg'
      }
    ]
  },

  getters: {
    finalTotal(state) {
      return state.allProducts.reduce((accumulator, product) => {
        accumulator +=
          product.price * (1 - product.discount / 100) * product.amount
        return accumulator
      }, 0)
    }
  },

  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.allProducts.push(newProduct)
    },
    ADD_PRODUCT_AMOUNT(state, productIndex) {
      state.allProducts[productIndex].amount++
    },
    SUBSTRACT_PRODUCT_AMOUNT(state, productIndex) {
      state.allProducts[productIndex].amount--
    },
    DELETE_PRODUCT(state, productIndex) {
      state.allProducts.splice(productIndex, 1)
    },
    DELETE_ALL_PRODUCTS(state) {
      state.allProducts = []
    }
  },

  actions: {
    addProduct(context, product) {
      const productIndexToLookFor = context.state.allProducts.findIndex(
        (productInsideCar) => productInsideCar.name === product.name
      )
      // Product Not Found: si esto pasa, se agrega el producto a la vista del carrito

      if (productIndexToLookFor === -1) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...newProduct } = product
        context.commit('ADD_PRODUCT', { ...newProduct, amount: 1 })
      }

      // Product Found: si esto pasa, se agrega "cantidad" al producto
      else {
        context.commit('ADD_PRODUCT_AMOUNT', productIndexToLookFor)
      }
    },
    substractProduct(context, product) {
      const productIndexToLookFor = context.state.allProducts.findIndex(
        (productInsideCar) => productInsideCar.name === product.name
      )
      // Cantidad de producto >= 0: se resta "cantidad" al producto
      if (productIndexToLookFor >= 0) {
        if (context.state.allProducts[productIndexToLookFor].amount > 1) {
          context.commit('SUBSTRACT_PRODUCT_AMOUNT', productIndexToLookFor)
        } else {
          // Cantidad de producto 0: se quita el producto de la vista del carrito
          context.commit('DELETE_PRODUCT', productIndexToLookFor)
        }
      } else {
        console.error('El producto no existe en el carrito')
      }
    },
    async buyProduct(context) {
      await delay(2000)
      context.commit('DELETE_ALL_PRODUCTS')
    }
  }
}
