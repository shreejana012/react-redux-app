import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectUser} from '../actions/index';

class UserList extends Component { 
    returnList() {
        // if(!this.props.user){
        //     return(<div>Select a user</div>);
        // }
        return this.props.users.map((user) => {  
            return (
                <li key={user.id} onClick={() => this.props.selectUser(user)}>
                    {user.first} {user.last}
                </li>
            );
        });
    }
     
    render() {
        
        return(
            <ul>
                {this.returnList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        users: state.users
    };

}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);