import React from 'react'
import './InicioRoteiro.css'

export default function LocalizaçaoData() {
  return (
    <div class="container">
      <h2>Seu roteiro inicia aqui! <br /> Digite abaixo as informações da sua viagem.</h2>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/019/080/633/non_2x/travel-line-icon-png.png"></img>
      </div>
      <div>
      <ul class="roteiroDataLocal">
      <li class="liDataTexto"><h1>Destino?</h1></li>
      <li class="liData"><input type="text" placeholder='Local'></input></li>
      </ul>
      <div>
        <ul class="roteiroDataLocal">
        <li class="liDataTexto"><h1>Quando?</h1></li>
        <li  class="liData"><input type="date" placeholder='dd/mm/aaaa'></input></li>
        <li  class="liData"><input type="date" placeholder='dd/mm/aaaa'></input></li>
        </ul>
      </div>
      </div>
      <br/>
      <button class="roteiroBotao">Avançar</button>
    </div>
  )
}
