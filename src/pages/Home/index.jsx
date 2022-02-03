import {useState} from 'react'
import {FiLink} from 'react-icons/fi'
import Menu from '../../components/menu/index'
import './home.css'
import LinkItem from '../../components/LinkItem'


export default function Home(){
  const [link, setLink] = useState('');

  function handleShortLink(){
    alert(`meu link ${link}`)
  }

  return(
    <div className="container-Home">
        <Menu/> {/* Componente externo */}

          <div className="logo">
              <img src="/logo.png" alt="Sujeito link logo"/>
              <h1>Sujeito link</h1>
              <span>Cole seu link para encurtar 👇</span>
          </div>

          <div className="area-input">
            <div>
              <FiLink size={24} color="#FFF"/>
              <input type="text"
               placeholder="Cole seu link aqui" 
               value={link} 
               onChange={ (e)=> setLink(e.target.value)}
               />
            </div>

            <button onClick={handleShortLink}> Gerar Link </button>
          </div>

          <LinkItem/>

      </div>
    )
  }