import React, { Component } from 'react'

class sandbox extends Component {

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log(1);
        console.log(2);
    })

   
  }

  render() {
    return (
      <div>
        adi
      </div>
    )
  }
}

export default sandbox;
