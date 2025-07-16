import React from 'react'
import { FaLock } from 'react-icons/fa';
import './Cadastro.css'

export default function Cadastro() {
    return (

        <div className='container-cadastro cadastro'>
            <form>
                <h1>Primeira vez aqui?</h1><br />
                <h3>Crie sua conta agora mesmo.</h3>

                <div className='input-field-cadastro'>
                    <input type='User' placeholder='Nome completo' />
                </div>

                <div className='input-field-cadastro'>
                    <input type='email' placeholder='E-mail' />
                </div>

                <div className='input-field-cadastro'>
                    <input type='password' placeholder='Senha' />
                    <FaLock className='icon' />
                </div><br />

                <br />
                <div>
                    <button>Cadastre-se</button>
                    <div className='signup-link-cadastro'>
                        <p><a href='#'>Já tenho uma conta</a></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

