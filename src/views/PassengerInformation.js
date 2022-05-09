import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'
import { BsFillPersonFill } from "react-icons/bs"
import { FcSearch } from "react-icons/fc"
import { useState } from 'react'
import { MdHotel, MdError } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiFillPlusSquare } from 'react-icons/ai'

const PassengerInformation = () => {

  const [nationality, setNationality] = useState(null)

  return (
    <Row>
      <Col lg={8}>
        <Col lg={12}>
          <strong>Passenger Informations</strong><br /><hr />
          <Card style={{ textAlign: "center" }}>
            <CardBody>
              <Row>
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                  <Button color="primary"><BsFillPersonFill size={15} /></Button>
                </Col>
                <Col xs="1" sm="1" md="1" lg="1" xl="1">
                  <Button color="primary"><FcSearch size={15} /></Button>
                </Col>
                <Col xs="3" sm="3" md="3" lg="3" xl="3" >
                  <div>
                    <Input placeholder='Name'
                    />
                  </div></Col>
                <Col xs="3" sm="3" md="3" lg="3" xl="3" >
                  <div>
                    <Input placeholder='Surname'
                    />
                  </div></Col>
                <Col><Input onChange={(e) => setNationality(e.target.value)} type="select" bsSize="md">
                  <option>Turkey</option>
                  <option>Australian</option>
                  <option>Canadian</option>
                  <option>English</option>
                  <option>Ethiopian</option>
                  <option>French</option>
                  <option>Italian</option>
                  <option>Germany</option>
                </Input></Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12}>
          <Card style={{ textAlign: "center" }}>
            <CardBody>
              <strong><CardText className='text-primary' style={{ textAlign: "left", marginTop: "5px" }}> Contact Informations </CardText></strong>
              <hr />
              <Row>
                <Col xs="4" sm="4" md="4" lg="4" xl="4" >
                  <div>
                    <Input placeholder='Email'
                    />
                  </div></Col>
                <Col xs="2" sm="2" md="2" lg="2" xl="2"><Input value={nationality} onChange={(e) => setNationality(e.target.value)} type="select" bsSize="md">
                  <option>+49</option>
                  <option>+90</option>
                  <option>+75</option>
                  <option>+10</option>
                </Input></Col>
                <Col xs="3" sm="3" md="3" lg="3" xl="3" >
                  <div>
                    <Input placeholder='Phone Number'
                    />
                  </div></Col>
              </Row>
              <br />
              <Row>
                <Col xs="3" sm="3" md="3" lg="3" xl="3" >
                  <div>
                    <Input placeholder='Adress'
                    />
                  </div></Col>

                <Col xs="2" sm="2" md="2" lg="2" xl="2" >
                  <div>
                    <Input placeholder='Zip Code'
                    />
                  </div></Col>
                <Col xs="2" sm="2" md="2" lg="2" xl="2" >
                  <div>
                    <Input placeholder='City'
                    />
                  </div></Col>
                <Col xs="2" sm="2" md="2" lg="2" xl="2"><Input onChange={(e) => setNationality(e.target.value)} type="select" bsSize="md">
                <option>Turkey</option>
                  <option>Australian</option>
                  <option>Canadian</option>
                  <option>English</option>
                  <option>Ethiopian</option>
                  <option>French</option>
                  <option>Italian</option>
                  <option>Germany</option>
                </Input></Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12}>
          <Card style={{ textAlign: "center" }}>
            <CardBody>
              <Row>
                <Col xs="5" sm="5" md="5" lg="5" xl="5" >
                  <div>
                    <Input
                      id="exampleText"
                      name="text"
                      type="textarea"
                      placeholder='Reservation Note'
                    />
                  </div></Col>
                <Col xs="4" sm="4" md="4" lg="4" xl="4" >
                  <div>
                    <Input placeholder='Reservation Made By'
                    />
                  </div>
                  <br />
                  <div>
                    <Input placeholder='Ace Customer No'
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
            <Button color="primary">DO YOU WANT TO ADD SERVICE TO YOUR RESERVATION ?</Button><br />
          </Card>
        </Col>
        <Row>
        <Col lg="1">
          <Button color="primary" tag={Link} to="/payment">PAY</Button>
        </Col>
        <Col lg="1">
          <Button color="primary" tag={Link} to="/reservation-results">BOOK</Button>
        </Col>
      </Row>
      </Col>
      <Col lg={4}>
        <Card >
          <CardHeader style={{ borderBottom: "1px solid" }}><h3 className='text-primary'>YOUR TRIP TO ANTALYA TR</h3></CardHeader>
          <CardBody style={{ marginTop: "10px" }}>
            <CardText><MdHotel style={{ border: "1px solid", borderRadius: "50%", padding: "3px" }} size={35} /> <b>Hotel Name </b></CardText>
            <CardText>Antalya US / TURKEY </CardText>
            <CardText>13.07.22 - 20.07.2022 </CardText>
            <CardText><b>Room 1</b></CardText>
            <CardText>Antalya US / TURKEY </CardText>
            <CardText>13.07.22 - 20.07.2022 </CardText>
            <Button color='danger'>Cancellation Deadline</Button>
            <CardText style={{ color: "red", marginTop: "10px" }}><MdError style={{ margin: "5px" }} size={25} />Attentiton! You have to cancel your reservation before the cancellation deadline. </CardText>
            <Row style={{ borderTop: "1px solid", paddingTop: "15px" }}>
              <Col style={{ paddingBottom: "10px" }}>
                <CardText style={{ marginTop: "11px" }}><h4 className='text-primary'>PROMOTION CODE</h4></CardText>
              </Col>
              <Col>
                <Form>
                  <Row>
                    <Col style={{ padding: "0", marginTop: "3px" }} md="9" lg="9">
                      <Input type="text" placeholder="Enter your code" />
                    </Col>
                    <Col style={{ padding: "0", marginBottom: "10px" }} md="3" lg="3">
                      <AiFillPlusSquare className='text-primary' size={43} />
                    </Col>
                  </Row>
                </Form>
              </Col>
              <CardText style={{ paddingTop: "13px" }}><h4 className='text-primary'>PRICE DETAILS</h4></CardText>
              <Row style={{ margin: "auto", marginBottom: "10px" }}>
                <Col>
                  <CardText ><b>HOTEL PRICE</b></CardText>
                </Col>
                <Col>
                  <CardText style={{ textAlign: "end" }} ><span className='text-success'>318,71 EUR</span></CardText>
                </Col>
              </Row>
              <CardText style={{ padding: "13px", textAlign: "center", border: "1px solid grey", borderRadius: "5px" }}> <b>TOTAL SALE PRICE</b> <span style={{ marginLeft: "10px" }} className='text-success'>318,71 EUR</span></CardText>
            </Row>
          </CardBody>
        </Card>
      </Col>

    </Row>
  )
}

export default PassengerInformation