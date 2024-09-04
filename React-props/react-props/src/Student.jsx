// Props - read Only properties shared between the compoenents ,
// A parent component send data to a child component
// <Component key=value>

import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div className = "student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Maddireddy",
    age: 0,
    isStudent: false
}

export default Student;
