import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Roteiro.css';

export default function Roteiro() {
  const [roteiro, setRoteiro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/roteiros')
      .then(({ data }) => {
        if (data && data.length) setRoteiro(data[0]);
      })
      .catch((err) => setErro(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando…</p>;
  if (erro) return <p>Ops! {erro.message}</p>;
  if (!roteiro) return <p>Nenhum roteiro encontrado.</p>;

  return (
    <section className='roteiro'>
      <button>
        <img src="" alt="" />
      </button>

      <p className='roteiro-titulo'>Seu Roteiro para {roteiro.cidade} – {roteiro.pais}</p>

      {roteiro.dias.map((dia) => (
        <article key={dia.dia}>
          <p className='roteiro-subtitulo'> Dia {dia.dia}</p>

          <ul className='roteiro-texto'>
            <li> - Café da manhã: {dia.refeicoes?.cafe_da_manha}</li>
            <li> - {dia.museus?.[0]}</li>
            <li> - {dia.parques?.[0]}</li>
            <li> - Almoço: {dia.refeicoes?.almoco}</li>
            <li> - {dia.pontos_turisticos?.[0]}</li>
            <li> - {dia.pontos_turisticos?.[1]}</li>
            <li> - Jantar: {dia.refeicoes?.jantar}</li>
          </ul>
        </article>
      ))}

      <div className='roteiro-bt'>
        <button className='roteiro-botao'>Baixar PDF</button>
        <button className='roteiro-botao'>Editar</button>
      </div>
    </section>
  );
}
