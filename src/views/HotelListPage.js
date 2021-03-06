import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button, CardImg } from 'reactstrap'
import { useSearch } from "../utility/context/SearchContext"
import { FaSearchLocation } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useHotels } from "../utility/context/HotelsContext"


const HotelListPage = () => {
  const { hotels } = useHotels() 
  const { searchApi } = useSearch()

  console.log(hotels)
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              {searchApi && searchApi.currency && <CardTitle> <FaSearchLocation size={30} className="m-1" />  {searchApi.search} | {searchApi.location} | {searchApi.nationality}
                | {searchApi.currency} | {searchApi.checkin} - {searchApi.checkOut} | {searchApi.adult} </CardTitle >}
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle>Hotel List</CardTitle>
            </CardHeader>
            <CardBody>
              <Card
                body
                color="secondary"
                outline
              >
                <Row>
                  <Col>
                    <CardImg
                      alt="Mardan Palace"
                      src="https://i.cnnturk.com/i/cnnturk/75/740x416/563733bba781b82b709b0b79.jpg"
                      height="100"
                    />
                  </Col>
                  <Col>
                    <CardText>
                      <b>{hotels[0] && hotels[0].name }</b>
                    </CardText>
                    <CardText>
                    {hotels[0] && hotels[0].location.name }
                    </CardText>
                    <CardTitle tag="h5">
                    </CardTitle>
                    <CardText>
                    </CardText>
                  </Col>
                </Row>

              </Card>
              <Card
                body
                color="secondary"
                outline
              >
                <Row>
                  <Col>
                    <CardImg
                      alt="Moonlight Hotel"
                      src="https://i.ck.cz/f/92450/44.jpg"
                      height="100"
                    />
                  </Col>
                  <Col>
                    <CardText>
                      <b>{hotels[1] && hotels[1].name }</b>
                    </CardText>
                    <CardText>
                    {hotels[1] && hotels[1].location.name }                    </CardText>
                    <CardTitle tag="h5">
                    </CardTitle>
                    <CardText>
                    </CardText>
                  </Col>
                </Row>

              </Card>
            
            </CardBody>
          </Card>
        </Col>
        <Col>
          <div className='content-area'>
            <table className="table table-bordered default-table">
              <thead>
                <tr>
                  <th>Room Amenities</th>
                  <th>Board</th>
                  <th>Status</th>
                  <th>Conditions</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single Standart</td>
                  <td>Room Only</td>
                  <td></td>
                  <td>05.07.2022</td>
                  <td>318 ,71 EUR</td>
                  <td>
                    <Button tag={Link} to="/passenger-info">Book</Button>
                  </td>
                </tr>
                <tr>
                  <td>Single Standart</td>
                  <td>Bed And Breakfast</td>
                  <td></td>
                  <td>05.08.2022</td>
                  <td>650 ,71 EUR</td>
                  <td>
                    <Button tag={Link} to="/passenger-info">Book</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </>)
}

export default HotelListPage
