import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <S.LogoFooter>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
    </S.LogoFooter>
    <S.Midias>
      <Link to="https://instagram.com">
        <img src={instagram} alt="instagram" />
      </Link>
      <Link to="https://facebook.com">
        <img src={facebook} alt="facebook" />
      </Link>
      <Link to="https://twitter.com">
        <img src={twitter} alt="twitter" />
      </Link>
    </S.Midias>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Container>
)

export default Footer
