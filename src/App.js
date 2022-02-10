

import React, { Component } from 'react'
import AddUser from './component/AddUser'
import Users from './component/Users'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      users :[
        { id:1,
          name:"Selim Isabetli",
          email:"37selim1543@gmail.com"},
        { id:2,
          name:"Selim Isabetli",
          email:"37selim1543@gmail.com"},
        { id:3,
          name:"Selim Isabetli",
          email:"37selim1543@gmail.com"}
          
          
      ]

    }
    this.deleteUser =this.deleteUser.bind(this)
    this.addNewUsers =this.addNewUsers.bind(this)
  }
  addNewUsers(newUser){
    let updatedNewUsers= this.state.users;
    updatedNewUsers.push(newUser)
    this.setState({
      users:updatedNewUsers
    })

  }
  deleteUser(id) {
    let updateUser = this.state.users;
    updateUser = updateUser.filter(user=>user.id!==id);
    this.setState({users:updateUser})
  }
  
  render() {
   // console.log(this.state)
    return (
      <div className="container">
        <h2 style={{color: "red",textAlign:'center'}}>User App</h2>
        <hr />
        <AddUser addNewUsers ={this.addNewUsers} />
        <Users deleteUser={this.deleteUser} users ={this.state.users} />
        

      </div>
    )
  }
}

