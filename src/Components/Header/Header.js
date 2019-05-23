import React from 'react'
import {Link} from 'react-router-dom';

const header = (props) => {

  const {branding} = props;
  return (
   <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
       <div className='container'>
           <Link to='/' className='navbar-brand'>
                {branding}
           </Link>
           <div>
               <ul className="navbar-nav mr-auto">
                   <li className="nav-item">
                       <Link to="/" className="nav-link">Home</Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/addcontact" className="nav-link">Add Contact</Link>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
  )
}

export default header;