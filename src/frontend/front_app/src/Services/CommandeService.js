import axios from "axios";
const COMMANDE_API_BASE_URL="http://localhost:8080/api/admin/commandes";
class CommandeService  {

createCommandeUser(user, userId){
    return axios.post(COMMANDE_API_BASE_URL + '/' + userId, user);
}
getCommandes(){
    return axios.get(COMMANDE_API_BASE_URL);
}
deleteCommande(id){
    return axios.delete(COMMANDE_API_BASE_URL + '/' + id);
}
   
}

export default new CommandeService();