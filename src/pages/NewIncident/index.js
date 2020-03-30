import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

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
                <form>
                    <input placeholder="Titulo del caso" />
                    <textarea placeholder="Descripción" />
                    <input placeholder="Valor en Guaraníes." />

                    <button className="button">Registrar </button>
                </form>
            </div>
        </div>

    );
}