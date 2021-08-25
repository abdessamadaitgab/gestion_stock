import logo from './logo.svg';
import './App.css';
import Footer from './Componments/Footer';
import Header from './Componments/Header';
import ListClients from './Componments/ListClients';
import ViewClient from './Componments/ViewClient';
import UpdateClient from './Componments/UpdateClient';
import CreateClient from './Componments/CreateClient';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div >
       <Router>
              <Header/>
                 <div className="container">
                   <Switch>
                      <Route path="/" exact component={ListClients}></Route>
                      <Route path="/users" component={ListClients}></Route>
                      <Route path="/add-user" component={CreateClient}></Route>
                      <Route path = "/update-user/:id" component = {UpdateClient}></Route>
                      <Route path = "/view-user/:id" component = {ViewClient}></Route>

                    </Switch>
                   </div>
                   
               <Footer/>
        </Router>
    
    </div>
  );
}

export default App;
