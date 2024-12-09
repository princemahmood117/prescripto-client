import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Home/Rooms'
import Banner from '../../components/Banner/Banner'
// import Gallary from '../Gallary/Gallary'



const Home = () => {
  return (
    <div>
      
      <Helmet>
        <title>Prescripto</title>
      </Helmet>

      {/* Categories section  */}
      <Categories />

      {/* Rooms section */}
      <Rooms />

      <div className='mt-4 px-2'>
        {/* <Gallary></Gallary> */}
        <Banner></Banner>
      </div>


    


    </div>
  )
}

export default Home
