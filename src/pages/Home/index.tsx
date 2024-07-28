import Header from '../../components/Header'
import Body from '../../components/Body'

import { useGetHomeItemsQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: categories } = useGetHomeItemsQuery()

  if (categories) {
    return (
      <>
        <Header />
        <Body
          data={categories}
          type="homeCards"
          columns="repeat(2, 1fr)"
          rows="repeat(3, auto)"
          columnGap="80px"
          rowGap="48px"
          margin="home"
        />
      </>
    )
  }
  return <Loader />
}

export default Home
