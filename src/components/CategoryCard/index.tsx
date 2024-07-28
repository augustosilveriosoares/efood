import { Link } from 'react-router-dom'

import Button from '../Button'

import starRating from '../../assets/star-review.png'

import * as S from './styles'

type Props = {
  image: string
  tags: string[]
  title: string
  rating: number
  description: string
  to: string
}

const CategoryCard = ({
  image,
  tags,
  title,
  rating,
  description,
  to
}: Props) => {
  return (
    <S.Card
      title={`Clique no botão para saber mais sobre o restaurante ${title}`}
    >
      <S.Image src={image} alt={title} />
      <S.TagsContainer>
        {tags.map((tag) => (
          <S.Tag key={tag}>{tag}</S.Tag>
        ))}
      </S.TagsContainer>
      <S.Infos>
        <S.NameRating>
          <h3>{title}</h3>
          <S.Rating>
            <p>{rating}</p>
            <img src={starRating} />
          </S.Rating>
        </S.NameRating>
        <S.Description>{description}</S.Description>
        <Link to={to}>
          <Button width="auto" backgroundColor="red" customPadding="4px 6px">
            Saiba mais
          </Button>
        </Link>
      </S.Infos>
    </S.Card>
  )
}

export default CategoryCard
