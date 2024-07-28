import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import instagram from '../../assets/footer/instagram.png'
import facebook from '../../assets/footer/facebook.png'
import twitter from '../../assets/footer/twitter.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <Link to="/">
          <S.Logo src={logo} alt="Logo" title="Voltar para a página inicial" />
        </Link>
        <ul>
          <li>
            <a>
              <img
                src={instagram}
                alt="Instagram"
                title="Acesse o nosso perfil no Instagram"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src={facebook}
                alt="Facebook"
                title="Acesse o nosso perfil no Facebook"
              />
            </a>
          </li>
          <li>
            <a>
              <img
                src={twitter}
                alt="Twitter"
                title="Acesse o nosso perfil no Twitter"
              />
            </a>
          </li>
        </ul>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br />
          dos produtos é toda do estabelecimento contratado.
        </p>
      </div>
    </S.Container>
  )
}

export default Footer
