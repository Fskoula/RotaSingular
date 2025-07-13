import './Onboarding.css'


export default function Onboarding() {
    return (
        <div class="tela-onboarding">
            <div class="imagem-container">
                <img class="imagem" src="https://i.pinimg.com/1200x/b7/0e/74/b70e741128d31f5a823d8ff62635b8b0.jpg" alt="" />
            </div>
            <div class="texto-container">
                <div class="titulo">
                    <span class="texto-grande">Roteiros únicos para pessoas únicas.</span>
                </div>
                <div class="descricao-container">
                    <span class="texto-grande">Olá, viajante!</span>
                    <span>Aqui, sua viagem começa com você.</span>
                    <span>Criamos roteiros personalizados que combinam com seu estilo de vida e jeito de explorar o mundo. seja em uma aventura solo, um momento a dois ou uma experiência autêntica e fora do óbvio.</span>
                    <span>Vamos começar?</span>
                </div>
            </div>
            <div class="botao-container">
                <a>
                    <img class="botao" src="/imagens/flecha.png" alt="Descrição da imagem" />
                </a>
            </div>
        </div>
    );
}