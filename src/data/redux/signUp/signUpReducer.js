import Immutable from 'immutable';
import CreateUserDTO from "../../immutableEntities/CreateUserDTO";
import {SignUpActionTypes} from "./signUpActions";

const defaultState = Immutable.OrderedMap({
    userData: new CreateUserDTO()
});

const signUpReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SignUpActionTypes.SET_NAME:
            return state.setIn(['userData', 'name'], action.name);

            case SignUpActionTypes.SET_SURNAME:
                return state.setIn(['userData', 'surname'], action.surname);

        case SignUpActionTypes.SET_EMAIL:
            return state.setIn(['userData', 'email'], action.email);

            case SignUpActionTypes.SET_PASSWORD:
                return state.setIn(['userData', 'password'], action.password);

        default:
            return state;
    }
};

export default signUpReducer;