import axios from "axios";
const PRODUCT_API_BASE_URL="http://localhost:8080/api/admin/produits";
class ProduitService{
    getAllProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    getAllProductsTissu(){
        return axios.get(PRODUCT_API_BASE_URL+'/tissu');
    }
    getAllProductsRideau(){
        return axios.get(PRODUCT_API_BASE_URL+'/rideau');
    }
    getAllProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    createProduct(produit){
        return axios.post(PRODUCT_API_BASE_URL,produit);
    }
    getProductById(prdId){
       return axios.get(PRODUCT_API_BASE_URL + '/' + prdId);
   }
   
   updateProduct(produit, prdId){
       return axios.put(PRODUCT_API_BASE_URL+ '/' + prdId, produit);
   }
   
   deleteProduct(prdId){
       return axios.delete(PRODUCT_API_BASE_URL + '/' + prdId);
   }
   getQteStocke(id){
    return axios.get(PRODUCT_API_BASE_URL + '/stock/' + id);


   }
}
   export default new ProduitService()