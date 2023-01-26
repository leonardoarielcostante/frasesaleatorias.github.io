import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [dataFrases, setFrases] = useState('');
  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const twitter = "https://www.twitter.com/intent/tweet?text=" + dataFrases.quote;

  const obtenerDatos = () => {
    fetch(url)
  .then(res => res.json())
  .then(data => {
    let numeroAleatorio = Math.floor(Math.random() * data.quotes.length);
    setFrases(data.quotes[numeroAleatorio]);
  })
  }

  useEffect( () => {
    obtenerDatos();
  }, [])

  return (
    <div className='contenedor'>
        <div id='quote-box'>
          <div className='fraseAutor'>
          <h2 id="text">"{ dataFrases.quote }"</h2>
          <h3 id="author">-{ dataFrases.author }</h3>
          </div>
          <div className='botones'>
          <button id='new-quote' onClick={ obtenerDatos }>Frase!</button>
          <a href={twitter} id='tweet-quote'>Tweet!</a>
          </div>
        </div>
    </div>
  )
}

export default App;
