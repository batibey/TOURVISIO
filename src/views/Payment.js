import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'
import { MdHotel, MdError } from 'react-icons/md'
import { AiFillPlusSquare } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { useState } from 'react'


const ReservationResults = () => {

  const [nationality, setNationality] = useState(null)
  const checkbox = ["Cash", "Credit", "Credit Card", "Bank Transfer", "Manuel Payment", "Mollie Payment Gateway", "All Secure Payment Gateway ", "Saferpay Payment Gateway", "SberBank Payment Integration", "Alfabank Payment Integration", "Klarna Payment Integration", "Nova Payment Integration", "Revo Payment Integration", "Bankart Payment Integration", "SafeCharge Payment Integration", "Borica Payment Integration", "PayTabs", "AAIB", "Stripe", "PayTabs2", "CIB Bank", "VUB Bank", "Moneta", "GiroGate", "Monri", "Maib", "N-Genius"]

  return (
    <Row>
      <Col lg={8}>
        <Card style={{ height: "24vh" }}>
          <CardHeader style={{ borderBottom: "1px solid", padding: "18", height: "75.52px" }}>
            <Row style={{ justifyContent: "space-between", display: "flex", width: "100%" }}>
              <Col style={{ alignItems: "center", display: "flex" }}>
                <CardText ><h4 className='text-primary'>PASSENGER INFORMATION</h4></CardText>
              </Col>

              <Col style={{ textAlign: "end" }}>
                <Button color='primary'> EDIT RESERVATION</Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody  >
            <Card style={{ textAlign: "center" }}>
              <CardBody>
                <Row>
                  <Col xs="1" sm="1" md="1" lg="1" xl="1">
                    <Button color="primary"><BsFillPersonFill size={15} /></Button>
                  </Col>
                  <Col xs="2" sm="2" md="2" lg="2" xl="2">
                    <Input type="select" bsSize="md">
                      <option>Mrs.</option>
                      <option>Mr.</option>
                    </Input>
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
                  <Col><Input value={nationality} onChange={(e) => setNationality(e.target.value)} type="select" bsSize="md">
                    <option>Nationality</option>
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
          </CardBody>

        </Card>
        <Card >
          <CardHeader style={{ borderBottom: "1px solid" }}>
            <CardText ><h4 className='text-primary'>PAYMENT</h4></CardText>
          </CardHeader>
          <CardBody style={{ paddingTop: "15px" }}>
            {checkbox.map(box => (
              <div className='form-check form-check-inline m-1'>
                <Input type='radio' id='basic-cb-unchecked' />
                <Label for='basic-cb-unchecked' className='form-check-label'>
                  {box}
                </Label>
              </div>
            ))}
            <Row style={{ justifyContent: "space-between", display: "flex", width: "100%", paddingTop: "15px" }}>
              <Col style={{ alignItems: "center", display: "flex" }}>
                <CardText >  <div className='form-check'>
                  <Input className='border-danger' type='radio' id='danger-radio' />
                  <Label className='form-check-label' for='danger-radio'>
                    I agree the Terms And Conditions
                  </Label>
                </div></CardText>
              </Col>

              <Col style={{ textAlign: "end" }}>
                <Button color='primary'> PAY 318,71 EUR</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
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

export default ReservationResults
