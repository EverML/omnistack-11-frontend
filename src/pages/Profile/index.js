import React, { useState, useEffect } from 'react';

import { Link,useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Profile() {

    
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        })
            .then(response => {
                setIncidents(response.data);
            })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter( incident => incident.id !== id));
        } catch (error) {
            alert('Error al borrar el caso.');
        }
    }

    function handleLogout(e){
        localStorage.clear();

        history.push('/');
    }
 

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero" />
                <span>Bienvenida, {ongName}</span>
                <Link className="button" to="/incidents/new">Registrar nuevo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos registrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIPCIÓN</strong>
                        <p>{incident.description }</p>

                        <strong>VALOR:</strong>
                        <p>
                            {Intl.NumberFormat('es-PY',{style: 'currency',currency:'PYG'}).format(incident.value)}
                        </p>

                        <button type="button" onClick={()=> handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>

                ))}

            </ul>
        </div>
    );
}