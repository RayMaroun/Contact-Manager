import React, { Component } from 'react'
import axios from 'axios';

 class EditContact extends Component {

    state = {
        name:'',
        email:'',
        phone:'',
        id:0
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.setState({
            id: parseInt(id)
        })
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            this.setState({
                name:res.data.name,
                email:res.data.email,
                phone:res.data.phone
            })
        })
    }
    
    editContact = (e) =>{
        e.preventDefault();
        const {id} = this.props.match.params;
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,this.state)
        .then(res => {
            this.props.editContact(this.state);
            this.props.history.push("/");
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    render() {
        const {name,email,phone} = this.state;
        return (
        <div className='card-mb-3'>
           <div className="card-header">
               Edit Contact
           </div>
               <div className="card-body">
                   <form onSubmit={this.editContact}>
                       <div className="form-group">
                           <label htmlFor="name">Name</label>
                           <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter name .." 
                           value={name} onChange={this.onChange} />
                       </div>
                       <div className="form-group">
                           <label htmlFor="email">Email</label>
                           <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter email .." 
                           value={email} onChange={this.onChange}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="phone">Phone</label>
                           <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter phone number .." 
                           value={phone} onChange={this.onChange}/>
                       </div>
                       <input type="submit" value="Edit Contact" className='btn btn-light btn-block'/>
                   </form>
               </div>
           </div>
        )
    }
}

export default EditContact;
