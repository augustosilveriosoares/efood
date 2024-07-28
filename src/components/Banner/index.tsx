import { useParams } from 'react-router-dom'

import { useGetCategoryBannerQuery } from '../../services/api'

import { BannerStyle } from './styles'

type Params = {
  id: string
}

const Banner = () => {
  const { id } = useParams() as Params

  const { data: category } = useGetCategoryBannerQuery(id)

  return (
    <>
      {category && (
        <BannerStyle image={category?.capa}>
          <div className="container">
            <h1>{category?.tipo}</h1>
            <h1>{category?.titulo}</h1>
          </div>
        </BannerStyle>
      )}
    </>
  )
}

export default Banner
