import React from 'react'
import {connect} from 'react-redux'
import {getFriends} from '../actions'

class FriendsView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.getFriends();
    }

    render(){
        console.log(this.state.friends)
        return(
            <div>Here we go</div>
        );
    }
}

const mapStateToProps = state =>({
    friends: state.friends,
})

export default connect(
    mapStateToProps,
    {
        getFriends
    }
)(FriendsView)