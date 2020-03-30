import React,{useState} from 'react';

import { Link,useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'



import logoImg from '../../assets/logo.svg';


export default function Register() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e)
    {
        e.preventDefault();

       const data ={
           name,
           email,
           whatsapp,
           city,
           uf
        };

        try{
            const response = await api.post('ongs',data);
            alert(`Tu ID de acceso: ${response.data.id}`);

            history.push('/');
        }catch(err)
        {
            alert(`Error al hacer el registro: ${err}`);
        }

        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Registro</h1>
                    <p>Registrate, entrá a la plataforma, y ayudá personas a encontrar los casos de tu ONG</p>
                     
                    <Link className="back-link" to="/">
                        <FiArrowLeft   size={16} color="#E02041"/>
                        Volver al login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                     placeholder="Nombre de la ONG"
                     value={name}
                     onChange={e => setName(e.target.value)}/>
                    <input 
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                    <input
                     placeholder="Whatsapp"
                     value={whatsapp}
                     onChange={e => setWhatsapp(e.target.value)}/>
                    
                    <div className="input-group">
                        <input 
                        placeholder="Ciudad"
                        value={city}
                        onChange={e => setCity(e.target.value)}/>
                        <input
                         placeholder="UF / Estado"
                         value={uf}
                         onChange={e=> setUf(e.target.value)}
                         style={{width:150}}/>
                    </div>
                    <button className="button">Registrar </button>
                </form>
            </div>
        </div>
    );
}