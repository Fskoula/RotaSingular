import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div class="tela-home">
      <div class="novo-roteiro-container">
        <button class="botao-novo-roteiro">Faça seu roteiro</button>
      </div>

      <div class="conteudo-container">

        <div class="proxima-viagem-container">
          <span class="texto-grande">Está quase na hora!</span>
          <div class="informacoes-viagem">
            <div class="imagem-container">
              <img class="imagem" src="https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/" alt="" />
            </div>
            <div class="descricao-container">
              <div class="descricao-viagem">
                <span class="texto-medio">Paris, França</span>
                <span class="texto-pequeno">Segunda, 03/02 - Quinta, 07/02</span>
              </div>
              <div class="tempo-viagem">
                <div class="contagem-box">
                  <span class="numero-descricao">Dias</span>
                  <span class="numero-grande">08</span>
                </div>
                <span class="divisao-horario">:</span>
                <div class="contagem-box">
                  <span class="numero-descricao">Horas</span>
                  <span class="numero-grande">12</span>
                </div>
                <span class="divisao-horario">:</span>
                <div class="contagem-box">
                  <span class="numero-descricao">Minutos</span>
                  <span class="numero-grande">44</span>
                </div>
                <span class="divisao-horario">:</span>
                <div class="contagem-box">
                  <span class="numero-descricao">Segundos</span>
                  <span class="numero-grande">28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="destinos-populares-container">
          <span class="texto-grande">Destinos populares</span>
          <div class="carrossel">
            <div class="imagem-carrossel-container">
              <img class="imagem" src="https://t4.ftcdn.net/jpg/03/85/18/67/360_F_385186724_UEnB4ZIprHdg0myO5j2xSzi3TMKrQJak.jpg" alt="" />
              <span class="texto-flutuante">Gramado</span>
              <div class="favorito">
                <img src="/imagens/favorito.png" alt="" />
              </div>
            </div>
            <div class="imagem-carrossel-container">
              <img class="imagem" src="https://i.pinimg.com/1200x/49/0c/52/490c520c2f36e1b07eb0a06a9dccd6f8.jpg" alt="" />
              <span class="texto-flutuante">Chile</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
