import axios from 'axios';

const PRODUCTS_API_URL = "http://localhost:8080/api/";

class ProductService {

    getProducts(){
        return axios.get(PRODUCTS_API_URL + "products");
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
}

export default new ProductService()