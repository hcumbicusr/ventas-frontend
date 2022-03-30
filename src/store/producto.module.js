import ProductoService from '../services/producto.service';

const productos = [];
const initialState = productos;

export const producto = {
  namespaced: true,
  state: initialState,
  actions: {
    list (searchValue) {
      return ProductoService.list(searchValue).then(
        productos => {
          console.log("Result productos", productos);
          return Promise.resolve(productos);
        },
        error => {
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    
  }
};
