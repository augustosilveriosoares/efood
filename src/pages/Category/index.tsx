import { useParams } from 'react-router-dom'

import Body from '../../components/Body'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

import { useGetCategoryProductsQuery } from '../../services/api'
import Loader from '../../components/Loader'

type Params = {
  id: string
}

const Category = () => {
  const { id } = useParams() as Params

  const { data: products } = useGetCategoryProductsQuery(id)

  if (products) {
    return (
      <>
        <Header />
        <Banner />
        <Body
          data={products}
          type="categoryCards"
          columns="repeat(3, 1fr)"
          rows="repeat(2, auto)"
          columnGap="40px"
          rowGap="32px"
          margin="category"
        />
      </>
    )
  }
  return <Loader />
}

export default Category
