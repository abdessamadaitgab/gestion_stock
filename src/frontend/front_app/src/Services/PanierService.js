import axios from "axios";
const PRODUCT_API_BASE_URL="http://localhost:8080/api/admin/panier";
class PanierService{
    AjouterLigne(idp,quantity){
        return axios.post(PRODUCT_API_BASE_URL+ '/' + idp+'/'+quantity);
    }
    getLigneCommandes(id){
        return axios.get(PRODUCT_API_BASE_URL+ '/users/' + id);

    }
    deleteLigne(Id){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + Id);
    }
 
}
export default new PanierService()