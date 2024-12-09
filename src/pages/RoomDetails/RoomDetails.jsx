import Container from '../../components/Shared/Container'
import { Helmet } from 'react-helmet-async'
import RoomReservation from '../../components/RoomDetails/RoomReservation'
import Heading from '../../components/Shared/Heading'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import { useParams } from 'react-router-dom'
import useAxiosCommon from '../../hooks/useAxiosCommon'



const RoomDetails = () => {
  
  const axiosCommon = useAxiosCommon()

  const {id} = useParams()


  const {data : room={}, isLoading, refetch} = useQuery({
    queryKey : ['rooms'],
    queryFn : async () => {
      const {data} = await axiosCommon.get(`/room/${id}`)

      return data
    }
  })
  
    if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      {room && (
        <div className='max-w-screen-lg mx-auto'>
          {/* Header */}
          <div className='flex flex-col gap-6'>
            <div>
              <Heading center title={room?.title}  />
              <p className='text-center'>{room?.category}</p>
              <div className='w-1/3 rounded-xl'>
                <img
                  className='object-cover w-full'
                  src={room?.image}
                  alt='header image'
                  height={300}
                  width={300}

                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            {/* Room Info */}
            <div className='col-span-4 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                
                </div>
                <div
                  className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
                >
                  <div> <span className='text-black font-semibold'>Degree :</span> {room?.degree}</div>
                  <div> <span className='text-black font-semibold'>Experience :</span> {room?.experience} Years</div>
                  
                </div>
              </div>

              <hr />
              <div
                className='
          text-lg font-light text-neutral-500'
              >
                {room?.description}
              </div>
              <hr />
            </div>

            <div className='md:col-span-3 order-first md:order-last mb-10'>
              {/* RoomReservation */}
              <RoomReservation room={room} refetch={refetch} />
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default RoomDetails