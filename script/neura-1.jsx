import React, { Component } from "react";

class UsersList extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        fetch("/users")
            .then(response => response.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <ul>
                {this.state.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }
}

export default UsersList;
