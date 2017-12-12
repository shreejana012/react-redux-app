import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render(){
        if(!this.props.user){
            return(<div>Select a user</div>);
        }
        return(
            <div>
                User First Name: {this.props.user.first}
                User Last Name: {this.props.user.last}
                User Age: {this.props.user.age}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);