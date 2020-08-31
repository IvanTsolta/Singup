import {setEmail, setName,setSurname,setPassword, SignUpActionTypes} from "../../../data/redux/signUp/signUpActions";
import {connect} from "react-redux";
import SignUp from "../SignUp";

const mapStateToProps = state => ({
    name: state.signup.getIn(['userData', 'name']),
    surname: state.signup.getIn(['userData', 'surname']),
    email: state.signup.getIn(['userData', 'email']),
    password: state.signup.getIn(['userData', 'password']),


});

const mapDispatchToProps = {
    setName,
    setSurname,
    setEmail,
    setPassword
    
    
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);