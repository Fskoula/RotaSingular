import React from 'react'
import './InicioRoteiroPerg.css'

export default function LocalizaçaoData() {
    return (
        <div class="container">
            <h2>Selecione abaixo itens essenciais para o seu roteiro</h2>
            <div class='containerCheck'>
            <input class="opcao" type="checkbox" id="meuCheckBox"></input>
            <label for="meuCheckBox">café</label>
            </div>
            <button class="roteiroBotao">Criar roteiro</button>
        </div>
    )

} 