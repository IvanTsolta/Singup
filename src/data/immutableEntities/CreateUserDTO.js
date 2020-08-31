import Immutable from 'immutable';

const CreateUserDTO = Immutable.Record({
    name: '',
    surname: '',
    email: '',
    password: ''

})

export default CreateUserDTO;