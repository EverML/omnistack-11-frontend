import React from 'react';

import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css'


import logoImg from '../../assets/logo.svg';


export default function Register() {

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
                <form>
                    <input placeholder="Nombre de la ONG"/>
                    <input placeholder="email"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Ciudad"/>
                        <input placeholder="UF / Estado" style={{width:150}}/>
                    </div>
                    <button className="button">Registrar </button>
                </form>
            </div>
        </div>
    );
}