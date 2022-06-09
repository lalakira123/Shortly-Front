import styled from 'styled-components';
import axios from 'axios';
import { useContext } from 'react';

import UserContext from './../contexts/UserContext';

import Trash from './../assets/images/trash.png';

function UserUrl(props){
    const { id, setLoad, shortUrl, url, visitCount } = props;

    const { user } = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${user.token}`}
    }

    function deleteShortUrl(){
        if(window.confirm('Tem certeza que quer excluir esta Url?')){
            const promise = axios.delete(`https://shortly-lalakira123.herokuapp.com/urls/${id}`, config);
            promise.then((response) => {
                console.log(response);
                setLoad(true);
            })
            promise.catch((e) => {
                console.log(e.message);
            })
        }
    }

    function redirectToUrl(){
        window.open(`https://shortly-lalakira123.herokuapp.com/urls/open/${shortUrl}`, "_blank");
        setLoad(true);
    }

    return(
        <Section>
            <div className='info' onClick={redirectToUrl}>
                <p>{url}</p>
                <p>{shortUrl}</p>
                <p>Quantidade de visitantes: {visitCount}</p>
            </div>
            <div className='icone'>
                <img src={Trash} alt='trash' onClick={deleteShortUrl}/>
            </div>
        </Section>       
    );
}

export default UserUrl;

const Section = styled.section`
    display: flex;
    margin-bottom: 42px;
    width: 75%;
    height: 60px;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 21px;
        width: 90%;
        background-color: #80CC74;
        border-radius: 12px 0px 0px 12px;
    }
    .info:hover{
        cursor: pointer;
    }
    .icone{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
        border-radius: 0px 12px 12px 0px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        img{
            width: 22px;
        }
        img:hover{
            cursor: pointer;
        }
    }
`