import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Throphy from './../assets/images/ranking.png';

function Ranking() {
    const [ board, setBoard ] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://shortly-lalakira123.herokuapp.com/users/ranking');
        promise.then(response => {
            const { data } = response;
            setBoard(data);
        })
        promise.catch(e => {
            console.log(e);
        })
    }, []);

    return(
        <>
            <Title>
                <img src={Throphy} alt='throphy'/>
                <h2>Ranking</h2>
            </Title>
            <Scores>
                { board.map((user, index) => {
                    const { name, linksCount, visitCount } = user;
                    return(
                        <p><span>{index + 1}. {name}</span> - {linksCount} links - {visitCount} visualizações</p>    
                    );
                })}
            </Scores>
            <CreateUser>
                <Link to='/signup'>
                    <h3>Crie sua conta para usar nosso serviço!</h3>
                </Link>
            </CreateUser>
        </>
    );
}

export default Ranking;

const Title = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 87px;
    padding: 0px auto;
    h2{
        font-size: 36px;
        font-weight: 700;
        color: #000000;
    }
`

const Scores = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 57px;
    margin-right: 211px;
    margin-left: 211px;
    padding: 19px 40px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 24px 24px 0px 0px;
    box-shadow: 0px 4px 24px 0px #78B1591F;
    height: 241px;
    p{
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 13px;
        span{
            font-weight: 500;
        }
    }
`

const CreateUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 82px;
    font-size: 36px;
    font-weight: 700;
    h3{
        color: #000000;
    }
`