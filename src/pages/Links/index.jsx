import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'

export default function Links(){
    return(
      <div className="links-container">

        <div className="links-header">
          <FiArrowLeft size={38} color="#FFF" />
          <h1>Meus links</h1>
        </div>

        <div className="links-item">
          <button className="link">
            <FiLink   size={18} color="#FFF"/>
            https://google.com
          </button>
          <button>
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>

      </div>
    )
  }