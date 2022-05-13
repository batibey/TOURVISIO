import { Card, CardHeader, CardBody, Row, Col, Input } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

import { useEffect, useState } from 'react'
import HotelsSearch from './forms/hotelSearch'
import SearchMenu from './menuSearch/SearchMenu'
import ReservationSearch from './forms/reservationSearch'
import OnlineCheckIn from './forms/onlineCheckIn'
import HolidayPackageSearch from './forms/holidayPackageSearch'
import FlightSearch from './forms/flightSearch'
import SliderHome from "./sliders/sliderHome"
import ExcursionSearch from './forms/excursionSearch'
import { useSearch } from "../utility/context/SearchContext"
import VisaSearch from './forms/visaSearch'
import TourCultureSearch from './forms/tourCultureSearch'


const Home = () => {
  const [search, setSearch] = useState('hotel')
  const { setSearchApi, searchApi } = useSearch()
  const [error, setError] = useState(false)
  const [customer, setCustomer] = useState("")
  useEffect(() => {
    if (error) {
      return MySwal.fire({
        title: 'Error!',
        text: 'Check your form criteria!',
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      })
    }
   
  }, [error])
  // axios.get(`${process.env.REACT_APP_API_URL}/version`).then((res) => {
  //   console.log(res)
  // })
  return (
    <Row>
    <Col xs="12" sm="12" md="12" lg="6" xl="6">
      <Card >
        <CardHeader className='pb-1'>
      <SearchMenu setSearch={setSearch} search={search}/>
        </CardHeader>
        <CardBody>
        <Input value={customer} onChange={(e) => setCustomer(e.target.value) } type="select" bsSize="md">
            <option>Choose Customer</option>
            <option>Mustafa Batı</option>
            <option>Ömer Süt</option>
          </Input>
          {search === 'hotel' && <HotelsSearch customer={customer} setError={setError}  search={search} setSearchApi={setSearchApi} searchApi={searchApi} />}
          {search === 'holiday package' && <HolidayPackageSearch search={search} setSearchApi={setSearchApi} />}
          {search === 'flight' && <FlightSearch search={search} setSearchApi={setSearchApi} />}
          {search === 'visa' && <VisaSearch search={search} setSearchApi={setSearchApi} />}
          {search === 'excursion' && <ExcursionSearch search={search} setSearchApi={setSearchApi} />}
          {search === 'tourCulture' && <TourCultureSearch search={search} setSearchApi={setSearchApi} />}
        </CardBody>
      </Card>
    </Col>
    <Col xs="12" sm="12" md="12" lg="6" xl="6">
     <ReservationSearch/>
     <OnlineCheckIn/>
     <SliderHome/>
    </Col>
  </Row>
  )
}

export default Home
