import Tag from '../Tag'

import star from '../../assets/images/star.svg'
import * as S from './styles'
import Button from '../Button'

export type Props = {
  id: number
  image: string
  title: string
  resume: string
  infos: string[]
  rating: string
}

const Place = ({ id, image, title, resume, infos, rating }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 195) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.TagsContainer>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.TagsContainer>
      <S.InfosContainer>
        <S.Infos>
          <h3>{title}</h3>
          <S.Rating>
            <h3>{rating}</h3>
            <img src={star} />
          </S.Rating>
        </S.Infos>
        <S.Description>{getDescription(resume)}</S.Description>
        <Button
          type="link"
          to={`/place/${id}`}
          title={'Clique aqui para mais informações sobre o restaurante'}
        >
          Saiba mais
        </Button>
      </S.InfosContainer>
    </S.Card>
  )
}

export default Place
