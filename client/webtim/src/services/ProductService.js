import axios from 'axios';

const PRODUCTS_API_URL = "http://localhost:8080/api/products";

class ProductService {

    getProducts(){
        return axios.get(PRODUCTS_API_URL);
    }
}

export default new ProductService()