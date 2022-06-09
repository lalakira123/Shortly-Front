import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from './../contexts/UserContext';

function SignIn(){
    const [ signIn, setSignIn ] = useState({email:"", password:""});
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function submitSignUp(e){
        e.preventDefault();
        setLoading(true);

        const promise = axios.post('https://shortly-lalakira123.herokuapp.com/signin', signIn);
        promise.then((response) => {
            const { data } = response;
            setUser(data);
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
                placeholder='E-mail'
                onChange={(e) => setSignIn({...signIn, email: e.target.value})}
                value={signIn.email}
                type='text'
                required
                disabled={loading}
                />
            <input 
                placeholder='Senha'
                onChange={(e) => setSignIn({...signIn, password: e.target.value})}
                value={signIn.password}
                type='text'
                required
                disabled={loading}
                />
            <button type='submit' disabled={loading}>Entrar</button>
        </Forms>
    );
}

export default SignIn;

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