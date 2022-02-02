import {FiLink} from 'react-icons/fi'
import Menu from '../../components/menu/index'
import './home.css'


export default function Home(){
  return(
    <div className="container-Home">
        <Menu/>

          <div className="logo">
              <img src="/logo.png" alt="Sujeito link logo"/>
              <h1>Sujeito link</h1>
              <span>Cole seu link para encurtar 👇</span>
          </div>

          <div className="area-input">
            <div>
              <FiLink size={24} color="#FFF"/>
              <input type="text" placeholder="Cole seu link aqui"/>
            </div>

            <button> Gerar Link </button>
          </div>


      </div>
    )
  }