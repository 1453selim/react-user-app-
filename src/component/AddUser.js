import React, { Component } from "react";

export default class extends Component {
    state ={
        name:"",
        email:""

    }
    onChangeInput (e){
        this.setState({[e.target.name]:e.target.value,[e.target.email]:e.target.value})
        console.log(e.target.value)
    }
   onSubmitFun (e) {
       console.log("submitted")
       const {addNewUsers} = this.props
       const {name,email} = this.state
       if(this.state.name!=="" &this.state.email!=="") {

           const newUsers = {
               id:Math.floor(Math.random()*100),
               name:name,
               email:email
            }
            addNewUsers(newUsers)
            e.preventDefault();
            this.setState({name:"",email:"",id:""})
        }
       
   }
 
  render() {
      const {name,email} = this.state
    return (
      <div className="card">
        <h4 className="card-header">Add Nev User</h4>
        <div className="card-body">
          <form onSubmit={this.onSubmitFun.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                className="form-control"
                value={name}
                onChange={this.onChangeInput.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="form-control"
                value={email}
                onChange={this.onChangeInput.bind(this)}
              />
            </div>
            <button type="submit" className="btn btn-danger btn-block">Add New User</button>
           
          </form>
        </div>
      </div>
    );
  }
}
