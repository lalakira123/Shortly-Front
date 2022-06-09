import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp(){
    const [ signUp, setSignUp ] = useState({name:"", email:"", password:"", confirmPassword:""});
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    function submitSignUp(e){
        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://shortly-lalakira123.herokuapp.com/signup', signUp);
        promise.then((response) => {
            console.log(response);
            navigate('/signin');
            setLoading(false);
        })
        promise.catch((e) => {
            console.log(e);
            setLoading(false);
        })
    }

    return(
        <Forms onSubmit={submitSignUp}>
            <input 
                placeholder='Nome'
                onChange={(e) => setSignUp({...signUp, name: e.target.value})}
                value={signUp.name}
                type='text'
                required
                disabled={loading}
                />
            <input 
                placeholder='E-mail'
                onChange={(e) => setSignUp({...signUp, email: e.target.value})}
                value={signUp.email}
                type='email'
                required
                disabled={loading}
                />
            <input 
                placeholder='Senha'
                onChange={(e) => setSignUp({...signUp, password: e.target.value})}
                value={signUp.password}
                type='password'
                required
                disabled={loading}
                />
            <input 
                placeholder='Confirmar senha'
                onChange={(e) => setSignUp({...signUp, confirmPassword: e.target.value})}
                value={signUp.confirmPassword}
                type='password'
                required
                disabled={loading}
                />
            <button type='submit' disabled={loading}>Criar Conta</button>
        </Forms>
    )
}

export default SignUp;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 139px 0px;
    input{
        height: 60px;
        width: 75%;
        margin-bottom: 25px;
        border-radius: 12px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
        font-size: 14px;
        padding: 21px;
        &::placeholder {
            color: #9C9C9C;
            font-weight: 400;
            font-family: 'Lexend Deca', sans-serif;
        }
    }
    button{
        height: 60px;
        width: 182px;
        margin-top: 36px;
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
        background-color: #5D9040;
        border-radius: 12px;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
    }
`