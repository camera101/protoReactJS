import React from "react";
import axios from 'axios';

export default class Profile extends React.Component {
    constructor ( ) {
        super( );

        this.state = {
            friends: []
        }
        setTimeout(() => {
            axios.get('api/friends/list')
                .then( (response) => {
                    this.setState({friends: response.data});
                })
                .catch ( (response) => {
                    console.log(response);
                })

        }, 2000);
    }

    getFriendsList ( ) {
        return ['ionut', 'coleg'];
    }


    render( ) {

        return (
        <div>
            <h1> Profile Page </h1>
            <h2> Friends List </h2>
            <ul>
               {
                this.state.friends.map(function (listvalue) {
                    return <li>{listvalue.name}</li>
                })
               }
            </ul>
        </div>
    );
  }
}
