import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {

    state = {
        showContactInfo:true
    }

    onShowClick= () => {
        const currentShowContactInfo = this.state.showContactInfo;
        this.setState({
            showContactInfo: !currentShowContactInfo
        })
    }

    onEdit = () => {

    }

    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }

    render() {
        
        const {id,name,email,phone} = this.props;
        const {showContactInfo} = this.state;

        return (
        <div className='card card-body mb-3'>
            <h4>{name} <i className='fas fa-sort-down' onClick={this.onShowClick}>+</i>
            <Link to={`/editcontact/${id}`} className="nav-link"><button>Edit</button></Link>
            <i className='fas fa-times' onClick={this.onDeleteClick} style={{float:'right',color:'red'}} >X </i>
            
            </h4>

            {showContactInfo ? (
                <ul className='list-group'>
                <li className='list-group-item'>Email : {email}</li>
                <li className='list-group-item'>Phone Number : {phone}</li>
            </ul>
            ) : null}
            
        </div>
        )
    }
}

export default Contact;
