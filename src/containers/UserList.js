import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserList extends Component {
    renderList() {
        return this.props.users.map((user) => {  
            return (
                <li onClick = {() => this.props.selectUser(user)}>{user.first} {user.last}</li>
            );
        });   
    }
    render(){
        return(
            <ul>
                {this.renderList()}
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