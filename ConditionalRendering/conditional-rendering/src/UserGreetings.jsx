import PropTypes from 'prop-types'

function UserGreetings(props){

    const loggedInMessage1 = <h2 className="logged-message">User Logged in {props.username}</h2> 
    const aboutToLoginMessage2 = <h2 className="about-message">Please login</h2>

    return (props.isLoggedIn ? loggedInMessage1 : aboutToLoginMessage2);

}

UserGreetings.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreetings.defaultProps = {

    username: "Maddireddy"

}

export default UserGreetings