import {useState} from 'react'
import {FiLink} from 'react-icons/fi'
import Menu from '../../components/menu/index'
import './home.css'
import LinkItem from '../../components/LinkItem'
import api from '../../Services/api'
import {saveLink} from  '../../Services/storeLinks'


export default function Home(){
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal , setShowModal] = useState(false);



  async function handleShortLink(){
    try{
      const response = await api.post('/shorten' , {long_url:link});
     setData(response.data); {/*captando os dados recebidos da api*/}
     setShowModal(true); {/*abrindo o modal*/}
      saveLink("@encurtaLink", response.data)

     setLink(''); {/*limpando o input */}
    }catch{
      alert(" Ops. \n Parece que algo deu errado. \n Tente novamente.")
      setLink('')
    }
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

          {/*condicional, se showModal for "false" o elemento nao será renderizado */}
          {showModal && (
            <LinkItem
            closeModal={()=>setShowModal(false)}
            content={data}
            />
          )}

      </div>
    )
  }