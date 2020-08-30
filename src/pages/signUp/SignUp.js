import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import {noDigit,nonEmpty, validEmail} from "../../data/validators/validators";
import UsersAPI from "../../data/api/UsersAPI";
import AuthAPI from "../../data/api/AuthAPI";

const SignUp = ({name, setName, surname, setSurname, email, setEmail, password, setPassword}) => {

    const [errorMsg, setErrorMsg] = useState(null);
    const [success, setSuccess] = useState(false);

    const nameError = nonEmpty(name) || noDigit(name) ;
    const surnameError = nonEmpty(surname) || noDigit(surname);
    const emailError = nonEmpty(email) || validEmail(email);
    const passwordError = nonEmpty(password) ;

    const onSignUp = () => {
        if (nameError || emailError || surnameError || passwordError) {
            setErrorMsg('Заповніть форми');
            setSuccess(false);
        } else
            UsersAPI.getUsers()
                .then(({data: users}) => {
                    if(users.some(u => u.email === email)) {
                        setSuccess(false);
                        return setErrorMsg('User already exists');
                    } else {
                        return AuthAPI.signup({name, surname, email, password}).then(() => {
                            setSuccess(true);
                            setErrorMsg(false);
                        })
                    }
                })
                
    }

    return (<Container maxWidth='md' style={{height: '100vh'}}>
        <Grid container justify='center' alignItems='center' style={{height: '100vh'}}>
            <Grid item>
                {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                {success && <Alert severity="success">Signed up successfully</Alert>}
                <TextField
                    label='Ім*я'
                    fullWidth
                    value={name}
                    error={nameError}
                    helperText={nameError}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    label='Призвіще'
                    fullWidth
                    value={surname}
                    error={surnameError}
                    helperText={surnameError}
                    onChange={e => setSurname(e.target.value)}
                />
                <TextField
                    label='email'
                    fullWidth
                    value={email}
                    error={emailError}
                    helperText={emailError}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label='Пароль'
                    fullWidth
                    value={password}
                    error={passwordError}
                    helperText={passwordError}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button onClick={onSignUp}
                        fullWidth>Sign up</Button>
            </Grid>
        </Grid>
    </Container>);
};


export default SignUp;