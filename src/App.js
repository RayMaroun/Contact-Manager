import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import Contacts from './Components/Contacts/Contacts';
import Sandbox from './Components/sandbox/sandbox';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './Components/AddContact/AddContact';
import EditContact from './Components/EditContact/EditContact';

class App extends Component {

  constructor(){
    super();
    this.state = {
        contacts:[]
    }
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => this.setState({
    contacts:res.data
  }))
}

deleteContact = (id) => {
  const newContacts = this.state.contacts.filter((contact) => {
    return contact.id!=id;
  })

  this.setState({
    contacts : newContacts
  })
}

addContact = (contact) => {
  console.log(contact);
  const newContacts = [...this.state.contacts,contact];
 
  this.setState({
    contacts : newContacts
  })
}

editContact = (contact) => {
  console.log(contact);
  const updateContactsArray = this.state.contacts.filter((item) => {
    console.log(item.id);
    if (item.id === contact.id) {
       item.name = contact.name;
       item.phone = contact.phone;
       item.email = contact.email;
     }

     return item;
 });
 console.log(updateContactsArray);

 
}
  render() {

    const showHello = false;
    return (
      
        <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Route exact path="/" 
            component={() => <Contacts contacts={this.state.contacts} 
            deleteContact ={(id) => this.deleteContact(id)}
            
              />}
          />
            <Route exact path="/addcontact" render={(props) => <AddContact {...props}
            addContact ={(contact) => this.addContact(contact)}  />}
             />

             <Route exact path='/test' component={Sandbox} />
             <Route exact path='/editcontact/:id' render={(props) => <EditContact  {...props}
              editContact ={(contact) => this.editContact(contact)}
             /> }  />
          
          </div>
          </div>
        </Router>
        
        
      
    );
  }
}

export default App;
