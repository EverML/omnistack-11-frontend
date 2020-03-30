import React,{useState} from 'react';

import { Link,useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    
    const history = useHistory();

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents',data,{
                headers:{
                    Authorization: ongId
                }
            })

            history.push('/profile');
        } catch (error) {
            alert('Error al regsitrar el caso, intente nuevamente')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Registrar nuevo caso</h1>
                    <p>Describa el caso detalladamente para encontrar un héroe para resolver eso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Volver al Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo del caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="Descripción"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                    <input placeholder="Valor en Guaraníes."
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />

                    <button className="button">Registrar </button>
                </form>
            </div>
        </div>

    );
}