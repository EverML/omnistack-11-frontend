import React from 'react';

import { Link } from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Profile() {

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bienvenida, APAD</span>
                <Link className="button" to="/incidents/new">Registrar nuevo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>    
                </button>
            </header>

            <h1>Casos registrados</h1>
            <ul>
                <li>
                    <strong>CASO 1:</strong>
                    <p>Caso TEST</p>

                    <strong>DESCRICAO</strong>
                    <p>Descripcion TEST</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO 2:</strong>
                    <p>Caso TEST</p>

                    <strong>DESCRICAO</strong>
                    <p>Descripcion TEST</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO 3:</strong>
                    <p>Caso TEST</p>

                    <strong>DESCRICAO</strong>
                    <p>Descripcion TEST</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO 4:</strong>
                    <p>Caso TEST</p>

                    <strong>DESCRICAO</strong>
                    <p>Descripcion TEST</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO 5:</strong>
                    <p>Caso TEST</p>

                    <strong>DESCRICAO</strong>
                    <p>Descripcion TEST</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>CASO 6:</strong>
                    <p>Caso TEST</p>

                    <strong>DESCRICAO</strong>
                    <p>Descripcion TEST</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

            </ul>
        </div>
    );
}