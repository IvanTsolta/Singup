export const setName = name => ({
    type: SignUpActionTypes.SET_NAME,
    name
});

export const setSurname = surname => ({
    type: SignUpActionTypes.SET_SURNAME,
    surname
});

export const setEmail = email => ({
    type: SignUpActionTypes.SET_EMAIL,
    email
});

export const setPassword = password => ({
    type: SignUpActionTypes.SET_PASSWORD,
    password
});

export const SignUpActionTypes = {
    SET_NAME: 'SET_NAME',
    SET_SURNAME: 'SET_SURNAME',
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD'

};