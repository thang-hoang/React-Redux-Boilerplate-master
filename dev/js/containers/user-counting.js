import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increaseCount} from '../actions/index'

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserCounting extends Component {
    render() {
        // if (this.props.count==0) {
        //     return ( <div> 
        //         <h2> nothing here </h2>
        //         <button 
        //         onClick = { () => this.props.increaseCount(this.props.count) }>
        //         click here
        //         </button> 
        //     </div> );
        // }
        return ( 
            <div>
            <h2> { this.props.count } </h2> 
            <button key = { this.props.count }
                onClick = { () => this.props.increaseCount(this.props.count) }>
            click here
            </button> 
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ increaseCount: increaseCount }, dispatch);
}


// We don't want to return the plain UserCounting (component) anymore, we want to return the smart Container
//      > UserCounting is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserCounting);