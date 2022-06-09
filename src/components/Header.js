import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from './../contexts/UserContext';

import Logo from './../assets/images/shorts.png';

function Header(){
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function exitUser(){
        setUser({name:"", token:""});
        navigate('/');
    }

    return(
        <>
            <NavBar>
                <p className='welcome'>{user.name ? `Seja bem-vindo(a), ${user.name}!` : ""}</p>
                <div className='auth'>
                    {
                        user.token ?
                        <>
                            <Link to='/user'>
                                <p>Home</p>
                            </Link>
                            <Link to='/'>
                                <p>Ranking</p>
                            </Link>
                            <p className='exit' onClick={exitUser}>Sair</p>
                        </> : 
                        <>
                            <Link to='/signin'>
                                <p className='enter'>Entrar</p>
                             </Link>
                            <Link to='/signup'>
                                <p>Cadastrar-se</p>
                            </Link>
                        </>
                    }
                </div>
            </NavBar>
            <Title>
                <Link to='/'>
                    <h1>Shortly</h1>
                </Link>
                <img src={Logo} alt='shorts'/>
            </Title>
        </>
    );
}

export default Header;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 171px 0px 171px;
    font-size: 14px;
    font-weight: 400;
    .auth{
        display: flex;
        p{
            margin-left: 22px;
        }
    }
    .enter{
        color: #5D9040;
    }
    .exit{
        color: #9C9C9C;
        text-decoration: underline;
    }
    .exit:hover{
        cursor: pointer;
    }
    .welcome{
        color: #5D9040;
    }
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 27px;
    padding: 0px auto;
    h1{
        font-size: 64px;
        font-weight: 200;
        color: #000000;
    }
`