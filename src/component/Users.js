import React, { Component } from "react";
import User from "./User";

export default class extends Component {
  render() {
    const { users, deleteUser } = this.props;
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const { id, name, email } = user;
              return (
                <User
                  key={index}
                  id={id}
                  name={name}
                  email={email}
                  deleteUser={deleteUser}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
