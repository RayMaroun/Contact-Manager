import React, { Component } from 'react'
import Contact from '../Contact/Contact';
import AddContact from '../AddContact/AddContact';
import axios from 'axios';


class Contacts extends Component {

  

  deleteContact = (id) => {
   // ;
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      this.props.deleteContact(id);
    })
  }

  addContact = (contact) => {
    contact.id = Math.random();
    const newContacts = [...this.state.contacts,contact];
   
    this.setState({
      contacts : newContacts
    })
  }


  
  render() {

    
    return (
      <React.Fragment>
       
        {this.props.contacts.map((contact)=> {
            return <Contact id={contact.id} key={contact.id} name={contact.name} 
            email={contact.email} phone={contact.phone} 
            deleteClickHandler={() => this.deleteContact(contact.id)}
           
            />
        })}
      </React.Fragment>
    )
  }
}

export default Contacts;
