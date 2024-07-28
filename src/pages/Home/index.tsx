import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import PlacesList from '../../components/PlacesList'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data } = useGetRestaurantQuery()

  if (data) {
    return (
      <>
        <Hero />
        <PlacesList restaurants={data} />
      </>
    )
  }

  return <Loader />
}

export default Home
