import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import UserUrl from './UserUrl';

import UserContext from './../contexts/UserContext';

function UserPage(){
    const { user } = useContext(UserContext);

    const [ url, setUrl ] = useState('');
    const [ listUrls, setListUrls ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ load, setLoad ] = useState(false);

    const config = { 
        headers : { Authorization: `Bearer ${user.token}`}
    }

    useEffect(() => {
        const promise = axios.get(`https://shortly-lalakira123.herokuapp.com/users/${user.id}`, config);
        promise.then((response) => {
            const { data } = response;
            setListUrls(data.shortenedUrls);
        })
        promise.catch((e) => {
            console.log(e.message);
        })
        setLoad(false);
    }, [load]);

    function shortUrl(e) {
        e.preventDefault();
        const promise = axios.post(`https://shortly-lalakira123.herokuapp.com/urls/shorten`, {url}, config);
        promise.then((response) => {
            console.log(response.data);
            setUrl("");
            setLoad(true);
        })
        promise.catch((e) => {
            console.log(e.message);
        })
    }

    return(
        <Container>
            <form onSubmit={shortUrl}>
                <input 
                    placeholder='Links que cabem no bolso'
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    type='text'
                    required
                    disabled={loading}
                    />
                <button type='submit'>Encutar link</button>
            </form>
            {listUrls.map((item) => {
                const { id, shortUrl, url, visitCount } = item;
                return(
                    <UserUrl 
                        key={id} 
                        setLoad={setLoad} 
                        id={id} 
                        shortUrl={shortUrl} 
                        url={url} 
                        visitCount={visitCount}
                        />
                );
            })}
        </Container>
    );
}

export default UserPage;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 147px;
    form{
        display: flex;
        justify-content: space-between;
        height: 60px;
        width: 75%;
        margin-bottom: 59px;
        input{
            width: 75%;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
            padding: 21px;
            color: #9C9C9C;
            font-weight: 400;
            font-family: 'Lexend Deca', sans-serif;
            &::placeholder {
                color: #9C9C9C;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
            }
        }
        button{
            width: 182px;
            border-radius: 12px;
            border: none;
            background-color: #5D9040;
            color: #FFFFFF;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 700;
            font-size: 14px;
        }
        button:hover{
            cursor: pointer;
        }
    }
`

