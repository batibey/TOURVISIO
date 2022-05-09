import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'
import { FcApproval } from 'react-icons/fc'
import { v4 as uuidv4 } from 'uuid'
import { MdHotel } from 'react-icons/md'
import { AiFillPrinter } from 'react-icons/ai'

const ReservationResults = () => {


  return (
    <Row>
      <Col xs="12" sm="12" md="12" lg="12" xl="12">
        <Card style={{ textAlign: "center", paddingTop: "5%" }}>
          <CardHeader style={{ justifyContent: "center", display: "flex" }}><FcApproval size={50} /> <h2 className='m-1 text-success'><b>BOOKING SUCCESFUL!!</b></h2></CardHeader>
          <CardBody>
            <CardText> <b>Your booking has been sent to your operator</b></CardText>
            <CardText> <h2>Booking Number: <span className='text-success'>{uuidv4()}</span></h2></CardText>
            <CardText className='text-primary' style={{ textAlign: "left", marginTop: "40px" }}> HOTEL RESERVATION INFORMATIONS </CardText>
            <table class="table table-bordered default-table mt-1">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Room</th>
                  <th>Board</th>
                  <th>Travel Date</th>
                  <th>Status</th>
                  <th>Name Surname</th>
                  <th>Booking Number</th>
                  <th>Price</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><MdHotel size={35} /></td>
                  <td>Mardan Palace</td>
                  <td>Club Room</td>
                  <td>All Inclusive EN-US</td>
                  <td>05.05.2022 - 06.05.2022</td>
                  <td>TRUE</td>
                  <td>SAN TSG</td>
                  <td>318 ,71 EUR</td>

                  <td>
                    <Button color='primary'><AiFillPrinter size={20} /> Print Voucher</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>

        </Card>

      </Col>
      <Col xs="12" sm="12" md="12" lg="12" xl="12">
        <Card style={{ textAlign: "center" }}>
          <CardBody>
            <CardText className='text-primary' style={{ textAlign: "left", marginTop: "20px" }}> PAYMENT INFORMATIONS </CardText>
            <table class="table table-bordered default-table mt-1">
              <thead>
                <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Total Price</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>05.05.2022</td>
                  <td>318 ,71 EUR</td>

                  <td>318 ,71 EUR</td>

                </tr>
              </tbody>
            </table>
            
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ReservationResults
