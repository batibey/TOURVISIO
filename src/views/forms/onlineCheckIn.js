import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col, Form, Label, Input, Button } from 'reactstrap'

export default function OnlineCheckIn() {
  return (
    <>
      <Card >
        <CardHeader>
          <CardTitle>ONLINE CHECK-IN</CardTitle>
        </CardHeader>
        <CardBody>
          <Row >
            <Col>
              <Label className='form-label'>
                Name
              </Label>
              <Input type='text' id='online-check-name' autoFocus />
            </Col>
            <Col>
              <Label className='form-label'>
                Surname
              </Label>
              <Input type='text' id='online-check-surname' autoFocus />
            </Col>
            <Col>
              <Label className='form-label'>
                PNR No
              </Label>
              <Input type='text' id='gds-number' placeholder='101010' autoFocus />
            </Col>
            <Col>
              <Input className='mt-2' type="select">
                <option>Choose</option>
                <option>Pegasus</option>
                <option>THY</option>
              </Input>
            </Col>
            <Col>
              <Button className='mt-2' color="primary">Check In</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )
}
