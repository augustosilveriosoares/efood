import * as S from './styles'
import imageHero from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Hero = () => (
  <S.ImageHero style={{ backgroundImage: `url(${imageHero})` }}>
    <Link to="/">
      <h1>
        <img src={logo} alt="Efood" />
      </h1>
    </Link>
    <S.Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </S.Title>
  </S.ImageHero>
)

export default Hero
