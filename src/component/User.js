import React, { Component } from "react";

export default class td extends Component {
  constructor(props) {
    super(props)
    //this.onClickDelete =this.onClickDelete.bind(this) // arrow function da bind etmeye gerek yok 
  

  }
  onClickDelete=(id,e)=>{
    const {deleteUser} =this.props
    console.log("ıd:::",id)
    // console.log("clicked")
     //console.log(this)
     deleteUser(id)
    
  }
  render() {
    const {id,name,email}= this.props
    return ( 
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email} </td>
        <td>
          
          <button onClick={this.onClickDelete.bind(this,id)} className="btn btn-danger">Delete</button>
          
        </td>
      </tr>
    );
  }
}
