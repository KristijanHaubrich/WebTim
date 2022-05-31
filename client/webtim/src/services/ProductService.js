import axios from 'axios';

const PRODUCTS_API_URL = "http://localhost:8080/api/";

class ProductService {

    getProducts(uid){
        return axios.get(PRODUCTS_API_URL + "products" + "/" + uid);
    }

    addProduct(product){
        return axios.post(PRODUCTS_API_URL + "add", product)
    }

    getProduct(name){
        return axios.get(PRODUCTS_API_URL + 'product/' + name)
    }

    deleteProduct(name){
        return axios.delete(PRODUCTS_API_URL + "delete/" + name)
    }

    updateProduct(product){
        return axios.put(PRODUCTS_API_URL + "update", product)
    }
}

export default new ProductService()