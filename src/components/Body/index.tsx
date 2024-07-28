import { useState } from 'react'

import Category from '../CategoryCard'
import Product from '../ProductCard'
import Modal from '../Modal'

import { ListProps } from './styles'

import * as S from './styles'

interface BodyProps extends ListProps {
  type: 'homeCards' | 'categoryCards'
  data: HomeItemType[] | CategoryItemType[]
}

const Body = ({
  data,
  type,
  columns,
  rows,
  columnGap,
  rowGap,
  margin
}: BodyProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] =
    useState<CategoryItemType | null>(null)

  const handleProductClick = (categoryItem: CategoryItemType) => {
    setSelectedProduct(categoryItem)
    setIsVisible(true)
  }

  const getCategoryTags = (homeItem: HomeItemType) => {
    const tags = []

    if (homeItem.tipo) {
      tags.push(homeItem.tipo)
    }

    if (homeItem.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  return (
    <div className="container">
      <S.BodyContent>
        <S.List
          columns={columns}
          rows={rows}
          columnGap={columnGap}
          rowGap={rowGap}
          margin={margin}
        >
          {type === 'homeCards' && data
            ? (data as HomeItemType[]).map((homeItem: HomeItemType) => (
                <Category
                  key={homeItem.id}
                  image={homeItem.capa}
                  tags={getCategoryTags(homeItem)}
                  title={homeItem.titulo}
                  rating={homeItem.avaliacao}
                  description={homeItem.descricao}
                  to={`/category/${homeItem.id}`}
                />
              ))
            : type === 'categoryCards' && data
              ? (data as CategoryItemType[]).map(
                  (categoryItem: CategoryItemType) => (
                    <Product
                      key={categoryItem.id}
                      image={categoryItem.foto}
                      title={categoryItem.nome}
                      description={categoryItem.descricao}
                      onClick={() => handleProductClick(categoryItem)}
                    />
                  )
                )
              : null}
          <Modal
            isVisible={isVisible}
            onClick={() => setIsVisible(false)}
            product={selectedProduct}
          />
        </S.List>
      </S.BodyContent>
    </div>
  )
}

export default Body
