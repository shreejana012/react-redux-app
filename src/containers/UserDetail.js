import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render(){
        return(
            <div>
                User FirstName:{this.props.user.first}
                User LastName:{this.props.user.last}
                User Age:{this.props.user.age}
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