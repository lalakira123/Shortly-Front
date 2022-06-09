import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './../assets/images/shorts.png';

function Header(){
    return(
        <>
            <NavBar>
                <p></p>
                <div className='auth'>
                    <Link to='/signin'>
                        <p className='enter'>Entrar</p>
                    </Link>
                    <Link to='/signup'>
                        <p>Cadastrar-se</p>
                    </Link>
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