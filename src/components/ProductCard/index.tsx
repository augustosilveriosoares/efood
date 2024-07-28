import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const ProductCard = ({ image, title, description, onClick }: Props) => {
  return (
    <S.Card title={`Clique no botão para saber mais detalhes sobre ${title}`}>
      <S.ProductImage src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.ProductDescription>{description}</S.ProductDescription>
      <Button
        width="100%"
        backgroundColor="beige"
        customPadding="4px 0"
        onClick={onClick}
      >
        Mais detalhes
      </Button>
    </S.Card>
  )
}

export default ProductCard
