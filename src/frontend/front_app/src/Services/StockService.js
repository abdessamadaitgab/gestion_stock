import axios from "axios";
const PRODUCT_API_BASE_URL="http://localhost:8080/api/admin/stock";
class StockService{
    getAllStock(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    getStockById(userId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + userId);
    }
    
    updateStock(user, userId){
        return axios.put(PRODUCT_API_BASE_URL + '/' + userId, user);
    }
}
export default new StockService()