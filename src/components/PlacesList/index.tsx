import Place from '../Place'
import * as S from './styles'

type Props = {
  restaurants: Food[]
}

const PlacesList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Food) => {
    const infos = []

    if (restaurant.destacado) {
      infos.push('Destaque da semana')
    }

    infos.push(restaurant.tipo)

    return infos
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Place
                id={restaurant.id}
                image={restaurant.capa}
                title={restaurant.titulo}
                resume={restaurant.descricao}
                infos={getRestaurantTags(restaurant)}
                rating={restaurant.avaliacao}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default PlacesList
